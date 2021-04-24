import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6efd8e68 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _552e3301 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _50d07587 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _4f901945 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _869b41e2 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _1e7a4394 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _37b00047 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))

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
    component: _6efd8e68,
    children: [{
      path: "",
      component: _552e3301,
      name: "home"
    }, {
      path: "login",
      component: _50d07587,
      name: "login"
    }, {
      path: "register",
      component: _50d07587,
      name: "register"
    }, {
      path: "settings",
      component: _4f901945,
      name: "settings"
    }, {
      path: "/editor",
      component: _869b41e2,
      name: "editor"
    }, {
      path: "article/:slug?",
      component: _1e7a4394,
      name: "article"
    }, {
      path: "/profile/:username",
      component: _37b00047,
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
