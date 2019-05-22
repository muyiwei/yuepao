
const  travelList = require("../dao/travelList.js");




function checkParam()
{

     return true;

}

module.exports=function(req)
{





  return new Promise(function(resolve,reject){
          
       travelList({},function(data){
        console.log("travelList "+ data.result); 
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
