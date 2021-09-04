<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "toast message",
      isShow: true,
    };
  },
  methods: {
    changeMessage(newMessage = "new message") {
      this.message = newMessage;
    },
  },
};
</script>

<style scoped>
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #f00;
  padding: 8px 10px;
}
</style>
