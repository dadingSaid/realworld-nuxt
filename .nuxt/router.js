import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42f72ca9 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _2d597a1e = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _7e0e120a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _045889e2 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _372852ec = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _1a7a6952 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _0bf8880a = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
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
      path: "login",
      component: _7e0e120a,
      name: "login"
    }, {
      path: "register",
      component: _7e0e120a,
      name: "register"
    }, {
      path: "settings",
      component: _045889e2,
      name: "settings"
    }, {
      path: "/editor",
      component: _372852ec,
      name: "editor"
    }, {
      path: "article/:slug?",
      component: _1a7a6952,
      name: "article"
    }, {
      path: "/profile/:username",
      component: _0bf8880a,
      name: "profile"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
