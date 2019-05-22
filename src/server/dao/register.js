var db = require("./db.js");
const tableName = "userinfo";
function register(data,callback){
 
 db.addRow(tableName,data,callback);


}


module.exports = register