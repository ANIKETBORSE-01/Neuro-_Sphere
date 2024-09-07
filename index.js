var  express = require('express')
var adminRoute = require ("./routes/admin");
var userRoute = require ("./routes/user");
const bodyParser=require("body-parser")
var upload = require("express-fileupload");
var session = require("express-session");
 
var  app = express()
app.use(express.static("public/"));
app.use(upload());
app.use(session({
    secret:"neuro",
    resave:true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",userRoute);
app.use("/admin",adminRoute);



app.get("/",function(req,res){
    res.send("welcome user");
 });
 
 app.listen(2000);  