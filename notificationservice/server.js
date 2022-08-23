const express = require("express")
const bodyParser  = require('body-parser')
const serverConfig = require("./configs/server.config")

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
/**
 * Initialize db connection
 */
mongoose.connect(dbConfig.DB_URL,()=>{
    console.log("Connected to mongoDB");
},err =>{
    console.log("Some err occurred",err.message)
})

/**
 * stitch the router to server.js
 */
require("./routes/notification.route")(app);

/**
 * Attach the cron file also
 */
require("./schedulers/emailScheduler");

app.listen(serverConfig.PORT,()=>{
    console.log("Server started at Port number :",serverConfig.PORT)
})

