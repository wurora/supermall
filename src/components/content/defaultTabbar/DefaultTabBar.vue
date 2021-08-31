<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <em slot="item-icon" class="iconfont icon-home-deactivated"></em>
        <em
          slot="item-icon-activated"
          class="iconfont icon-home-activated"
        ></em>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <em slot="item-icon" class="iconfont icon-category-deactivated"></em>
        <em
          slot="item-icon-activated"
          class="iconfont icon-category-activated"
        ></em>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shop-cart">
        <em slot="item-icon" class="iconfont icon-shop-cart-deactivated"></em>
        <em
          slot="item-icon-activated"
          class="iconfont icon-shop-cart-activated"
        ></em>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <em slot="item-icon" class="iconfont icon-profile-deactivated"></em>
        <em
          slot="item-icon-activated"
          class="iconfont icon-profile-activated"
        ></em>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";

export default {
  name: "DefaultTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>