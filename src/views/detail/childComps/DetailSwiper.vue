<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item.image" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      dafault() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}

.detail-swiper img {
  height: 100%;
}
</style>