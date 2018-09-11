<template>
  <div id="app">
    <!--<index></index>-->
    <transition name="transitionRouter">
      <router-view/>
    </transition>
    <router-view name="index"></router-view>



  </div>
</template>

<script>
  //    import index from "./components/index.vue"
  export default {
    name:'App',
    components:{
//            index
    },
  }
</script>

<style>
  .transitionRouter-enter-active,
  .transitionRouter-leave-active {
    transition: all 0.4s;
  }

  .transitionRouter-enter,
  .transitionRouter-leave{
    transform: translate3d(100%, 0, 0);
  }
</style>