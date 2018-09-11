<template>
    <div>
        <van-nav-bar title="排行" left-arrow>
            <van-icon name="search" slot="right" />
        </van-nav-bar>

        <van-tabs type="card" class="car" @click="requesst" >
            <van-tab v-for="index in type" :title="index" :key="index"></van-tab>
        </van-tabs>
        <van-tabs @click="change" v-model="active">
            <van-tab v-for="(item,index) in all_type" :title="item.title" :key="index">
                <book :all_Data="all_Data"></book>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
    import book from "./book.vue";
    import { NavBar,Icon,Tab, Tabs,Toast} from 'vant';
    export default{
        name: "sort", components: {
            book,
            [NavBar.name]: NavBar,
            [Icon.name]: Icon,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [Toast.name]: Toast,
        },
        data(){
            return {
                type: ["男生", "电子书", "女生"],
                mess: {},
                titlee: '',
                all_data: [],
                idd: [],
                all_Data: [],
                active:0
            }
        },
        methods: {
            requesst(index, title){
                this.titlee = title;
//                console.log(this.titlee);
            },
            change(index, title){
                Toast.loading({
                    mask: true,
                    message: '加载中...'
                });
                console.log(index, title);
//                console.log(this.all_type);//追书最热榜 好评榜...
//                点击追书最热榜 传入这个标题 this.all_type[index]就是追书最热榜的id然后请求数据
                this.$http.get('/apis/ranking/' + this.all_type[index]._id).then(data=> {
//                    console.log(data);
                    this.all_Data = data.body.ranking.books;
                })
                this.active=0;

            }
        },
        computed: {
            all_type: {
                get(){
                    console.log(this.titlee);
                    if (this.titlee == "男生") {
                        return this.all_type = this.mess.male
                    } else if (this.titlee == "电子书") {
                        return this.all_type = this.mess.epub
                    }
                    return this.all_type = this.mess.female
                },
                set(){

                },
            },
        },
        created(){
            this.$http.get('/apis/ranking/gender').then(data=> {
//                console.log(data);
                this.mess = data.body;
//                console.log(this.mess);
            }),
            this.$http.get('/apis/ranking/54d43437d47d13ff21cad58b').then(data=> {
//                    console.log(data);
                        this.all_Data=data.body.ranking.books

                    })
        },

    }
</script>
<style>
</style>