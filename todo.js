

let app = new Vue({
    el: '#todo',
    data: {
        list : " ",
       isActive: false,
        todos: [
            { text: 'Apprendre JavaScript', done: false  }
          ]
    },
    methods: {
        addList: function()
        {
            app.todos.push({ text: app.list })
            app.list = " "
             },
        barreList: function(index)
        {
           
            app.todos.splice(index,1);
          
        }
    }

})