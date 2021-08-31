<template>
  <div id="app">
    <h2>hello</h2>
    <router-view></router-view>
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