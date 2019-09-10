

let app = new Vue({
    el: '#todo',
    data: {
        list : " ",
       isActive: false,
        todos: [
            { text: 'Apprendre JavaScript'  },
            { text: 'Apprendre Vue' },
            { text: 'Créer quelque chose de génial'}
          ]
    },
    methods: {
        addList: function()
        {
            app.todos.push({ text: app.list })
            app.list = " "
             },

        validList: function()
        {
            console.log(this.isActive);
            if (this.isActive) {
                this.isActive = !this.isActive;
            }else
            {
                this.isActive = true;
            }
            console.log(this.isActive);
        },
        barreList: function()
        {
            console.log(app.todos(0));
           // app.todos.$remove(0);
        }
    }

})