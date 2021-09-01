<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goods-item="item"
    ></goods-list-item>
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
      <li>商品5</li>
      <li>商品6</li>
      <li>商品7</li>
      <li>商品8</li>
      <li>商品9</li>
      <li>商品10</li>
      <li>商品11</li>
      <li>商品12</li>
      <li>商品13</li>
      <li>商品14</li>
      <li>商品15</li>
      <li>商品16</li>
      <li>商品17</li>
      <li>商品18</li>
      <li>商品19</li>
      <li>商品20</li>
    </ul>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>