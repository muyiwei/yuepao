var db = require("./db.js");
const tableName = "userinfo";
function queryUser(data,callback){
 
 db.qurey(tableName,data,callback);


}


module.exports = queryUser