<template>
	
<div class="header">

<div class="header-container">
<div class="title" @click="click">首页</div>
<div>{{name}}</div>
<div class="right-ico iconfont"> &#xe663;
</div>
</div>
<commonFooter></commonFooter>
</div>


</template>


<script>
import commonFooter from './commonFooter'
	export default{
		props:["name"],
		data:function(){
			return {
				a:12
			}
		},
		methods:{
			click(){
              this.a=new Date().getTime();
			}
		},
		components:{
			commonFooter
		}
   
	}





</script>

<style scoped lang="scss">
@import "../css/function";
.header
{
	font-size:px2rem(17px);
	color:white;
	
	background:#76D49B;
	
	width:100%;
    position:fixed;
	top:0;
	.header-container{
	padding:0 px2rem(20px);
	height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .right-ico
    {
    height:px2rem(20px);
    width:px2rem(20px);
    }
}
}


	
</style>
