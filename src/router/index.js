import Vue from "vue";
import Router from "vue-router";
import index from "../components/index.vue";
import first from "../components/first.vue";
import search from "../components/search.vue";
import sort from "../components/sort.vue";
import detail from "../components/detail.vue";
import book from "../components/book.vue"
import list from "../components/list.vue"
import content from "../components/content.vue"
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:"/",
            name:"first",
            components:{
                default:first,
                index:index
            }
        },
        {
            path:"/sort",
            name:"sort",
            components:{
                default:sort,
                index:index
            }
        },
        {
            path:"/search",
            name:"search",
            components:{
                default:search,
                index:index
            }
        },
        {
            path:"/detail:ind",
            name:"detail",
            components:{
                default:detail,
                book:book
            }
        },
        {
            path:"/list",
            name:"list",
            components:{
                default:list,
                detail:detail
            }
        },
        {
            path:"/content",
            name:"content",
            components:{
                default:content,
            }
        },

    ]
})