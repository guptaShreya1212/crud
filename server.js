const express=require('express');
const dotenv=require('dotenv');
const methodOverride=require('method-override');
const path=require('path');
const connectDB=require('./server/database/connection');
const app=express();
dotenv.config({path:'config.env'});

const port=process.env.PORT || 8080;
// mongodb connection
connectDB();
// Use built-in middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// Set EJS as the template engine
app.set("view engine","ejs");
//app.set("views",path.resolve(__dirname,"views/ejs"))

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.use('/',require("./server/routes/router"))

app.listen(port,()=>{
    console.log(`server at http://localhost:${port} `);
});