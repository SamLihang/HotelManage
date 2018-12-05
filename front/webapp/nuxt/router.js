import Vue from 'vue'
import Router from 'vue-router'

const _4a82554d = () => import('../pages/statistics/index.vue' /* webpackChunkName: "pages/statistics/index" */).then(m => m.default || m)
const _2a9fa632 = () => import('../pages/saveImg/index.vue' /* webpackChunkName: "pages/saveImg/index" */).then(m => m.default || m)
const _342813bd = () => import('../pages/mine/index.vue' /* webpackChunkName: "pages/mine/index" */).then(m => m.default || m)
const _46dc168f = () => import('../pages/manage/index.vue' /* webpackChunkName: "pages/manage/index" */).then(m => m.default || m)
const _01c655d6 = () => import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */).then(m => m.default || m)
const _6f31b46e = () => import('../pages/menu/index.vue' /* webpackChunkName: "pages/menu/index" */).then(m => m.default || m)
const _e63c0f0c = () => import('../pages/manage/menuManage/index.vue' /* webpackChunkName: "pages/manage/menuManage/index" */).then(m => m.default || m)
const _5a195e5a = () => import('../pages/menu/catagory.vue' /* webpackChunkName: "pages/menu/catagory" */).then(m => m.default || m)
const _32c16bba = () => import('../pages/manage/dishesManage/index.vue' /* webpackChunkName: "pages/manage/dishesManage/index" */).then(m => m.default || m)
const _9e0a302e = () => import('../pages/manage/employManage/index.vue' /* webpackChunkName: "pages/manage/employManage/index" */).then(m => m.default || m)
const _e0f9b408 = () => import('../pages/manage/dishesManage/editItem.vue' /* webpackChunkName: "pages/manage/dishesManage/editItem" */).then(m => m.default || m)
const _721baf26 = () => import('../pages/manage/employManage/authManage.vue' /* webpackChunkName: "pages/manage/employManage/authManage" */).then(m => m.default || m)
const _2d395e1e = () => import('../pages/manage/menuManage/moduleEdit.vue' /* webpackChunkName: "pages/manage/menuManage/moduleEdit" */).then(m => m.default || m)
const _8538fe0a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/statistics",
			component: _4a82554d,
			name: "statistics"
		},
		{
			path: "/saveImg",
			component: _2a9fa632,
			name: "saveImg"
		},
		{
			path: "/mine",
			component: _342813bd,
			name: "mine"
		},
		{
			path: "/manage",
			component: _46dc168f,
			name: "manage"
		},
		{
			path: "/login",
			component: _01c655d6,
			name: "login"
		},
		{
			path: "/menu",
			component: _6f31b46e,
			name: "menu"
		},
		{
			path: "/manage/menuManage",
			component: _e63c0f0c,
			name: "manage-menuManage"
		},
		{
			path: "/menu/catagory",
			component: _5a195e5a,
			name: "menu-catagory"
		},
		{
			path: "/manage/dishesManage",
			component: _32c16bba,
			name: "manage-dishesManage"
		},
		{
			path: "/manage/employManage",
			component: _9e0a302e,
			name: "manage-employManage"
		},
		{
			path: "/manage/dishesManage/editItem",
			component: _e0f9b408,
			name: "manage-dishesManage-editItem"
		},
		{
			path: "/manage/employManage/authManage",
			component: _721baf26,
			name: "manage-employManage-authManage"
		},
		{
			path: "/manage/menuManage/moduleEdit",
			component: _2d395e1e,
			name: "manage-menuManage-moduleEdit"
		},
		{
			path: "/",
			component: _8538fe0a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
