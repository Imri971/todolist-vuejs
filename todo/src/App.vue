<template>
  <div id="app">
  <div class=" ml-auto mr-auto text-right mt-5">
  <div class="setTodo d-flex justify-content-center">
            <input type="text" v-model="todo"> <button @click="addTodo" class="btn btn-primary">Generate</button>
        </div>   
        <ul>
     <li class="d-flex justify-content-start mb-3 list"  v-for="(category, index) in categories" :key="category.index" :item="category" :index="index">
      
      {{ category.text }} 
     
                          
     </li>
   </ul>
  <div class="col-12 d-flex">
  
      <Category></Category>
      <Category></Category>
      <Category></Category>

  </div>
  </div>
   
  </div>
</template>

<script>
import Category from './components/Category.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootswatch/dist/solar/bootstrap.min.css";

export default {
  name: 'app',
  components: {
    Category
  },
  data: function(){
    return {
      todo: " ",
      categories: [
        { text: <Category></Category> },
        { text: <Category></Category> },
      ]
    }
  }, 

  
}
</script>

<style lang="scss">
$color :red;
</style>
