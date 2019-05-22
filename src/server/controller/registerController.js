
const  addUser = require("../dao/register.js");


function register(req)
{

 console.log(req.body);
 var username = req.param("username");
 var password = req.param("password");	
 var registerTime = new Date();
 var param = {
 	username:username,
 	password:password
 }

  console.log(".......= promise"); 
  return new Promise(function(resolve,reject){
       
       console.log(".......= promise");    
       addUser(param,function(data){

       	if(data.result)
       	{
           resolve(data);
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

module.exports=register;











