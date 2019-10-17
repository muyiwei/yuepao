<template lang="html">
  <div class="container" @scroll="scroll" ref="main" @click="click">
  	<swiper :options="swiperOption">
  		<swiper-slide v-for="activity in activityItem">
  			<img :src="activity.src" alt="">
  		</swiper-slide>
		
  	</swiper>	

    {{userName}}
    {{fullName}}
    <div @click="click">  </div>     
     <input v-model="oo.message" />
     {{oo.message}}
    <pull-list :count="listCount" :list="list"></pull-list>
  </div>
</template>

<script>
import {swiper,swiperSlide} from "vue-awesome-swiper";
import PullList from "../components/pullList"
import 'swiper/dist/css/swiper.css';
export default {
  data () {
   return {
      swiperOption:{
      	autoplay:true,
      	loop:true
      },
      activityItem:[{
       src:"/assets/image/1.jpg"
 
      },
      {
      src:"/assets/image/2.jpg"
      }
      ],
      listCount:10
   }
  },
  
  computed:{
    userName:function(){
      
      return this.$store.state.userName;
    },

    fullName :function(){

      return this.$store.getters.getFullName;
    },
    oo:function(){
      return this.$store.state.oo;
    },
    list:function(){
      return this.$store.state.list
    }
       
  }
   ,
  beforeRouteEnter:function(to,from,next){
    
    //debugger;
    //console.log("beforeRouterEnter "+this.$store)
    next();

  },
  beforeCreate:function(){
     
    console.log("before create "+this.$store)
    var self = this;
    this.$store.dispatch("GET_LIST");
  }
  ,



  components: {
  swiper,
  swiperSlide,
  PullList
  },
  methods:{
    scroll:function(){
       var self = this;
       var mainEl = self.$refs.main;
       if(!self.scrollTimes){
       self.scrollTimes = setTimeout(function(){

             self.scrollTimes = null;
             console.log("滚动了");
            if(mainEl.scrollTop+mainEl.clientHeight >= mainEl.scrollHeight)
            {
              console.log("到底了")
             // self.listCount+=5;
            }
 
       },60)
     }



    },
    click(){
   this.$store.commit("userName","hhh");
     
    }
  }
}
</script>

<style  scoped>
  
</style>
