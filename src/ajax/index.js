import axios from 'axios'
import {xssfilter} from "../util"
axios.defaults.baseURL = "/api/";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.interceptors.response.use(functoin(response){
	// 统一对ajax返回 结果进行xss防护
	return xssfilter(data);
},function(error){

console.log(error.message);
return Promise.reject(error);
})
