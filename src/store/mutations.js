import {
  INCREMENT
} from './mutations-types'

export default {
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
}