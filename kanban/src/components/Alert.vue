<template>
    <div   class= "alert" :class="{ 'alert-primary':typeAlert, 'alert-success':!typeAlert}" @click="change">
        {{help}} {{message}}

    </div>
</template>

<script>
import { type } from 'os';
export default {
    name: "Alert",
    props:['message'],
    data: function()
    {
        return{
            help: "Besoin d'aide ?",
          typeAlert: true
        }
    },
    methods: {
        change: function()
        {
           this.typeAlert = !this.typeAlert;
        },
    }
}
</script>

<style lang="scss" >
    .alert {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    cursor: pointer;
}
.alert-primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}

.alert-success {
    color: #60d431;
    background-color: #cce5ff;
    border-color: #c5fca0;
}
</style>