<template>
  <my-scroll @handle-scroll="handleScroll" ref="vs" class="app">
    <div class="app-aside"><v-aside-nav @top="toTop"></v-aside-nav></div>
    <div class="app-header"><v-header :scrollTopNum="scrollTop"></v-header></div>
    <div class="app-main">
      <transition><router-view></router-view></transition>
    </div>
    <div class="app-footer">
      <v-partner></v-partner>
      <v-footer></v-footer>
    </div>
  </my-scroll>
</template>

<script>
import VHeader from '@/components/public/header.vue'
import VPartner from '@/components/public/partner.vue'
import VFooter from '@/components/public/footer.vue'
import VAsideNav from '@/components/public/aside-nav.vue'

export default {
  components: {
    VHeader,
    VFooter,
    VPartner,
    VAsideNav,
  },
  data() {
    return {
      scrollTop: 0,
    }
  },
  methods: {
    toTop() {
      this.$refs['vs'].scrollTo(
        {
          y: 0,
        },
        300,
        'easeInQuad',
      )
    },
    handleScroll(vertical) {
      this.scrollTop = vertical.scrollTop
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.$refs['vs'].scrollTo(
      {
        y: 0,
      },
      0,
    )
    next()
  },
}
</script>

<style lang="scss">
.app {
  min-width: 1200px;
}
.app-main {
  margin-top: 80px;
  background-color: #f3f5f6;
  min-height: calc(100vh - 110px);
}
.v-enter-active {
  transition: all 0.5s ease;
}
.v-leave-to,
.v-enter {
  opacity: 0;
}
.v-leave-active {
  display: none;
}
</style>
