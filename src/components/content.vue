<template>
 <div>
     <div>
         <van-nav-bar :title="all_data.title" left-text="返回" left-arrow @click-left="onClickLeft">
         </van-nav-bar>
         <p>{{all_data.body}}</p>
         <ul class="van-pagination van-pagination--simple">
             <li class="van-hairline van-pagination__item van-pagination__prev" @click='prev'>
                 上一页
             </li><li class="van-pagination__page-desc"></li><li class="van-hairline van-pagination__item van-pagination__next" @click="next">
             下一页
            </li>
         </ul>
     </div>
 </div>
</template>
<script>
    import { NavBar,Pagination } from 'vant'
    export default{
        name:"detail",
        components: {
            [NavBar.name]: NavBar,
            [Pagination.name]: Pagination,
        },
        data(){
            return {
                all_data:[],
                currentPage: 1,
                link:'',
                ind:'',
                con:''
            }
        },

        methods:{
            hands(val){
                console.log(val);
                this.$http.get('/apis/book/'+this.$route.query.id).then(data=>{
//                    console.log(data);
                    this.$http.get('/apis/mix-atoc/'+this.$route.query.id+'?view=chapters').then(dataa=>{
//                        console.log(dataa);
                        var need=dataa.body.mixToc.chapters;
//                        console.log(need);
                        this.link=dataa.body.mixToc.chapters[val].link;
//                        console.log(this.link);
                        this.$http.get('/apij/chapter/'+this.link).then(data=>{
                            console.log(data);
                            this.all_data=data.body.chapter
                        })

                    })
                })
                localStorage.setItem(this.con,this.ind);
                console.log(localStorage.getItem(this.ind))
            },

            prev(){
//                let less=--this.$route.query.ind;
//                this.ind=less
                 this.ind = --this.ind;
//                console.log(less);
                // 获取这本书
                this.hands(this.ind);
//                this.save();
                localStorage.setItem(this.con,this.ind);
            },
            next(){
//                let add=++this.$route.query.ind;
//                这里不要声明其他东西 直接让index等于最后localstorage中要存储的数据
                this.ind = ++this.ind
                this.hands(this.ind);
//                this.save();
                localStorage.setItem(this.con,this.ind);
            },
            onClickLeft() {
               this.$router.go(-1);
            },
        },
        mounted(){
//            console.log(this.$route.query.ind);
//            console.log(this.$route.query.id);
            this.con=this.$route.query.id;
//            这里的判断就是加入传过来的ind等于0的话就是
            this.ind=(this.$route.query.ind==0?'0':this.$route.query.ind)||localStorage.getItem(this.con)||0
            this.$http.get('/apis/mix-atoc/'+this.$route.query.id+'?view=chapters').then(dataa=>{
                var need=dataa.body.mixToc.chapters[this.ind].link;
                this.$http.get('/apij/chapter/'+need).then(data=>{
                    console.log(data);
                    this.all_data=data.body.chapter;
                })
            })
            localStorage.setItem(this.con,this.ind);


        }
    }
</script>
<style scoped>
    .van-nav-bar{
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
    }
    p{
        font-size: 16px;
        margin: 50px 15px;
        line-height: 35px;
        color: #555;
        margin-bottom: 0;
        text-indent: 30px;
    }
</style>