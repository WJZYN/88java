<template>
  <div class="course-content">
    <div class="spinner-container" v-if="loading">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
    <v-course-header :data="course"></v-course-header>
    <div class="body">
      <div class="main">
        <v-course-card-container>{{ course.simple }}</v-course-card-container>
        <v-course-card-container v-for="(item, index) in course.course" :key="index">
          <v-course-title :num="index">{{ item.title }}</v-course-title>
          <v-course-info>{{ item.simple }}</v-course-info>
          <v-course-page :num="index" :num2="index2" v-for="(a, index2) in item.page" :key="index2">
            {{ a }}
          </v-course-page>
        </v-course-card-container>
      </div>
      <div class="aside">
        <div class="absolute">
          <v-course-learning>
            <template v-slot:you_need_know>
              {{ course['you_need_know'] }}
            </template>
            {{ course['you_can_learning'] }}
          </v-course-learning>
          <h3 class="popular-course">推荐课程</h3>
          <v-course-popular
            :data="popular"
            :key="popular.id"
            v-for="popular in populars"
          ></v-course-popular>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

import agent from '@/common/lib/agent.js'

import VCourseHeader from '@/components/course-content/course-header.vue'
import VCourseCardContainer from '@/components/course-content/course-card-container.vue'
import VCourseTitle from '@/components/course-content/course-title.vue'
import VCourseInfo from '@/components/course-content/course-info.vue'
import VCoursePage from '@/components/course-content/course-page.vue'
import VCourseLearning from '@/components/course-content/course-learning.vue'
import VCoursePopular from '@/components/course-content/course-popular.vue'

export default {
  components: {
    VCourseHeader,
    VCourseCardContainer,
    VCourseTitle,
    VCourseInfo,
    VCoursePage,
    VCourseLearning,
    VCoursePopular,
  },
  data() {
    return {
      populars: [],
      course: {},
      loading: true,
    }
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.loading = true
    this.fetchData()
    this.ajax()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: 'fetchData',
  },
  methods: {
    ajax() {
      let _this = this
      if (localStorage.getItem('user')) {
        console.log(1)
        window.onbeforeunload = function() {
          $.ajax({
            url: 'http://101.132.107.88/user/history',
            type: 'POST',
            data: {
              name: localStorage.getItem('user'),
              type: 'course',
              id: _this.$route.params.id,
            },
            async: false, //必须采用同步方法
          })
        }
      }
    },
    // setData(data) {
    //   this.populars = data.popular
    //   this.course = data.result[0]
    // },
    fetchData() {
      // this.error = this.post = null
      this.loading = true
      // replace getPost with your data fetching util / API wrapper

      agent.post('/course/search', { id: this.$route.params.id }).then(res => {
        this.populars = res.popular
        this.course = res.result[0]
        this.loading = false
      })
      if (localStorage.getItem('user')) {
        agent.get('/user/userInfo').then(res => {
          this.$store.commit('toUserInfo', res)
        })
      }

      // getPost(this.$route.params.id, (err, post) => {
      //   this.loading = false
      //   if (err) {
      //     this.error = err.toString()
      //   } else {
      //     this.post = post
      //   }
      // })
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (localStorage.getItem('user')) {
      agent.post('/user/history', { type: 'leave', id: from.params.id }).then(res => {
        agent.post('/user/history', { type: 'enter', id: to.params.id }).then(res => {})
      })
    }

    next()
  },
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem('user')) {
      agent.post('/user/history', { type: 'enter', id: to.params.id }).then(res => {})
    }
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next()
  },
  beforeRouteLeave(to, from, next) {
    if (localStorage.getItem('user')) {
      agent.post('/user/history', { type: 'leave', id: from.params.id }).then(res => {})
    }
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  },
}
</script>

<style lang="scss" scoped>
.body {
  width: 1200px;
  margin: auto;
  padding-top: 40px;
  &::after {
    clear: both;
    content: '';
    display: block;
  }
  .main {
    width: 800px;
    float: left;
  }
  .aside {
    position: relative;
    width: 400px;
    padding-left: 40px;
    float: left;
    margin-bottom: -170px;
    .absolute {
      position: relative;
      top: -170px;
    }
  }
}
.course-content {
  padding-bottom: 40px;
}
.popular-course {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
}
// css loading
.spinner-container {
  height: 100vh;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.95);
  // background-color: rgba(0,0,0,.8);
}
.spinner {
  width: 60px;
  height: 60px;
  position: relative;
}
.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #97ffff;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
