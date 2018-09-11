<template>
    <div>
        <!--@click="detail(index)"-->
            <div class="book" v-for="(item,index) in all_Data">
                <router-link :to="{name:'detail',query:{id:item._id}}" tag="span" class="no">
                    <div class="img">
                        <img :src='"http://statics.zhuishushenqi.com"+item.cover' alt="">
                    </div>
                    <div class="info">
                        <div class="artical">
                            <p class="name">
                                <span>{{item.title}}</span>
                                <span>作者: {{item.author}}</span>
                            </p>
                            <p class="type">
                                <span :class="item.majorCate?'':'none'">{{item.majorCate}}</span>
                            </p>
                        </div>
                        <div class="detail">
                            {{item.shortIntro}}
                        </div>
                    </div>
                </router-link>
            </div>

    </div>
</template>
<script>
    export default{
        name:"book",
        props:["all_Data"],

    }
</script>
<style>
    p{
        padding-bottom:0;
        margin-bottom:0;
    }
    .none{
        display: none!important;
    }
    .no{
        display: flex;
    }
    *{
        margin: 0;
        padding:0;
    }
    .book{
        width:100%;
        box-sizing: border-box;
        padding:15px 10px 15px 20px;
        display:flex;
        justify-content: space-between;
    }
    .img{
        width:85px;
        height:103px;
    }
    .img>img{
        display: inline-block;
        width:85px;
        height:103px;
    }
    div.info{
        margin-left:15px;
        width:80%;
    }
    .artical{
        width:100%;
        height:auto;
        display: flex;
        justify-content: space-between;
    }
    .name>span{
        display: block;
    }
    .name>span:nth-child(1){
        font-size: 18px;
        font-weight: bold;
    }
    .name>span:nth-child(2){
        font-size: 18px;
        color:#ff9b63;
        font-size:13px;
        margin-top: 13px;
    }
    .type span{
        display: block;
        width:70px;
        height:27px;
        line-height:27px;
        text-align: center;
        border-radius:5px;
        border:1px solid #cbcdcc;
        font-size:14px;
        margin-top:29px;
    }
    .detail{
        margin-top: 13px;
        color:#bbbbbb;
        font-size:12px;
        height:32px;
        overflow: hidden;

    }

</style>