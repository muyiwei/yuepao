import router from '../router/index';
export default{
    install:function(Vue,option){
        console.log("111xxxxxx");
        router.beforeEach(function (to,from,next) {
            var lang = to.query.lang||"zh-cn";
            console.log(lang);
          
           if(!Vue.prototype.$langStr)
           {
            Vue.prototype.$langStr={};
            // new Vue({
            //     data: Vue.prototype.$langStr
                
            // })

            Vue.observable(Vue.prototype.$langStr)
            Vue.set(Vue.prototype.$langStr,"lang","")
            import("./lang/"+lang+".js").then(function(result){

                Vue.prototype.$langStr.lang = result["default"]
                next();
            },function(error){

            })



            // require.ensure([],function(require){
            //     var langStr="";
            //     if(lang=="zh-cn")
            //     {
            //          langStr = require(`./zh-cn.js`);
            //     }
            //     else 
            //     {
            //          langStr = require(`./en-us.js`);
            //     }
              
               
            //     Vue.prototype.$langStr.lang = langStr["default"];
            //     next();
                
            // },function(error){
            //     console.log(error)
            // })
           }
           else
           {
            next();
           }
          
          })
      

    }
}