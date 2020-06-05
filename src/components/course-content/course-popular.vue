<template>
  <div class="card" @click="router">
    <img src alt width="100" height="80" class="img" :style="{ backgroundColor: data.color }" />
    <div class="info">
      <div class="title" ref="title">{{ data.name }}</div>
      <div class="tag">
        <span class="price">￥{{ data.price }}</span>
        <span class="dot"><i></i></span>
        <span class="grade">{{ data.grade }}</span>
        <span class="dot"><i></i></span>
        <span class="num">
          <svg class="icon" aria-hidden="true"><use xlink:href="#icon-renshu"></use></svg>
          {{ data.num }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/course-content/course-content.js'
import agent from '@/common/lib/agent.js'

export default {
  props: {
    data: Object,
  },
  methods: {
    router() {
      this.$router.push('/QMResources/' + this.data._id)
      // this.$store.commit('toTargetCourse', this.data)
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
      // window.localStorage.setItem('toTargetCourse', JSON.stringify(this.$store.state.target))
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 360px;
  margin-bottom: 20px;
  &::after {
    display: block;
    content: '';
    clear: both;
  }
  img {
    float: left;
    border-radius: 10px;
  }
  .info {
    float: left;
    width: 200px;
    margin-left: 20px;
    height: 80px;
    border-bottom: 1px solid rgba(43, 51, 59, 0.1);
    padding: 10px 0;
    position: relative;
    .title {
      line-height: 30px;
      height: 30px;
      cursor: pointer;
      color: #545c63;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: #f3f5f6;
      &:hover {
        height: auto;
        max-height: 60px;
        overflow: visible;
        white-space: normal;
        position: absolute;
        width: 100%;
        background-color: #f3f5f6;
        & + .tag {
          margin-top: 40px;
        }
      }
    }
    .tag {
      margin-top: 10px;
      font-size: 12px;
      color: #545c63;
      line-height: 20px;
      span {
        display: inline-block;
        vertical-align: top;
      }
      .dot {
        padding: 9px 5px;
        i {
          width: 2px;
          display: block;
          height: 2px;
          background-color: #333;
          border-radius: 50%;
        }
      }
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
