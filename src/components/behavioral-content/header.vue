<template>
  <div class="header">
    <div class="container">
      <div class="img"><img :src="data.img2" alt width="560" height="400" /></div>
      <div class="text">
        <div class="name" :style="{ color: data.color }">{{ data.name }}</div>
        <div class="cycle">周期:{{ data.cycle }}</div>
        <div class="price">
          ￥
          <span :style="{ color: data.color }">{{ changePrice }}</span>
        </div>
        <div class="card-container">
          <div
            class="card"
            :key="index"
            v-for="(item, index) in data.tag"
            :class="{ active: id === index }"
            :style="{ backgroundColor: id === index ? data.color : '', borderColor: data.color }"
            @click="change(index)"
          >
            <div class="tag">{{ item.tag }}</div>
            <span class="date">{{ item.date }}</span>
          </div>
        </div>
        <div class="btn">立即报名</div>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      id: 0,
    }
  },
  computed: {
    changePrice() {
      return this.data.tag ? this.data.tag[this.id].price : ''
    },
  },
  methods: {
    change(index) {
      this.id = index
    },
    // open() {
    //   this.$prompt('请输入你的邮箱', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    //     inputErrorMessage: '邮箱格式不正确',
    //   })
    //     .then(({ value }) => {
    //       if (localStorage.getItem('user')) {
    //         agent.post('/user/history', { id: this.data._id }).then(res => {
    //           if(res.status === 0){
    //             localStorage.clear()
    //             this.$store.commit('toUser', {})
    //           }
    //         })
    //       } else {
    //         agent
    //           .post('/fingerprint/history', {
    //             userId: localStorage.getItem('fingerprintId'),
    //             courseId: this.data._id,
    //           })
    //           .then(res => {})
    //       }
    //     })
    //     .catch(() => {})
    // },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding-top: 40px;
  .container {
    width: 1200px;
    padding: 20px;
    height: 440px;
    margin: auto;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
    &::after {
      clear: both;
      content: '';
      display: block;
    }
    .img {
      float: left;
      width: 560px;
      height: 400px;
    }
    .text {
      float: left;
      width: 600px;
      height: 400px;
      padding: 20px;
      position: relative;
      .name {
        font-size: 20px;
        font-weight: bold;
      }
      .cycle {
        margin-top: 60px;
        margin-bottom: 10px;
        margin-left: 10px;
        width: 120px;
        display: inline-block;
        color: #666;
        font-size: 14px;
        vertical-align: bottom;
      }
      .price {
        display: inline-block;
        margin-left: 100px;
        vertical-align: bottom;
        margin-bottom: 10px;
        font-size: 14px;
        color: #333;
        span {
          font-size: 50px;
          display: inline-block;
          vertical-align: bottom;
        }
      }
      .card {
        width: 130px;
        height: 70px;
        text-align: center;
        line-height: 30px;
        color: #aaa;
        display: inline-block;
        border: 2px solid #aaa;
        border-radius: 0px;
        margin-right: 10px;
        margin-bottom: 10px;
        font-size: 14px;
        .date {
          border-top: 1px solid #aaa;
          padding: 4px;
        }
      }
      .active {
        color: #fff;
        .date {
          border-top: 1px solid #fff;
        }
      }
      .btn {
        width: 200px;
        height: 50px;
        color: #fff;
        border-radius: 24px;
        text-align: center;
        line-height: 50px;
        background-color: #f20d0d;
        position: absolute;
        bottom: 20px;
        &:hover {
          background: #c20a0a;
        }
      }
    }
  }
}
</style>
