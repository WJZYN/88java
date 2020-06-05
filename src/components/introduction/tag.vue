<template>
  <div class="clearfix">
    <div
      class="introduction-tag"
      :class="{ active: id === index }"
      @click="trigger(index, list.path ? list.path : '')"
      v-for="(list, index) in tags"
      :key="index"
    >
      {{ list.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scrollTop: Number,
  },
  data() {
    return {
      tags: [
        { name: '公司简介' },
        { name: '所获荣誉' },
        { name: '出版书籍' },
        { name: '讲师介绍' },
        { name: '进入官网', path: '/behavioral-learning' },
      ],
      id: 0,
    }
  },
  watch: {
    scrollTop(new_value) {
      this.id = new_value
    },
  },
  methods: {
    // animateScroll(element, speed) {
    //   let rect = element.getBoundingClientRect()
    //   //获取元素相对窗口的top值，此处应加上窗口本身的偏移
    //   let top = window.pageYOffset + rect.top
    //   let currentTop = 0
    //   let requestId
    //   //采用requestAnimationFrame，平滑动画
    //   function step(timestamp) {
    //     currentTop += speed
    //     if (currentTop <= top) {
    //       window.scrollTo(0, currentTop)
    //       requestId = window.requestAnimationFrame(step)
    //     } else {
    //       window.cancelAnimationFrame(requestId)
    //     }
    //   }
    //   window.requestAnimationFrame(step)
    // },
    trigger(index, path) {
      let num = document.documentElement.clientHeight
      let top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      let target = num * index
      let isTrue = top - target < 1 && top - target > -1
      if (path === '' && !isTrue) {
        let totarget = setInterval(() => {
          if (top < target) {
            top += 20
            window.scrollTo(0, top)
          } else if (top > target && top - target >= 20) {
            top -= 20
            window.scrollTo(0, top)
          } else {
            window.scrollTo(0, target)
            clearInterval(totarget)
          }
        })
      } else {
        this.$router.replace(path)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.clearfix::after {
  clear: both;
  display: block;
  content: '';
}
.introduction-tag {
  background-color: #fff;
  color: #313131;
  width: 148px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #e8e8e8;
  border-left: 0;
  float: left;
  box-shadow: 0 8px 28px 0 rgba(0, 0, 0, 0.04);
  font-size: 14px;
  text-align: center;
  color: #9a9a9a;
  &:first-child {
    border-left: 1px solid #e8e8e8;
  }
  &.active {
    background-color: #393939;
    color: #fff;
  }
}
</style>
