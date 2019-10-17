import axios from 'axios'
//import {xssfilter} from "../util"
axios.defaults.baseURL = "/api/";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.interceptors.response.use(function(response){
	// 统一对ajax返回 结果进行xss防护
	return response.data;
},function(error){

console.log(error.message);
return Promise.reject(error);
})

export function getList(data){
	return axios.post("travelList",data);
}


