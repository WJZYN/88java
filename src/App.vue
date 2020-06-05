<template>
  <div id="app"><router-view v-if="isRouterAlive"></router-view></div>
</template>

<script>
import $ from 'jquery'

import agent from '@/common/lib/agent.js'
import Fingerprint2 from 'fingerprintjs2'
export default {
  // provide() {
  //   return {
  //     reload: this.reload,
  //   }
  // },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    },
    ajax() {
      console.log('ajax')
      if (localStorage.getItem('user')) {
        window.onbeforeunload = function() {
          console.log(123)
          $.ajax({
            url: 'http://101.132.107.88/user/close',
            type: 'POST',
            data: {
              name: localStorage.getItem('user'),
              type: 'app',
            },
            async: false, //必须采用同步方法
          })
        }
      }
    },
  },
  created() {
    let ip = returnCitySN['cip']
    if (localStorage.getItem('token') && localStorage.getItem('user')) {
      setTimeout(function() {
        let options = {}
        Fingerprint2.get(options, function(components) {
          agent.post('/user/login', { info: components }).then(res => {})
        })
      }, 500)
      agent
        .post('/user/login', {
          ip: ip,
        })
        .then(res => {
          //验证本地存储的toen是否过期
          if (res.status === 3) {
            this.$store.commit('toUser', res.user)
            // this.reload()
          } else if (res.status === 4) {
            localStorage.clear()
            this.$store.commit('toUser', {})
          }
        })
    } else {
      setTimeout(function() {
        let options = {}
        Fingerprint2.get(options, function(components) {
          let values = components.map(function(component) {
            return component.value
          })
          let murmur = Fingerprint2.x64hash128(values.join(''), 31)
          agent
            .post('/fingerprint/login', {
              ip: ip,
              id: murmur,
              info: components,
            })
            .then(res => {})
          localStorage.setItem('fingerprintId', murmur)
          console.log(murmur)
        })
      }, 500)
    }
    // window.addEventListener('beforeunload', function() {
    //   agent.post('/user/history', { id: 1 })
    // })
    // window.addEventListener('beforeunload', this.leave(event))
    this.ajax()
  },
}
</script>
