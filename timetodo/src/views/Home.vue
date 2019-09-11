<template>
  <div class="home mb-5 ">
    <h1 class="text-center">Worktime</h1>
    <div class="col-12 d-flex">
      <div class="col-6">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, culpa eveniet laborum neque asperiores ratione recusandae aspernatur natus repudiandae esse.</p>
        <p class="text-center" id="timer">{{countmin}}:{{countsec}}</p>
        <button @click="startTimer" class="btn btn-primary mr-3">Start timer</button>
         <button @click="pauseTimer" class="btn btn-primary ">Pause timer</button>
    
      </div>
    <Category></Category>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootswatch/dist/solar/bootstrap.min.css";
import { clearInterval, setInterval } from 'timers';

export default {
  name: 'home',
  data: function() {
    return {
    countmin: 25,
    countsec: '00',
    interval: null
    }
    
  },
  components: {
    Category
  },
  methods:{
    increaseTimer: function(){
    
      this.countsec--;
     
    if(this.countmin>=10 && this.countsec == 0){
       this.countmin--;
        document.getElementById('timer').textContent= this.countmin+":"+this.countsec;
       this.countsec = 59;
    }else if(this.countmin>=10 && this.countsec > 10){
      document.getElementById('timer').textContent= this.countmin+": "+this.countsec;
    }else if(this.countmin>=10 && this.countsec < 10){
      document.getElementById('timer').textContent= this.countmin+": 0"+this.countsec;
    }else if (this.countmin == 10  && this.countsec >10){
      document.getElementById('timer').textContent= this.countmin+":"+this.countsec;
    }else if(this.countmin<10 && this.countsec == 0){
      
        document.getElementById('timer').textContent= "0"+this.countmin+":"+this.countsec;
        this.countmin--;
        this.countsec=59;
    }else if(this.countmin<10 && this.countsec<10){
      document.getElementById('timer').textContent= "0"+this.countmin+":0"+this.countsec;
     
      
    }else if(this.countmin<10 && this.countsec>10){
      
        document.getElementById('timer').textContent= "0"+this.countmin+":"+this.countsec;
        
    }else if(this.countmin<=0  && this.countsec<=0){
      
        document.getElementById('timer').textContent= "0"+this.countmin+":0"+this.countsec;
        console.log(this.countmin+" et "+this.countsec);
    }
    },
    startTimer: function(){
      console.log(this.countsec);
      if (this.countsec <= 0 ) {
        this.countsec = 59
      }else if (this.countsec != 0) {
        this.countsec = this.countsec;
      }
      clearInterval(this.interval);
      this.interval = setInterval(this.increaseTimer, 50)
      
    },
    pauseTimer: function(){
      clearInterval(this.interval)
    }
  }
  
}
</script>
