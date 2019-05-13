<template>
<div class="footer">
	

<ul>
	<li class="home">
    <div class="iconfont">&#xe8a0;</div>
	<div>{{ $langStr.lang}}</div>
</li>
	<li class="go">
   <div class="iconfont">&#xe604;</div>
   <div>约跑</div>
	</li>
	<li class="walk">
  <div class="iconfont">&#xe7f1;</div>
  <div>约行</div>
	</li>

	<li class="mine">
<div class="iconfont">&#xe619;</div>
<div>我的</div>
	</li>


</ul>

</div>


</template>


<script>
import Vue from "vue"
var a = {
	b:11
}
//Vue.set(a,"d",12)

	export default
	{
   created(){
		 setTimeout(()=>console.log(this.$langStr),100)
		// setTimeout(()=>{Vue.set(this.$data,"d",44)},200)
	 },
	 data(){
		 return {c:a}
	 }
	}




</script>

<style scoped lang="scss">
	
@import "../css/function";	
.footer
{
	position:fixed;
	width:100%;
	bottom:0;
	font-size:px2rem(16px);
	ul{
	padding:0 px2rem(20px);	
	height:100%;
	display:flex;
	align-items:center;
	justify-content:space-between;
	li{
		text-align:center;
	}
    }


}



</style>