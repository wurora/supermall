import Vue from 'vue'
import Vuex from 'vuex'

import {
  INCREMENT
} from './mutations-types'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象


const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000);
    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    fullname2(state, getters) {
      return getters.fullname + '222'
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  },
}

const store = new Vuex.Store({
  state: {
    counter: 100,
    students: [
      { id: 110, name: 'why', age: 19 },
      { id: 111, name: 'kobe', age: 20 },
      { id: 112, name: 'james', age: 30 },
      { id: 113, name: 'curry', age: 10 },
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, count) {
      console.log(count)
      // state.counter += count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state, payload) {
      state.info.name = '111'
      // state.info = newInfo

      // 1.新加入的属性不会触发响应式（即更新到ui上）
      // 但是如果上面有语句触发了响应式就会刷新上去
      // state.info['address'] = '洛杉矶'

      // 2.或者使用set，使用时不要把1.的注释去了，否则不能触发
      // Vue.set(state.info, 'address', '洛杉矶')

      // 删除属性
      // 3.该方法同1.，不能单独响应式
      // delete state.info.age

      // 4.这个支持响应式
      // Vue.delete(state.info, 'age')


      // 异步测试
      // 错误代码：不能再mutations中进行异步操作
      // setTimeout(() => {
      //   state.info.name = '111'
      // }, 1000);
    }
  },
  actions: {
    aUpdateInfo(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo', payload)
          resolve('resolve called')
        }, 1000)
      });
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    stuOver20(state) {
      return state.students.filter(s => s.age >= 20)
    },
    stuOver20Length(state, getters) {
      return getters.stuOver20.length
    },
    ageMoreThan(state) {
      return (age) => state.students.filter(s => s.age > age)
    }
  },
  modules: {
    a: moduleA
  }
})

export default store