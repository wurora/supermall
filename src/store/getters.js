export default {
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
}