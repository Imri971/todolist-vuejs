<template>
  <div id="app">
    
    <h1>Coucou la famille</h1>
    <Alert message="Mon alerte"></Alert>
  </div>
</template>

<script>
import Alert from './components/Alert.vue'
export default {
    name: "app",
   components: {
     Alert
   }
}
</script>
<style lang="scss" >
$color : rgb(255, 31, 31);
  h1 {
    background-color: $color;
  }
</style>