<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootswatch/dist/solar/bootstrap.min.css";
export default {
  
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c9d7e6;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
