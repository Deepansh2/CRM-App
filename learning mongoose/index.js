/** 
* Wil use this file to connect to db and execute quries
*/

const mongoose = require("mongoose");


console.log(typeof mongoose)
/** 
*  Try making connection to mongodb
*/
mongoose.connect("mongodb://127.0.0.1/mongooseDemo",()=>{
    console.log("Connected to Mongo DB");
},err =>{
    console.log("err:",err);
})


const Student = require("./models/student.model");
/**database
 * operation
/**
 *
 *
 */
async function dbOperation(){


    try{
        /**deleting 
         * the collection
         */
        /** 
    await Student.collection.drop()// drop the exiting collection
    const student  = await Student.create({
        name:"Deepanshu",
        age : 100,
        email : "DeepanshuSing54@gmail.com",
        subjects : ["Maths,english,Chemistry"],
        country : "India",//This field get's ignored
        address : {
            lane1 : "l1",
            lane2 : "l2",
            street : "nehru",
            city : "Delhi",
            country : "India",
            pinCode : 110094
        }
    });
    const student1  = await Student.create({
        name:"Sumit",
        age : 115,
        email : "SumitK88@gmail.com",
        subjects : ["Graphics"],
        country : "India",//This field get's ignored
        address : {
            lane1 : "l1",
            lane2 : "l2",
            street : "nehru",
            city : "Delhi",
            country : "India",
            pinCode : 110094
        }
    });
    const student2  = await Student.create({
        name:"kashi",
        age : 100,
        email : "KashiSing54@gmail.com",
        subjects : ["History,Chemistry"],
        country : "India",//This field get's ignored
        address : {
            lane1 : "l1",
            lane2 : "l2",
            street : "25 futa",
            city : "Delhi",
            country : "India",
            pinCode : 110094
        }
    });
    const student3  = await Student.create({
        name:"Gourav",
        age : 79,
        email : "GouravKp1787@gmail.com",
        subjects : ["english"],
        country : "India",//This field get's ignored
        address : {
            lane1 : "l1",
            lane2 : "l2",
            street : "nehru",
            city : "Delhi",
            country : "India",
            pinCode : 110094
        }
    });
    const student4  = await Student.create({
        name:"Harivansh",
        age : 79,
        email : "HariKumar84@gmail.com",
        subjects : ["Maths,english"],
        country : "India",//This field get's ignored
        address : {
            lane1 : "l1",
            lane2 : "l2",
            street : "Dayalpur",
            city : "Delhi",
            country : "India",
            pinCode : 110094
        }
    });
    console.log(student);*/

    /**using mongoose 
     *  I want to search a record/document based on id
     */

    /** const stud = await Student.findById("62d69137684bf56025798b49");//_id This is indexed by default it is super fast query
    //This is binarySearch
    // console.log(stud)
    // const std = await Student.findOne({name : "Sumit"});//linear Search
     console.log(std)*/
    /**const stud = await Student.deleteOne({name : "Harivansh"});
    console.log(stud);*/
    /**Using
     * the where clause
     * students whose age is greater than 20
     */
    const studs = await Student.where("age").gt("70").where("name").equals("kashi");
    console.log(studs)


}catch(err){
    console.log(err);
}

}
/**
 * Execute the function
 * 
 */
dbOperation();
