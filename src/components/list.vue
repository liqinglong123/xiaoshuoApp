<template>
    <div>
        <van-nav-bar :title="$route.query.title" left-text="返回" left-arrow @click-left="onClickLeft">
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <div class="content">
            <div class="all">
                <p>
                    共{{figure}}章
                </p>
                <p>
                    倒序
                </p>
            </div>
                <div>
                        <p class="single" v-for="(item,index) in all_data">
                            <router-link :to="{name:'content',query:{linka:item.link,ind:index,id:$route.query.id}}" tag="span">
                            <span>
                                 {{item.title}}
                            </span>
                            </router-link>
                        </p>

                </div>

            </router-link>

        </div>
    </div>

</template>
<script>
    import {NavBar,Icon} from 'vant';
    export default{
        name: "list",
        components: {
            [NavBar.name]: NavBar,
            [Icon.name]: Icon,
        },
        methods:{
            onClickLeft() {
                this.$router.go(-1);
            },
        },
        data(){
            return {
                like:'',
                figure:'',
                all_data:''
            }
        },
        mounted(){
//            console.log(this.$route.query.id);
//            console.log(this.$route.query.title);
            this.$http.get('/apis/mix-atoc/'+this.$route.query.id+'?view=chapters').then(data=>{
//                console.log(data);
                console.log(data.body.mixToc.chapters);
                this.all_data=data.body.mixToc.chapters;
//                console.log(data.body.mixToc.chapters.length);
                this.figure=data.body.mixToc.chapters.length;
            })
        }
    }
</script>
<style scoped>
    .all{
        display: flex;
        width:100%;
        height:46px;
        line-height: 17px;
        box-sizing:border-box;
        padding-left:15px;
        padding-right:15px;
        justify-content: space-between;
        border-bottom:1px solid #d93f35;
        color:#323941;
    }
    .single{
        width:100%;
        height:34px;
        line-height: 21px;
        box-sizing:border-box;
        padding-left:15px;
        padding-right:15px;
        border-bottom:1px solid #eeeeee;
        color:#323941;
    }
</style>