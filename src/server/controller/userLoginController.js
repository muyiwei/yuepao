
const  queryUser = require("../dao/login.js");
const  userInfo = require("../util/userInfo.js")

function login(req)
{

 console.log(req.body);
 var username = req.param("username");
 var password = req.param("password");	
 var param = {
 	username:username,
 	password:password
 }


  return new Promise(function(resolve,reject){
          
       queryUser(param,function(data){
        console.log("login "+ data.result); 
       	if(data.result)
       	{
           resolve(data);
           userInfo.setUserInfo(req,data.data);
       	}
       	else
       	{
       		reject(data);
       	}	
       });
  })


}

function checkParam()
{

     return true;

}

module.exports=login;
