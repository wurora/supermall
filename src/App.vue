<template>
  <div id="app">
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