
    <template>
    <div class="todo container col-4 ml-auto mr-auto text-right mt-5" id="todo">
        <div class="setList d-flex justify-content-center">
            <input type="text" v-model="list"> <button @click="addList" class="btn btn-primary">Send</button>
        </div>
        
        <div class="block d-block  ml-auto  text-center">
            
            <div class="d-flex flex-column align-items-center m-auto ">
                <h4 class="text-light mt-3 mb-3">Your list</h4>
               <ul class="d-flex flex-column align-items-end" id="v-for-todos">
                    <li class="d-flex justify-content-start mb-3 list"  v-for="(todo, index) in todos" :key="todo.index" :item="todo" :index="index">
                           <div class="btn btn-primary d-flex align-items-center"><input type="checkbox" v-model="todo.done"></div>
                               <p class="d-flex align-items-center" :class="{'active':todo.done}" >{{ todo.text }} </p><button class="btn btn-primary" @click="barreList(index)" >X</button>
                          </li>
                          
               </ul>
            </div>
             </div>
    </div>
    </template>

<script>
export default {
    name: "Category",
    data: function() {
        return {
            list: " ",
            todos: [
                { text: 'Apprendre JavaScript', done: false  },
                 { text: 'Apprendre VueJS', done: false  },
                ]
        }
    },
       
    methods: {
        addList: function()
        {
            this.todos.push({ text: this.list })
            this.list = " "
            
             },
        barreList: function(index)
        {
           this.todos.splice(index, 1);
        }
    }

}


</script>


 <style lang="scss">
        body{
            font-weight: bold;
            font-size: 1.2rem;
            color: rgb(27, 19, 19);
        }
        span{
            background-color: rgb(49, 48, 48);
            padding: .5rem;
        }

        .setList{
            height: 40px;
        }
        p{
            min-width: 150px;
            width: auto;
            height: 100%;
            color: #000;
            white-space: nowrap;
            padding: 0 0.6rem;
            background-color: #fff;
        }
        .list
        {
            height: 50px;
            
        }
        .btn{
            border-radius: 0 !important;
        }
        .active{
            text-decoration : line-through;
            color: rgba(201, 153, 21, 0.5);
        }
    </style>

