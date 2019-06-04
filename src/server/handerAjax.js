
const bodyParser = require("body-parser")
const path = "/api";
const controller = require("./controller/basecontroller.js")
const db = require("./dao/db.js")
var handerAjax = function(app){
	//console.log("xxxxx");

if(db.isConnect())
{	
db.connect();
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(path, apiRoutes);
app.post("/api/:list",function(req,res){
console.log(req.query,req.params)
console.log(req.body);
controller(req,res);


// var data=require('../jsonData/'+list+".json").data;
// res.json({data:data,success:1})
})    
}





module.exports = {
handerAjax:handerAjax
}