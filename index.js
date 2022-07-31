require('dotenv').config();
const express = require ('express');
const router = express.Router();
const app =  express();
const ejs = require("ejs");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const customMware = require('./config/middleware');
const db = require ('./config/mongoose');


// using saas as middleware
const sassMiddleware = require("node-sass-middleware");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(
    sassMiddleware({
      src: "./assets/scss",
      dest: "./assets/css",
      debug: true,
      outputStyle: "extended",
      prefix: "/css",
    })
  );
app.use(expressLayouts);
  //for connection with static directory
app.use(express.static("./assets"));
app.set("layout extractStyles", true),
app.set("layout extractScripts", true),
app.use(express.urlencoded());


app.use("/",require('./routes'));
app.use("*", function (req,res){
    res.send("<h2>  Error :404  </h2>");
});



//establishing communication with server
app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log("Error in Connection");
        return;
    }
    else{
        console.log("Communicating with Server on Port--:",process.env.PORT);
    }

});
