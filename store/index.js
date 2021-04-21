const cookieparser = process.server ? require('cookieparser') : undefined

// nuxt中已经集成了vuex，不用特地去安装vuex，只要定义一个store文件夹导出对象即可使用
// 在服务器渲染期间运行的都是同一个实例
// 为了防止数据冲突，务必要把 state 定义为一个函数，返回一个对象，确保返回的都是一个动态的对象
export const state = () => {
  return {
    // 当前登录用户的登录状态
    user: null
  }
}

export const mutations = {
  setUser (state, data) {
    state.user = data
  }
}

export const actions = {
  // 这里是nuxt专门提供的方法
  // 这个action会在服务端渲染期间自动调用，只在服务端运行
  nuxtServerInit ({ commit }, { req }) {
    console.log('nuxtServerInit')
    let user = null

    // 如果请求头中有 Cookie
    if (req.headers.cookie) {
      // 使用 cookieparser 把 cookie 字符串转为 JavaScript 对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }

    // 提交 mutation 修改 state 状态
    commit('setUser', user)
  }
}
