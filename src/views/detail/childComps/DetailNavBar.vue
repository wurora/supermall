<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~@/assets/img/common/back.svg" />
      </div>
      <div slot="center" class="center">
        <div
          v-for="(item, index) in titles"
          :key="item"
          class="item"
          @click="itemClick(index)"
          :class="{ active: index == currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  padding: 0 20px;
  font-size: 14px;
}

.item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.left img {
  margin-top: 12px;
}
</style>