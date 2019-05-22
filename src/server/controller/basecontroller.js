 const registerController = require("./registerController.js");
 const addTravelController = require("./addTravelController");
 const  userLoginController = require("./userLoginController");
 const travelListController = require("./travelListController");
 const config = require("../ajax.param.config.js")
const controllerList = {

   register:registerController ,   
   userLogin:userLoginController,
   postTravel:addTravelController,                  
   travelList:travelListController
}

function success(res,data){
  
res.json({data:data,success:1})
}

function fail(res,data)
{
	res.json({data:data,success:0})
}

function checkParamFormat(req,apiName)
{
    
     var baseConfig = config[apiName];
     for(let i in apiName)
     {
     	if(apiName.hasOwnProperty(i)&&apiName[i]&&isblank(req.param[i]))
     	{
     		return {
     			result:false,
     			des:"$[i] cant not be null"
     		};
     	}
     }
     return {
     	result:true
     };

}

function isblank(s)
{
	if(s==null||s=="")
		return true;
}

module.exports = function(req,res)
{
 
var list = req.params.list;
console.log("list:"+list);
var data = req.query;
//console.log("xxxxxxxxxxxxxxxxxxxxxxxxx"+req.toString());
var checkFormatResult={result:true} //= checkParamFormat(data,list);
if(!checkFormatResult.result)
{
	fail(res,{des:checkFormatResult.des});
}	

try
{
   controllerList[list](req).then(function(data){
   	success(res,data)
   }).catch(function(data){
   	fail(res,data);
   });
}
catch(e)
{
   console.log("constroller involk error+="+e.message);
   	fail(res,{des:e.message});
  
}
}






