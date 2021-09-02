<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    {{ id }}
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";

import { getHomeMultidata } from "@/network/home";
import { getDetail, Goods } from "@/network/detail";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
    };
  },
  created() {
    console.log("Detail");
    // activated() {
    // 1.保存传入的id
    this.id = this.$route.params.id;

    getHomeMultidata().then((res) => {
      console.log(res);
      this.topImages = res.data.banner.list;
    });

    // 2.根据id请求详情数据
    getDetail(this.id)
      .then(() => {
        // 1.获取顶部的图片轮播数据
        console.log(res);
        const data = res.result;
        this.topImagess = data.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.service
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
  },
};
</script>

<style>
</style>