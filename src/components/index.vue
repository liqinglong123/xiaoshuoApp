<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home" :to="{path:'/'}">首页</van-tabbar-item>
            <van-tabbar-item icon="search" :to="{path:'/search'}">搜索</van-tabbar-item>
            <van-tabbar-item icon="records" :to="{path:'/sort'}">排行</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    import { Tabbar, TabbarItem ,Icon } from 'vant'
    export default {
        name:"index",
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Icon.name]: Icon,
        },
        data() {
            return {
                active: 0,
                icon: {
                    normal: '//img.yzcdn.cn/icon-normal.png',
                    active: '//img.yzcdn.cn/icon-active.png'
                }
            }
        }

    }
</script>

