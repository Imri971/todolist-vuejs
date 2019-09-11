<template>
<div class="home ">
  <div class="showTitle">
   {{showTitle}}
  </div>
  
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="col-12 d-flex justify-content-around">
    <Card title="athletisme" @action="getTitle"></Card>
   
    <Card title="Basket-ball"  @action="getTitle"></Card>
    </div>
    <button @click="startTimer" class="btn btn-primary">Start timer</button>
    {{count}}
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootswatch/dist/solar/bootstrap.min.css";
import { clearInterval } from 'timers';

export default {
  name: 'home',
  components: {
    Card
  },
  data: function(){
    return{
      help: "",
      showTitle:"Sport",
      count: 0,
      interval: null
    }
  },
  methods:{
    getTitle: function(content){
      this.showTitle = content;
    },
    increaseTimer: function(){
      this.count++;
    },
    startTimer: function(){
      clearInterval(this.interval);
      this.interval = setInterval(this.increaseTimer, 1000)
    }
  }
  
}
</script>

<style lang="scss" >
  .showTitle{
  border: 1px solid #42b983;
  padding: 1rem;
  font-size: 2rem;
  position: absolute;
  top:1rem;
  left:1rem;
}

</style>
