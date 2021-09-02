<template>
  <div id="home" key="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @pullingUp="loadMore"
      @scroll="contentScroll"
      :pull-up-load="true"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
        :class="{ fixed: isTabFixed }"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
import { debounce } from "@/common/utils";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      showBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      savePos: { x: 0, y: 0 },
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    // this.getHomeGoods("pop");
    // this.getHomeGoods("new");
    // this.getHomeGoods("sell");
    for (let i = 0; i < 100; ++i) {
      this.goods["pop"].list.push("流行" + i);
      this.goods["new"].list.push("新款" + i);
      this.goods["sell"].list.push("精选" + i);
    }
  },
  mounted() {
    // 1.加载完成的事件监听

    const refresh = debounce(this.$refs.scroll.refresh, 500);
    // 监听item中图片加载完成
    this.$bus.$on("itemImageLoaded", () => {
      console.log("itemImageLoaded");
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(this.savePos.x, this.savePos.y, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {},
  methods: {
    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          //console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      let off = this.goods[type].list.length;
      let discription = "";
      switch (type) {
        case "pop":
          discription = "流行";
          break;
        case "new":
          discription = "新款";
          break;
        case "sell":
          discription = "精选";
          break;
      }
      for (let i = 0; i < 30; i++) {
        this.goods[type].list.push(discription + (off + i));
      }
      return;

      const page = this.goods[type].page + 1;
      const currentGoods = this.goods[type];
      getHomeGoods(type, page)
        .then((res) => {
          //console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
        })
        .catch((err) => {
          console.log(err);
          this.goods[type] = currentGoods;
        });
    },
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(pos) {
      // 1.决定BackTop是否显示
      this.showBackTop = pos.y < -1000;

      // 2.决定TabControl是否吸顶(position: fixed)
      this.isTabFixed = -pos.y > this.tabOffsetTop;

      this.savePos = pos;
    },
    loadMore() {
      console.log("loadMore trigger");
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.refresh();
      this.$refs.scroll.finishPullUp();
    },
    swiperImageLoad() {
      // 获取tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  /* padding-top: 44px; */
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* 在使用浏览器原生滚动时，为了不让导航一起滚动 */
  /* 
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1; */
}

.tab-control {
  position: relative;
  z-index: 1;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>