import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const router = new vueRouter ({
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})

export default router
