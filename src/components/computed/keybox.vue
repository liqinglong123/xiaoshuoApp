<template>
    <div class="col-3" @click="toCal(keyBoard)">{{keyBoard}}</div>
</template>
<script>
    import {mapMutations} from "vuex";
    export default{
        name:"keyBoards",
        props:["keyBoard"],
        methods:{
            toCal(){
                this.$store.commit("calCu",this.keyBoard);
            },
            ...mapMutations({toCal:'calCu'})
        }
    }
</script>
<style scoped>
    .col-3{
        border-left:1px solid #999;
        border-top:1px solid #999;
        padding:20px;
        text-align: center;
        font-size:0.6rem;
    }
    .col-3:first-child,.col-3:last-child{
        color:red;
    }

</style>