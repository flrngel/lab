var express=require("express");
var bodyParser=require("body-parser");

var app=express();
app.use(bodyParser());

app.post("/test",function(req,res){
	console.log(req.body);
	console.log(req.body.a);
});

app.listen(3000);

console.log("server is now listening (port: 3000)");
