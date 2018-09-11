import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        totalPrice:0,
        enter:2,
        greet:5,
        calVal:"",
        calNum:""
    },
    getters:{
        getTotal(){
            return state.totalPrice;
        }
    },
    mutations:{
        add(state,price){
            state.totalPrice+=price;
        },
        jian(state,price){
            state.totalPrice-=price;
        },
        calCu(state,val){
            if (val == "C"){
                state.calVal = '';
            }else if(val == "="){
                state.calVal = eval(state.calVal);
            }else{
                state.calVal += val;
            }
            // state.calVal+= val;
            console.log(val)
        }
    },
    actions:{
        aaa(context,price){

        },
        bbb(context,price){

        }
    }
})
export default store;




