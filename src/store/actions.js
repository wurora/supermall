export default {
  aUpdateInfo(context, payload) {
    console.log(context)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo', payload)
        resolve('resolve called')
      }, 1000)
    });
  }
}