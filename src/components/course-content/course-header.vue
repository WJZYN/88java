<template>
  <div class="container">
    <div class="header">
      <div class="header-content">
        <h2>{{ data.name }}</h2>
        <div class="clearfix">
          <div class="float-left">
            难度
            <span>{{ data.grade }}</span>
          </div>
          <div class="float-left">
            时长
            <span>{{ data.time }}</span>
          </div>
          <div class="float-left">
            学习人数
            <span>{{ data.num }}</span>
          </div>
          <div class="float-left">
            综合评分
            <span>{{ data.score }}</span>
          </div>
          <div class="float-right">
            <span class="course-card-collection" @click.stop="collect(data._id)" v-if="!iscollect">
              <svg class="icon" aria-hidden="true"><use xlink:href="#icon-star_full"></use></svg>
              收藏
            </span>
            <span
              class="course-card-collection"
              v-if="iscollect"
              @click.stop="removeCollect(data._id)"
            >
              <svg class="icon icon-active" aria-hidden="true">
                <use xlink:href="#icon-star_full"></use>
              </svg>
              已收藏
            </span>
          </div>
        </div>
      </div>
      <div class="header-tags">
        <div class="tag-container">
          <span
            class="tag"
            @click="choose(index)"
            :class="{ active: id === index }"
            v-for="(tag, index) in tags"
            :key="index"
          >
            {{ tag.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/QMResources/collect.js'
import agent from '@/common/lib/agent.js'

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      tags: [{ name: '课程章节' }],
      id: 0,
    }
  },
  computed: {
    iscollect() {
      let a = this.$store.state.userInfo.userCollection
      return a ? (a.find(item => item.id === this.$route.params.id) ? true : false) : false
    },
  },
  methods: {
    choose(n) {
      this.id = n
    },
    collect(courseId) {
      if (localStorage.getItem('user')) {
        agent.post('/user/collect', { type: 'add', id: courseId }).then(res => {
          if (res.success === true) {
            this.$store.commit('toUserInfo', res.data[0])
          } else {
            localStorage.clear()
            this.$store.commit('toUser', {})
          }
        })
      } else {
        this.$router.push('/sign_in')
      }
    },
    removeCollect(courseId) {
      if (localStorage.getItem('user')) {
        agent.post('/user/collect', { type: 'remove', id: courseId }).then(res => {
          if (res.success === true) {
            this.$store.commit('toUserInfo', res.data[0])
          } else {
            localStorage.clear()
            this.$store.commit('toUser', {})
          }
        })
      } else {
        this.$router.push('/sign_in')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 20px;
  background: url('~@/assets/course-content/bg.jpg');
  box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.1);
  color: #fff;
  .header-content {
    width: 1200px;
    margin: auto;
    h2 {
      margin-bottom: 8px;
      line-height: 48px;
      font-size: 32px;
      padding-top: 20px;
    }
    .clearfix {
      &::after {
        display: block;
        content: '';
        clear: both;
      }
      .float-left {
        float: left;
        line-height: 12px;
        font-size: 12px;
        font-weight: 700;
        height: 32px;
        padding: 10px 20px 20px 0;
      }
      .float-right {
        float: right;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        font-weight: 700;
        margin-right: 400px;
        .course-card-collection {
          &:hover {
            color: #ff7f00;
          }
          .icon-active {
            color: #ff7f00;
          }
          .icon {
            width: 20px;
            height: 20px;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
          }
        }
      }
    }
  }
  .header-tags {
    height: 60px;
    padding: 10px 0;
    background-color: #fff;
    .tag-container {
      width: 1200px;
      margin: auto;
    }
    .tag {
      display: inline-block;
      font-weight: bold;
      margin-right: 80px;
      height: 40px;
      line-height: 40px;
      color: #1c1f21;
    }
    .active {
      color: #f20d0d;
      border-bottom: 3px solid #f20d0d;
    }
  }
}
</style>
