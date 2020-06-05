<template>
  <div class="echartsA">
    <div class="tag-container">
      <div
        class="tag"
        :class="{ active: userType === item.type }"
        v-for="(item, index) in userTypeList"
        :key="index"
        @click="changeUserType(item.type)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="tag-container" v-if="userType === 'users'">
      <div
        class="tag"
        :class="{ active: type === item.type }"
        v-for="(item, index) in tagList"
        :key="index"
        @click="changeType(item.type)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="tag-container" v-else><div class="tag active">历史</div></div>
    <div id="main"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    users: Array,
    fingerUsers: Array,
    courses: Array,
  },
  data() {
    return {
      type: 'userCollection',
      tagList: [{ name: '历史', type: 'userHistory' }, { name: '收藏', type: 'userCollection' }],
      userType: 'users',
      userTypeList: [
        { name: '注册用户', type: 'users' },
        { name: '匿名用户', type: 'fingerUsers' },
      ],
    }
  },
  computed: {
    collectionsAndHistory() {
      if (this[this.userType].length && this.courses.length) {
        let newArray = []
        for (let i = 0; i < this[this.userType].length; i++) {
          let array = this[this.userType][i][this.type].filter(item => item.id != null)
          array.map(item => {
            let obj = {}
            if (this.courses.find(a => a._id === item.id)) {
              obj.id = item.id
              obj.name = this.courses.find(a => a._id === item.id).name
              obj.tag = this.courses.find(a => a._id === item.id).tag
              obj.num = 1
              if (newArray.find(item => item.id === obj.id)) {
                let index = newArray.indexOf(newArray.find(item => item.id === obj.id))
                newArray[index].num++
              } else {
                newArray.push(obj)
              }
            }
          })
        }
        return newArray
      }
      return []
    },
    optionAdata() {
      let arr = []
      if (this.collectionsAndHistory.length) {
        for (let i = 0; i < this.collectionsAndHistory.length; i++) {
          arr.push({
            // name: this.collectionsAndHistory[i].tag,
            // secondName: this.collectionsAndHistory[i].name,
            tag: this.collectionsAndHistory[i].tag,
            name: this.collectionsAndHistory[i].name,
            value: this.collectionsAndHistory[i].num,
            itemStyle: { borderColor: '#fff' },
          })
          arr.sort((a, b) => {
            if (a.tag > b.tag) {
              return -1
            }
            return 1
          })
        }
      }
      return arr
    },
    optionA() {
      let array = ['综合管理', '数据挖掘', '大数据', '人工智能', '5G与物联网']
      array = array
        .map(item => {
          let obj = {}
          obj.name = item
          obj.value = this.getNum(item) || 0
          return obj
        })
        .filter(a => a.value != 0)
      let legend = array.map(a => a.name)
      return {
        tooltip: {
          trigger: 'item',
          //   formatter: '{a} <br/>{b}: {c} ({d}%)',
          formatter: params => {
            if (params.componentIndex === 0) {
              // return '人数: ' + params.value
              return `人数: ${params.value}  <br>  比例: ${params.percent}%`
            } else {
              return `人数: ${params.value}  <br>  比例: ${
                params.percent
              }% <br> ${params.data.tag.join(' , ')}`
            }
          },
        },
        legend: {
          orient: 'horizontal',
          x: 'left',
          data: legend,
        },
        series: [
          {
            name: '课程属性',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
              position: 'inner',
              // formatter: (params) => {
              //   console.log(params)
              //   return params.name
              // }
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: array,
          },
          {
            name: '课程属性',
            type: 'pie',
            radius: ['45%', '60%'],
            // label: {
            //   formatter: function(params) {
            //     return params.data.tag
            //   },
            // },
            data: this.optionAdata,
          },
        ],
      }
    },
  },
  methods: {
    changeType(name) {
      if (this.type != name) {
        this.type = name
      }
    },
    changeUserType(name) {
      if (this.userType != name) {
        if (name === 'fingerUsers') {
          this.type = 'userHistory'
        }
        this.userType = name
      }
    },
    getNum(str) {
      return eval(
        this.collectionsAndHistory
          .filter(item => item.tag.indexOf(str) > -1)
          .map(item => {
            return item.num
          })
          .join('+'),
      )
    },
    echarts() {
      let myChart = echarts.init(document.getElementById('main'))
      myChart.setOption(this.optionA)
    },
  },
  watch: {
    collectionsAndHistory() {
      this.echarts()
    },
  },
  created() {
    this.$nextTick(() => {
      this.echarts()
    })
    // let _this = this
    // setTimeout(function() {
    //   _this.echarts()
    // },1000)
  },
}
</script>

<style lang="scss" scoped>
.echartsA {
  height: 100%;
  position: relative;
  #main {
    width: 100%;
    height: 100%;
  }
  .tag-container {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    &:nth-child(2) {
      top: 40px;
    }
    .tag {
      display: inline-block;
      cursor: pointer;
      margin-left: 5px;
      padding: 0 10px;
      height: 32px;
      line-height: 30px;
      font-size: 12px;
      background-color: rgba(144, 147, 153, 0.1);
      border-color: rgba(144, 147, 153, 0.2);
      color: #909399;
      border-radius: 4px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      white-space: nowrap;
      &.active {
        background-color: rgba(245, 108, 108, 0.1);
        border-color: rgba(245, 108, 108, 0.2);
        color: #f56c6c;
      }
    }
  }
}
</style>
