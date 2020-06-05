<template>
  <div class="analysis">
    <div id="a1"></div>
    <div id="a2"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    users: Array,
    fingerUsers: Array,
  },
  computed: {
    echartsA1() {
      let user = this.users.map(a => a.date.slice(0, 10))
      let x = Array.from(new Set(user)).sort((a, b) => {
        if (a > b) {
          return 1
        }
        return -1
      })
      let y = []
      for (let i = 0; i < x.length; i++) {
        y.push(
          user.filter(item => {
            return item.indexOf(x[i]) === 0
          }).length,
        )
      }
      for (let i = 1; i < x.length; i++) {
        y[i] = y[i - 1] + y[i]
      }
      return {
        title: {
          text: '注册人数增长趋势',
        },
        xAxis: {
          type: 'category',
          data: x,
          // boundaryGap: false,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: y,
            type: 'line',
            //  areaStyle: {}
          },
        ],
      }
    },
    echartsA2() {
      let user = this.fingerUsers.map(a => a.date.slice(0, 10))
      let x = Array.from(new Set(user)).sort((a, b) => {
        if (a > b) {
          return 1
        }
        return -1
      })
      let y = []
      for (let i = 0; i < x.length; i++) {
        y.push(
          user.filter(item => {
            return item.indexOf(x[i]) === 0
          }).length,
        )
      }
      for (let i = 1; i < x.length; i++) {
        y[i] = y[i - 1] + y[i]
      }
      return {
        title: {
          text: '游客人数增长趋势',
        },
        xAxis: {
          type: 'category',
          data: x,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: y,
            type: 'line',
          },
        ],
      }
    },
  },
  methods: {
    echarts() {
      let myChartA1 = echarts.init(document.getElementById('a1'))
      let myChartA2 = echarts.init(document.getElementById('a2'))
      myChartA1.setOption(this.echartsA1)
      myChartA2.setOption(this.echartsA2)
    },
  },
  created() {
    this.$nextTick(() => {
      this.echarts()
    })
  },
}
</script>

<style lang="scss" scoped>
.analysis {
  height: 100%;
  #a1 {
    height: 50%;
  }
  #a2 {
    height: 50%;
  }
}
</style>
