export default {
	setUserName:function(){
         console.log("action set userName")
	},
	setAge:function(){
        console.log("action set age");
	},
	"GET_LIST":function(){
		return new Promise(function(resolve,reject){
            
            setTimeout(function(){
            	resolve({listCount:20})
            })

		})
	}

}
