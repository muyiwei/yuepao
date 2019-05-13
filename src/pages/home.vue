<template lang="html">
  <div class="container">
  	<swiper :options="swiperOption">
  		<swiper-slide v-for="activity in activityItem">
  			<img :src="activity.src" alt="">
  		</swiper-slide>
		
  	</swiper>	
  </div>
</template>

<script>
import {swiper,swiperSlide} from "vue-awesome-swiper";
import 'swiper/dist/css/swiper.css';
export default {
  data () {
   return {
      swiperOption:{
      	autoplay:true,
      	loop:true
      },
      activityItem:[{
       src:"/src/assets/image/1.jpg"
 
      },
      {
      src:"/src/assets/image/2.jpg"
      }
      ]
   }
  },
  components: {
  swiper,
  swiperSlide
  }
}
</script>

<style  scoped>
  
</style>
