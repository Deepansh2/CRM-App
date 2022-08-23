/**
 * This file is going to contain the logic for the integration
 * testing of the user.route.test.js 
 */
const User = require("../../models/user.model");
const db = require("../db")
const jwt = require("jsonwebtoken")
const config = require("../../configs/auth.config")
const request = require("supertest");
const app = require("../../server")
/**
 * This will be used to do the initial setup of the project
 */
let token;
beforeAll( async ()=>{
    /**
    * 2. Generate the token using the same logic and use for the test 
    */
    token = jwt.sign({id : "deep01"},config.secret, {
       expiresIn : 120
   });
    /**
     * Insert the data inside the test db
     */
    await db.clearDatabase();
    await User.create({
        name : "deepanshu",
        userId : "deep01",
        email : "deepanshuthakur791@gmail.com",
        userType : "ADMIN",
        password : "Welcome",
        userStatus : "APPROVED"
    });
});
/**
 * CleanUp of the project when everything is completed
 */
afterAll( async ()=>{
    await db.closeDatabase();
})


/**
 * Integration testing for the all users endpoint /crm/api/v1/users
 */

describe("Find all users", ()=>{
    it("find all the users",async ()=>{
        /**
         * 1.We need to have some data in the test DB | Done in the beforeAll method
        */
        //Need to invoke the API  -- we need to make use of supertest

        const res = await request(app).get("/crm/api/v1/users").set("x-access-token",token);

        //Code for the validation
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    "name" :"deepanshu",
                    "userid" :"deep01",
                    "email" :"deepanshuthakur791@gmail.com",
                    "userTypes" :"ADMIN",
                    "userStatus" : "APPROVED"
                })
            ])
        )
    })
}) ;

describe("Find user based on userId" , ()=>{
    it("test the endPont /crm/api/v1/users/:id",async ()=>{

        //Execution of the code
        const res = await request(app).get("/crm/api/v1/users/deep01").set("x-access-token",token);

        //Validation of the code
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    "name" : "deepanshu",
                    "userid": "deep01",
                    "email": "deepanshuthakur791@gmail.com",
                    "userTypes":"ADMIN",
                    "userStatus":"APPROVED"
                })
            ])
        )
    })
})