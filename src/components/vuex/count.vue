<template>
    <div>
        <div>我是vuex{{$store.state.totalPrice}}</div>
        <!--<div>不一样:{{ttp}}</div>-->
        <button @click="add(price)">增加</button>
        <button @click="minus(price)">减少</button>
        <p>{{enter}}</p>
        <p>{{greet}}</p>
        <!--<p>{{ent}}</p>-->
        <!--<p>{{grt}}</p>-->
        <!--<button @click="a(price)">增加</button>-->
        <!--<button @click="b(price)">减少</button>-->
    </div>
</template>
<script> //导入
    import {mapState,mapMutations} from "vuex";
    export default{

        name:"count",
        data(){
            return{
                price:5
            }
        },
//        created:{
//            this.price
//        },
        methods:{
            add(){
                this.$store.commit("add",this.price)
            },
            minus(){
                this.$store.commit("jian",this.price)
            }
                    //add jian mutations中执行函数名字
//                ...mapMutations({
//                    add:"add",
//                    minus:"jian"
//                })
            //执行函数名字 和点击事件名字一样
//               ...mapMutations(["a","b"])
        },
        computed:{
            totalPrice(){
//                return this.$store.state.totalPrice;
                return this.$store.state.getTotal
            },
            enter(){
                return this.$store.state.enter;
            },
            greet(){
                return this.$store.state.greet;
            }
        }
        //监听名字和 数据名字一样
//        computed:mapState(["totalPrice","enter","greet"])

        //监听名字和 数据名字不一样
//        computed:mapState({
//            ttp:state=>state.totalPrice,
//            grt(state){
//                return state.greet+this.price
//            },
//            ent:"enter"
//        })
        //加上...必须加{}
//        computed:{...mapState({
//            ttp:state=>state.totalPrice,
//            grt(state){
//                return state.greet+this.price
//            },
//            ent:"enter"
//        })}
    }
</script>