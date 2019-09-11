<template>
  <div class="hello">
 
    <div class="card col-12 p-3">
        <h1>sport</h1>
        <h2>{{title}}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <button @click="send" class="btn btn-primary">More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props:['title'],
  methods:{
    send: function(){2
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
