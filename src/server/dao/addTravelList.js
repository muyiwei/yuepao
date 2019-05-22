var db = require("./db.js");
const tableName = "travellist";
function addTravel(data,callback){
 
 db.addRow(tableName,data,callback);


}


module.exports = addTravel