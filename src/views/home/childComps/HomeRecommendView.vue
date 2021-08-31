<template>
  <div class="home-recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="home-recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.home-recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 15px;
  border-bottom: 8px solid #eee;
}

.home-recommend-item {
  flex: 1;
  text-align: center;
}

.home-recommend-item img {
  width: 85%;
  margin: 0 5% 5%;
}
</style>