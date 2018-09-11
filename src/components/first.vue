<template>
    <div>
        <van-nav-bar title="首页">
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <book :all_Data="all_Data"></book>

    </div>
</template>
<script>
    import book from "./book.vue";
    import { Tabbar, TabbarItem ,Icon,NavBar } from 'vant'
    export default {
        name:"index",
        components: {
            book,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Icon.name]: Icon,
            [NavBar.name]: NavBar,
        },
        data() {
            return {
                all_Data:[],
                active: 0,
                icon: {
                    normal: '//img.yzcdn.cn/icon-normal.png',
                    active: '//img.yzcdn.cn/icon-active.png'
                }
            }

        },
//        请求数据
        beforeCreate(){
            this.$http.get('/apis/ranking/54d43437d47d13ff21cad58b').then(data=>{
//                console.log(data.body.ranking.books);
                var all_data = data.body.ranking.books;
                this.all_Data=all_data;
                console.log(this.all_Data);
            })
        },


    }
</script>
<style>


</style>