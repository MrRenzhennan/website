// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueQuillEditor from 'vue-quill-editor'
import router from './router/router'
import store from './store'

Vue.use(ElementUI)
Vue.use(vueQuillEditor)

/* eslint-disable no-new */
new Vue({
  router,
  store,
}).$mount('#app');
