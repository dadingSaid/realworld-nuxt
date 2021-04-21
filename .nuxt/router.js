import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42f72ca9 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _2d597a1e = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _7e0e120a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _0bf8880a = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _045889e2 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _372852ec = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _1a7a6952 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _42f72ca9,
    children: [{
      path: "",
      component: _2d597a1e,
      name: "home"
    }, {
      path: "/login",
      component: _7e0e120a,
      name: "login"
    }, {
      path: "/register",
      component: _7e0e120a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _0bf8880a,
      name: "profile"
    }, {
      path: "/settings",
      component: _045889e2,
      name: "settings"
    }, {
      path: "/editor",
      component: _372852ec,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _1a7a6952,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
