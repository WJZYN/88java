<template>
  <div class="container">
    <h3 class="propaganda">大数据与人工智能实战</h3>
    <div class="card" v-for="(item, index) in data" :key="index">
      <div class="card-title">
        <span class="tag">阶段{{ number(index) }}</span>
        <span class="title">{{ item.title }}</span>
        <span class="cycle">周期: {{ item.cycle }}</span>
      </div>
      <div class="card-content">
        <div class="text" v-for="(text, index) in item.content" :key="index">
          <p>{{ text.name }}</p>
          <ul>
            <li v-for="(li, index) in text.info" :key="index">
              <span>·{{ li }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'

export default {
  data() {
    return {
      data: [],
    }
  },
  methods: {
    number(num) {
      if (num === 0) {
        return '一'
      } else if (num === 1) {
        return '二'
      } else if (num === 2) {
        return '三'
      } else if (num === 3) {
        return '四'
      } else {
        return '五'
      }
    },
  },
  mounted() {
    if (window.localStorage.getItem('bigdata')) {
      this.data = JSON.parse(window.localStorage.getItem('bigdata'))
    } else {
      agent.get('https://www.easy-mock.com/mock/5c8373b022c6e01a284aaebf/cda/bigdata').then(res => {
        this.data = res.bigdata
        window.localStorage.setItem('bigdata', JSON.stringify(res.bigdata))
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  margin: auto;
  padding: 50px 0;
  .propaganda {
    font-size: 32px;
    color: #1c1f21;
    text-align: center;
    line-height: 48px;
    font-weight: 700;
    margin-bottom: 60px;
  }
  .card {
    padding: 0 0 24px 30px;
    border-left: 2px dashed #d9dde1;
    .card-title {
      position: relative;
      left: -56px;
      .tag {
        width: 66px;
        height: 32px;
        margin-right: 12px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        line-height: 32px;
        background: #c80;
        border-radius: 4px;
        display: inline-block;
        vertical-align: top;
      }
      .title {
        font-weight: 700;
        display: inline-block;
        vertical-align: top;
        font-size: 20px;
        color: #1c1f21;
        margin-right: 12px;
        line-height: 32px;
      }
      .cycle {
        font-size: 14px;
        line-height: 32px;
        display: inline-block;
        vertical-align: top;
        color: #9199a1;
      }
    }
    .card-content {
      width: 100%;
      position: relative;
      background: #fff;
      box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.06);
      border-radius: 12px;
      margin-top: 16px;
      padding: 24px;
      display: flex;
      .text {
        width: 100%;
        flex: 1;
        overflow: hidden;
        margin-left: 12px;
        padding: 16px 32px 16px 16px;
        &:first-child {
          margin-left: 0;
        }
        p {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: bold;
        }
        ul {
          margin-top: 24px;
          list-style: none;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          li {
            position: relative;
            width: 50%;
            span {
              display: block;
              min-width: 200px;
              max-height: 16px;
              font-size: 14px;
              color: #545c63;
              line-height: 16px;
              margin-bottom: 8px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding-right: 20px;
              // &:hover {
              //   box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.6);
              //   position: absolute;
              //   text-overflow: clip;
              //   white-space: normal;
              //   overflow: visible;
              //   max-height: 80px;
              //   background-color: #fff;
              //   z-index: 100;
              // }
            }
          }
        }
      }
    }
  }
}
</style>
