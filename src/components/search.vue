<template>
    <div>
        <van-nav-bar title="搜索"  left-arrow @click-left="onClickLeft">

        </van-nav-bar>
        <form action="/">
            <van-search v-model="value" placeholder="请输入小说名称"  show-action @keyup.13="searchh"/>
        </form>
        <book :all_Data="all_Data"></book>
    </div>
</template>
<script>
    import book from "./book.vue";
    import {Search,NavBar,Toast,icon} from 'vant';
    export default {
        name:"search",
        components: {
            book,
            [Search.name]: Search,
            [NavBar.name]: NavBar,
            [Toast.name]: Toast,
        },
        data() {
            return {
                value:'',
                all_Data:''
            }
        },
        methods:{
            onClickLeft(){
//                    Toast('返回');
                this.$router.push({
                    path:"/"
                })
            },
            searchh(){
                if(this.value==''){
                    Toast('请输入关键字进行查询');
                }else{
                    this.$http.get('/apix/book/fuzzy-search?',{
                        params: {
                            query:this.value,
                        },
                    }).then(data=>{
//                    console.log(data);
                        this.all_Data = data.body.books;
                        console.log(this.all_Data);
                    })
                }

            }
        },

    }
</script>
<style>


</style>