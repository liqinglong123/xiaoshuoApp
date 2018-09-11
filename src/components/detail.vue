<template>
    <div>
        <div>
            <van-nav-bar :title="all_data.title" left-text="返回" left-arrow @click-left="onClickLeft">
                <van-icon name="search" slot="right" />
            </van-nav-bar>
        </div>
        <div class="long">
            <img :src="'http://statics.zhuishushenqi.com' + all_data.cover" alt="">
        </div>
        <div class="text">
            <p>{{all_data.title}}</p>
            <p>
                <span>{{all_data.author}}</span>|
                <span>{{all_data.majorCate}}</span>|
                <span>{{all_data.wordCount}}</span>
            </p>
            <p>
                <span>更新时间:</span>
                <span>{{time}}</span>
            </p>
            <p>
                <span>最新文章:</span>
                <span>{{all_data.lastChapter}}</span>
            </p>
        </div>
            <div class="xia">
                <router-link :to="{name:'content',query:{id:all_data._id,title:'你是谁'}}">
                    <van-button type="primary" bottom-action >开始阅读</van-button>
                </router-link>

            </div>
            <router-link :to="{name:'list',query:{id:all_data._id,title:all_data.title}}">
                <div>
                    <van-button type="default">查看目录</van-button>
                </div>
            </router-link>
    </div>
    </template>
<script>
    import { NavBar,Icon,Button } from 'vant'
    export default{
        name:"detail",
        components: {
            [NavBar.name]: NavBar,
            [Icon.name]: Icon,
            [Button.name]: Button,
        },
        data(){
            return {
                all_data:{},
                time:''
            }
        },
        methods:{
            onClickLeft() {
                this.$router.go(-1);
            },
        },
        mounted(){
//            console.log(this.time);
//            console.log(this.$route.query.id);
            this.$http.get('/apis/book/'+this.$route.query.id).then(data=>{
//                console.log(data.body);
                this.all_data=data.body;
                this.time=this.all_data.updated.replace(/[a-zA-Z]/g," ");
            })
        }
    }
</script>
<style>
    .long{
        width: 130px;
        height: 170px;
        background: skyblue;
        overflow: hidden;
        margin: 20px auto 20px;
    }
    .long img{
        width: 100%;
        height: 100%;
    }
    .text{
        text-align: center;
    }
    .text p{
        margin: 6px 0;
        font-size: 14px;
    }
    .text p:nth-child(1){
        font-size: 17px;
    }
    .text p:last-child{
        margin-bottom: 10px;
    }
    .text p:nth-child(2) span:nth-child(1){
        color: #db7739;
    }
    .text p:nth-child(3) span:nth-child(2){
        color: #ee9084;
    }
    .van-button--bottom-action{
        display: block;
        width: 90%;
        margin: 0 auto;
        height: 40px;
        line-height: 40px;
        border-radius: 6px;

    }
    .van-button--bottom-action.van-button--primary{
        background-color: #ec554d;
    }
    .van-button--normal{
        display: block;
        margin: 0 auto;
        height: 35px;
        line-height: 35px;
        padding: 0 25px;
    }
    .xia{
        margin-bottom: 20px;
    }
    .no{
        display: flex;
    }
</style>
