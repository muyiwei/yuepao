<template>
<div >
	<div v-for="i in list">
		<div>{{i}}</div>
	</div>


</div>	



</template>

<script>
	export default{
		props:["count"],
		// data(){
		// 	// return {
		// 	// 	count:10
		// 	// }
		// },
		computed:{

			list(){
				var list = [];
				for(let i = 0;i<this.count;i++)
				{
					list.push(i)
				}
				return list;

			}
		}
	}



</script>