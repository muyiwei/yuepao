import {getList} from "../ajax";


export default {
	setUserName:function(){
         console.log("action set userName")
	},
	setAge:function(){
        console.log("action set age");
	},
	"GET_LIST":function({commit},data){
		return getList(data).then(function(response){
             commit("SETLIST",response.data);
		})

		}
	

}
