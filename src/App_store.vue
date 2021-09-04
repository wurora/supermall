<template>
  <div id="app">
    <h2>--------module-----</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button @click="updateName">updateName</button>
    <button @click="asyncUpdateName">异步修改</button>
    <h2>--------module-----</h2>

    <h2>--------info--------</h2>
    <p>{{ $store.state.info.name }}</p>
    <p>{{ $store.state.info }}</p>
    <button @click="updateInfo">updateInfo</button>
    <button @click="aupdateInfo">异步updateInfo</button>
    <h2>--------info--------</h2>
    <h2>powerCounter: {{ $store.getters.powerCounter }}</h2>
    <h2>students: {{ $store.state.students }}</h2>
    <h2>students over 20: {{ $store.getters.stuOver20 }}</h2>
    <h2>Length: {{ $store.getters.stuOver20Length }}</h2>
    <h2>ageMoreThan: {{ $store.getters.ageMoreThan(20) }}</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">增加学生</button>

    <h2>------hello-world below------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { INCREMENT } from "./store/mutations-types";

export default {
  name: "App",
  data() {
    return {
      message: "你好，我是APP",
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      // payload：负载
      // 1.普通的提交封装
      // this.$store.commit("incrementCount", count);

      // 2.特殊的提交封装
      this.$store.commit({
        type: "incrementCount",
        count,
      });
    },
    addStudent() {
      const stu = { id: 114, name: "xiaoMing", age: 5 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      const newInfo = {
        name: "alan",
        age: 444,
        height: 2.22,
      };
      this.$store.commit("updateInfo", newInfo);
    },
    aupdateInfo() {
      const newInfo = {
        name: "alan",
        age: 444,
        height: 2.22,
      };
      // this.$store.dispatch("aUpdateInfo", {
      //   newInfo,
      //   callback: () => {
      //     console.log("修改成功");
      //   },
      // });

      this.$store.dispatch("aUpdateInfo", newInfo).then((res) => {
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit("updateName", "lisi");
    },
    asyncUpdateName() {
      this.$store.dispatch("aUpdateName");
    },
  },
};
</script>

<style>
</style>
