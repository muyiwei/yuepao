
const  travelList = require("../dao/travelList.js");







function checkParam()
{

     return true;

}

module.exports=function (req)
{

 console.log(req.body);
           var param={
            title: req.param("title"),
            beginTime: req.param("beginTime"),
            endTime: req.param("endTime"),
            cantJoinTime: req.param("cantJoinTime"),
            joinMax: req.param("joinMax"),
            content: req.param("content"),
            type:1,
            releaseUsername:username
          }

  return new Promise(function(resolve,reject){
          
       travelList(param,function(data){
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