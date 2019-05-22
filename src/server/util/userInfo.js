
var sessionKeys = require("./sessionKeys.js");

function save (req,data)
{
	var session = req.session;
	if(!session[sessionKeys.USER_INFO])
	{
      session[sessionKeys.USER_INFO] = data[0]; 
	} 	
}


function get(req)
{
var session = req.session;
	return 	session[sessionKeys.USER_INFO];
}






module.exports = {
	setUserInfo:save,
	getUserInfo:get
}


