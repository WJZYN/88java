<template>
  <ul>
    <!-- <el-popover placement="left" width="250" trigger="hover" ref="popover1">
      <h1 style="color: #ff4500">400-400-4000</h1>
      <span>7x24小时服务热线</span>
    </el-popover>
    <el-popover placement="left" width="200" trigger="hover" ref="popover2">
      <p style="text-align: center;">
        扫描二维码
        <br>下载官方App
      </p>
      <img src="@/assets/home/QR_code.png" alt="微信二维码" width="174px" height="174px">
    </el-popover>
    <el-popover placement="left" width="200" trigger="hover" ref="popover3">
      <p style="text-align: center;">
        扫描二维码
        <br>关注官方微信订阅号
      </p>
      <img src="@/assets/home/QR_code.png" alt="微信二维码" width="174px" height="174px">
    </el-popover>
    <li @mouseleave="show1" @mouseenter="show1" v-popover:popover1>
      <svg class="icon" v-show="!visible1">
        <use xlink:href="#icon-bangzhu"></use>
      </svg>
      <span v-show="visible1">帮助中心</span>
    </li>
    <li @mouseleave="show2" @mouseenter="show2" v-popover:popover2>
      <svg class="icon" v-show="!visible2">
        <use xlink:href="#icon-app"></use>
      </svg>
      <span v-show="visible2">App下载</span>
    </li>
    <li @mouseleave="show3" @mouseenter="show3" v-popover:popover3>
      <svg class="icon" v-show="!visible3">
        <use xlink:href="#icon-weixin"></use>
      </svg>
      <span v-show="visible3">官方微信</span>
    </li>
    <li @mouseleave="show4" @mouseenter="show4">
      <svg class="icon" v-show="!visible4">
        <use xlink:href="#icon-kefu"></use>
      </svg>
      <span v-show="visible4">在线客服</span>
    </li> -->
    <li @click="toTop">
      <svg class="icon" aria-hidden="true"><use xlink:href="#icon-dingbu"></use></svg>
      <!-- <svg class="icon" aria-hidden="true" v-show="!visible5">
        <use xlink:href="#icon-dingbu"></use>
      </svg>
      <span v-show="visible5">回到顶部</span> -->
    </li>
  </ul>
</template>

<script>
import '@/assets/asideBar/asideBar.js'
export default {
  // data() {
  //   return {
  //     visible1: '',
  //     visible2: '',
  //     visible3: '',
  //     visible4: '',
  //     visible5: '',
  //   }
  // },
  methods: {
    // show1() {
    //   this.visible1 = !this.visible1
    // },
    // show2() {
    //   this.visible2 = !this.visible2
    // },
    // show3() {
    //   this.visible3 = !this.visible3
    // },
    // show4() {
    //   this.visible4 = !this.visible4
    // },
    // show5() {
    //   this.visible5 = !this.visible5
    // },
    toTop() {
      // let top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      // let toTop = setInterval(() => {
      //   top -= 20
      //   document.body.scollTop = top
      //   document.documentElement.scrollTop = top
      //   window.pageYOffset = top
      //   if (top <= 0) {
      //     clearInterval(toTop)
      //   }
      // }, 1)
      this.$emit('top')
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  position: fixed;
  right: 20px;
  z-index: 9;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  // height: 300px;
  // top: calc(50vh - 150px);
  bottom: 100px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  li {
    // & + li {
    //   border-top: 1px solid #eee;
    // }
    // height: 60px;
    cursor: pointer;
    text-align: center;
    // padding: 14px 9px;
    padding: 9px;
    color: #333;
    // &:hover {
    //   background-color: #333;
    //   color: #eee;
    // }
    span {
      display: block;
      height: 32px;
      width: 32px;
      text-align: center;
      line-height: 16px;
      font-size: 14px;
    }
  }
}
.icon {
  width: 32px;
  height: 32px;
  fill: currentColor;
  overflow: hidden;
}
</style>
