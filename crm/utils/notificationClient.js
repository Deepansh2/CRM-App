/**
 *  whole file made in 1 AUGUST
 *   
 * this file should have the logic to connect  to the notification service
 */
const serverConfig = require("../configs/server.config")

const Client = require("node-rest-client").Client;

const client = new Client()// This is client object which will be used for calling the REST ARI'S

/**
 * Exposing a method which takes the request parameters for sending the 
 * notification request to the notification service
 */

module.exports = (subject,content,recepients,requester) =>{
    /**
     * Create the request body
     */
    const reqBody = {
        subject : subject,
        recepientEmails : recepients,
        content  : content,
        requester : requester
    }
    /**
     * Prepare the headers
     */
    const reqHeader = {
        "content-Type":"application/json"
    }
    /**
     * combine headers and req body togather
     */
    const args = {
        data : reqBody,
        headers : reqHeader
    }
    /**
     * Make a Post call and handle the response
     * 
     * URI should go in the .env file
     */
    try{
        client.post(serverConfig.URL,args,(data,res)=>{

        console.log("Request sent");
        console.log(data);
        })
    } catch(err){
        console.log(err.message);
    }
}