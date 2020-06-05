import './common/vendor'
import './common/global.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import vuescroll from 'vuescroll/dist/vuescroll-native'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      mode: 'native',
      sizeStrategy: 'percent',
      detectResize: true,
    },
    scrollPanel: {
      initialScrollY: false,
      initialScrollX: false,
      scrollingX: true,
      scrollingY: true,
      speed: 300,
      easing: undefined,
      verticalNativeBarPos: 'right',
    },
    rail: {
      background: '#01a99a',
      opacity: 0,
      size: '6px',
      specifyBorderRadius: false,
      gutterOfEnds: null,
      gutterOfSide: '0px',
      keepShow: false,
    },
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: '#c1c1c1',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: '6px',
      disable: false,
    },
    scrollButton: {
      enable: false,
      background: 'rgb(3, 185, 118)',
      opacity: 1,
      step: 180,
      mousedownStep: 30,
    },
  }, // 在这里设置全局默认配置
  name: 'myScroll', // 在这里自定义组件名字，默认是vueScroll
})

Vue.use(Vuex)

Vue.config.productionTip = false

router.afterEach((to, from, next) => {
  window.document.title = to.name
  window.scrollTo(0, 0)
})

const store = new Vuex.Store({
  state: {
    target: {},
    targetLearning: {},
    user: {},
    search: [],
    token: null,
    collections: [],
    userInfo: [],
  },
  mutations: {
    toTargetCourse(state, data) {
      state.target = data
    },
    toTargetLearning(state, data) {
      state.targetLearning = data
    },
    toUser(state, data) {
      state.user = data
    },
    toToken(state, data) {
      state.token = data
    },
    toSearch(state, data) {
      state.search = data
    },
    toCollections(state, data) {
      state.collections = data
    },
    toUserInfo(state, data) {
      state.userInfo = data
    },
  },
})

new Vue({
  // mixins: [mixin],
  router,
  store,
  render: h => h(App),
}).$mount('#app')
