<template>
  <div id="app">





   <div @click="click" style="margin-top:200px">

 class bkj

   </div>

 <!-- <router-view class="main">


 </router-view> -->



<div :is="component"></div>

   </div>


</template>

<script>


import commonHeader from './components/commonHeader'
import commonFooter from './components/commonFooter'
import Vue from 'vue';





export default {
  name: 'app',
   components:{commonHeader,commonFooter},
   data(){
     return {
       a:11,
       component:""
     }
   },
   create:function(){

   },
   methods:{
     click:function(){

  var template = `<div><common-footer class="footer"/></div>`
  Vue.component("my-html", {
          data() {
              return {
                  content: '',
                  title: "哈哈哈哈哈",

              }
          },
          components:{
            commonFooter
          }
          ,

          template: template,
          mounted() {

          }
      })



  this.component="my-html"
     }
   }

}
</script>

<style lang="scss" >


@import "./css/function";
$headerHeight : px2rem(50px);
$footerHeight : px2rem(94px);
@font-face {font-family: 'iconfont';
    src: url('./assets/font/iconfont.eot');
    src: url('./assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./assets/font/iconfont.woff') format('woff'),
    url('./assets/font/iconfont.ttf') format('truetype'),
    url('./assets/font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family: 'iconfont';
}
.main{
  position:absolute;
  top:$headerHeight;
  bottom:$footerHeight;
  overflow:scroll;
  left:0;
  right:0;
  -webkit-overflow-scrolling: touch;
}
.header
{
  height:$headerHeight;

}
.footer
{
  height:$footerHeight;
  background:#FCFCFC;
}

</style>
