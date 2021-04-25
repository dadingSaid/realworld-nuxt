import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _08059d3c = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _1660f371 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _941479d2 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _2e8fac52 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _80e5bc96 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _07927902 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _60fb25b8 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _08059d3c,
    children: [{
      path: "",
      component: _1660f371,
      name: "home"
    }, {
      path: "/login",
      component: _941479d2,
      name: "login"
    }, {
      path: "/register",
      component: _941479d2,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _2e8fac52,
      name: "profile"
    }, {
      path: "/settings",
      component: _80e5bc96,
      name: "settings"
    }, {
      path: "/editor",
      component: _07927902,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _60fb25b8,
      name: "article"
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
