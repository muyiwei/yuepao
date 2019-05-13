<template>
	
<div class="header">

<div class="header-container">
<div class="title" >首页</div>

<div class="right-ico iconfont"> &#xe663;
</div>
</div>

</div>


</template>


<script>
	export default{
		
		methods:{
			click(){

			}
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
