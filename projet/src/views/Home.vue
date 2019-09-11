<template>
<div class="home">
  <div class="show">
   {{show}}
  </div>
  
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Card title="athletisme" @action="sendText"></Card>
   
    <Card title="Basket-ball"  @action="sendText"></Card>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'home',
  components: {
    Card
  },
  data: function(){
    return{
      help: "",
      show:"Sport"
    }
  },
  methods:{
    sendText: function(content){
      this.show = content;
    }
  }
  
}
</script>

<style lang="scss" >
  .show{
  border: 1px solid #42b983;
  padding: 1rem;
  font-size: 2rem;
  position: absolute;
  top:1rem;
  left:1rem;
}

</style>
