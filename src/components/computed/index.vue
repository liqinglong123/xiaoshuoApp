<template>
    <div class="container">
        <div class="row result">
            <div class="col text-right">{{calVal==''?0:calVal}}</div>
        </div>
        <div class="row keyboard">
            <KeyBoards v-for="(item,index) in keyBoard" :key="index" :keyBoard="item"></KeyBoards>
        </div>
    </div>
</template>
<script>
    import  {mapState} from "vuex";
    import KeyBoards from './keybox.vue';
    export default{
        name:"cal",
        components:{KeyBoards},
        data(){
            return {
                keyBoard:[
                    'C', '+', '-', '*',
                    '7', '8', '9', '/',
                    '4', '5', '6', '0',
                    '1', '2', '3', '=',
                ]
            }
        },
        computed:{
            ...mapState(['calVal'])
        }
    }
</script>
<style>
    .result{
        background: #f4f4f4;
        border:1px solid #999;
        border-bottom:none;
        font-size:0.8rem;
    }
    .keyboard{
        border-bottom:1px solid #999;
        border-right:1px solid #999;
    }
</style>