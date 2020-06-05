<template>
  <div class="course-card" @click="router">
    <div class="course-card-img">
      <img :src="data.img" :alt="data.name" width="224" height="120" />
      <!-- <span class="tag">{{ data.tag }}</span> -->
    </div>
    <p class="course-card-name">{{ data.name }}</p>
    <div class="course-card-tag clearfix">
      <span class="grade">{{ data.grade }}</span>
      <span>
        <svg class="icon" aria-hidden="true"><use xlink:href="#icon-renshu"></use></svg>
        {{ data.num }}
      </span>
      <span class="score">评价：{{ data.score }}分</span>
    </div>
    <p class="course-card-introduction">{{ data.introduction }}</p>
    <div class="course-card-info clearfix">
      <span class="course-card-price">￥{{ data.price }}</span>
      <span class="course-card-collection" @click.stop="collect(data._id)" v-if="!show">
        <svg class="icon" aria-hidden="true"><use xlink:href="#icon-star_full"></use></svg>
        收藏
      </span>
      <span class="course-card-collection" v-if="show" @click.stop="removeCollect(data._id)">
        <svg class="icon icon-active" aria-hidden="true">
          <use xlink:href="#icon-star_full"></use>
        </svg>
        已收藏
      </span>
    </div>
  </div>
</template>

<script>
import '@/assets/QMResources/iconfont.js'
import '@/assets/QMResources/collect.js'
import agent from '@/common/lib/agent.js'

export default {
  props: {
    data: Object,
  },
  computed: {
    show() {
      let a = this.$store.state.userInfo.userCollection
      return a ? (a.find(item => item.id === this.data._id) ? true : false) : false
    },
  },
  methods: {
    router() {
      this.$router.push('/QMResources/' + this.data._id)
      this.$store.commit('toTargetCourse', this.data)
      window.localStorage.setItem('toTargetCourse', JSON.stringify(this.$store.state.target))
      if (localStorage.getItem('user')) {
        // agent.post('/user/history', { id: this.data._id }).then(res => {})
      } else {
        agent
          .post('/fingerprint/history', {
            userId: localStorage.getItem('fingerprintId'),
            courseId: this.data._id,
          })
          .then(res => {})
      }
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
.clearfix::after {
  display: block;
  content: '';
  clear: both;
}
.course-card {
  cursor: pointer;
  border-radius: 10px;
  width: 224px;
  margin-right: 20px;
  margin-bottom: 20px;
  // box-shadow: 0 0 8px 0 rgba(50, 50, 50, 0.1);
  &:nth-child(5n) {
    margin-right: 0;
  }
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  &:hover {
    box-shadow: 0 0px 20px 0 rgba(28, 31, 33, 0.2);
    background-color: #fff;
    img {
      transform: scale(1.1);
      transition: all ease 0.3s;
    }
    .course-card-introduction {
      color: #4d555d;
    }
  }
  .course-card-img {
    width: 224px;
    height: 120px;
    border-radius: 10px;
    overflow: hidden;
    .tag {
      position: absolute;
      left: 10px;
      top: 10px;
      background: rgba(7, 17, 27, 0.4);
      font-size: 12px;
      color: #fff;
      padding: 6px;
      display: block;
      border-radius: 10px;
    }
  }
  .course-card-name {
    margin-top: 16px;
    font-weight: bold;
    padding: 0 10px;
    line-height: 24px;
    height: 48px;
    color: #2b333b;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .course-card-tag {
    margin-top: 4px;
    height: 20px;
    line-height: 20px;
    padding: 0 10px;
    font-size: 12px;
    color: #93999f;
    .grade {
      margin-right: 16px;
    }
    .score {
      float: right;
    }
  }
  .course-card-introduction {
    color: #93999f;
    padding: 0 10px;
    font-size: 12px;
    margin-top: 4px;
    height: 48px;
    line-height: 24px;
    transition: all 0.3s linear;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .course-card-info {
    color: #4d555d;
    padding: 0 10px;
    font-size: 12px;
    margin-top: 4px;
    height: 20px;
    line-height: 20px;
    .course-card-price {
      float: left;
    }
    .course-card-collection {
      float: right;
      &:hover {
        color: #ff7f00;
      }
      .icon-active {
        color: #ff7f00;
      }
    }
  }
}
.icon {
  width: 14px;
  height: 14px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
