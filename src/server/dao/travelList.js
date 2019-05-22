var db = require("./db.js");
const tableName = "travellist";
function queryTravellist(data,callback){
 
 db.qurey(tableName,data,callback);


}


module.exports = queryTravellist