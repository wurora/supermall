<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <default-tab-bar></default-tab-bar>
  </div>
</template>

<script>
import DefaultTabBar from "./components/content/defaultTabbar/DefaultTabBar.vue";

export default {
  name: "App",
  components: {
    DefaultTabBar,
  },
};
</script>

<style>
@import "~@/assets/css/base.css";
</style>