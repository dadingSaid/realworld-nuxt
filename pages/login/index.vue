<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">{{isLogin ? 'Sign in' : 'Sign up'}}</h1>
            <p class="text-xs-center">
              <nuxt-link to="/register" v-if="isLogin">Have an account?</nuxt-link>
              <nuxt-link to="/login" v-else>Have an register?</nuxt-link>
            </p>

            <ul class="error-messages">
              <template v-for="(messages, field) in errors">
                <li v-for="(message, index) in messages" :key="index">{{ field }} {{ message }}</li>
              </template>
            </ul>

            <form @submit.prevent="onSubmit">
              <fieldset v-if="!isLogin" class="form-group">
                <input
                  class="form-control form-control-lg"
                  v-model="user.username"
                  type="text"
                  placeholder="Your Name"
                  request
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  v-model="user.email"
                  type="email"
                  placeholder="Email"
                  request
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  v-model="user.password"
                  type="password"
                  placeholder="Password"
                  request
                />
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
              >{{isLogin ? 'Sign in' : 'Sign up'}}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/user'
// 只在客户端处理
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: '',
  components: {},
  props: {},
  middleware: ['notAuthenticated'],
  data () {
    return {
      user: {
        username: `test${Math.random()}`.substr(0, 8),
        email: 'ding@163.com',
        password: '123456789'
      },
      errors: {} // 错误信息
    }
  },
  computed: {
    isLogin () {
      return this.$route.name === 'login'
    }
  },
  create () {
  },
  methods: {
    async onSubmit () {
      try {
        // 提交表单请求登录
        const { data } = this.isLogin
          ? await login({
            user: this.user
          })
          : await register({
            user: this.user
          })
        console.log('data', data.user)
        this.$store.commit('setUser', data.user)
        // 长久存储
        Cookie.set('user', data.user)
        // 跳转到首页
        this.$router.push('/')
      } catch (err) {
        // console.log('请求失败', err)
        this.errors = err.response.data.errors
      }
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
