<template>
  <div id="app">
   <common-header class="header"></common-header>  
 


   
 
 <router-view class="main">
   
   
 </router-view>


 <common-footer class="footer"/>

    
   </div>

  
</template>

<script>


import commonHeader from './components/commonHeader'
import commonFooter from './components/commonFooter'
export default {
  name: 'app',
   components:{commonHeader,commonFooter},
   
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
  background:#FFF;
}

</style>
