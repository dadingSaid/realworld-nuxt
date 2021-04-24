import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8f09778e = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _fdc394a4 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _ba3e6f0c = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _2934fd72 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _a6a72b08 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _2dc1a5c7 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _46f7627a = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))

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
    component: _8f09778e,
    children: [{
      path: "",
      component: _fdc394a4,
      name: "home"
    }, {
      path: "login",
      component: _ba3e6f0c,
      name: "login"
    }, {
      path: "register",
      component: _ba3e6f0c,
      name: "register"
    }, {
      path: "settings",
      component: _2934fd72,
      name: "settings"
    }, {
      path: "/editor",
      component: _a6a72b08,
      name: "editor"
    }, {
      path: "article/:slug?",
      component: _2dc1a5c7,
      name: "article"
    }, {
      path: "/profile/:username",
      component: _46f7627a,
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
