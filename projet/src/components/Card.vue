<template>
  <div class="hello">
 
    <div class="card">
        <h1>sport</h1>
        <h2>{{title}}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quisquam, mollitia necessitatibus fugiat nobis, deleniti ad odit dolorum asperiores quidem iure maiores eum natus tempore.</p>
        <button @click="send">More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props:['title'],
  methods:{
    send: function(){
      this.$emit("action", this.title)
    }
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
