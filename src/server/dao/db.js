var mysql = require("mysql");
var config = require("./db.config.js");
var connection = mysql.createConnection(config);
var connectFalg = false;

function addRow (name,data,callback){

   connection.query('INSERT INTO '+name+' set ?',data,function(err,result){
            console.log("db operator error = "+err);
            if(err===null)
            {
            	callback({result:1,data:result})
            }
            else
            {
            	callback({result:0})
            }	

   });

}

function qurey(name,data,callback)
{
         var queryParam=""
         for(let i in data)
         {
         	if(data.hasOwnProperty(i))
         	{
         		if(queryParam=="")
         		{	
                queryParam+=i+"='"+data[i]+"'";
                }
                else
                {
                	queryParam+=" and "+i+"='"+data[i]+"'";
                }	

         	}	
         }	
       if(queryParam)
       {
        queryParam=' where '+queryParam;
       }

       var querysql='select * from '+name+queryParam;
       console.log("query slq:"+querysql)
	   connection.query(querysql,function(err,result,filed){
            console.log("db operator error = "+err);
            console.log("query result.............");
            console.log(result.length+"   www")    
            console.log(result)

            if(err!=null)
            {
            	callback({result:0})
            }
            else if(result.length==0)
            { 
            	callback({result:0})
            }
            else
            {  
            	callback({result:1,data:result})
            }	

   });
}


function close ()
{
	connection.close();
}
function connect(){

	connection.connect();
	connectFalg=true;

}
function isConnect(){
 return connectFalg;
}
// connect();
// addRow("userinfo",{username:111,password:222},function(err,result){

//   if(err===null)
//   {

//   }

// });


module.exports = {
	addRow:addRow,
	close:close,
	connect:connect,
	isConnect:isConnect,
	qurey:qurey
}