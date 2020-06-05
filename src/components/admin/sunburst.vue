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
        console.log(newArray)
        return newArray
      }
      return []
    },
    sunburstData() {
      let a = []
      let tags = Array.from(new Set(this.collectionsAndHistory.map(item => item.tag)))
      for (let i = 0; i < tags.length; i++) {
        a.push({
          name: tags[i],
          course: this.collectionsAndHistory.filter(item => {
            return item.tag === tags[i]
          }),
        })
      }
      let array = []
      let course = []
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].course.length; j++) {
          course[j] = {}
          course[j].name = a[i].course[j].name
          course[j].value = a[i].course[j].num
        }
        array.push({
          name: a[i].name,
          children: course,
        })
        course = []
      }
      return array
    },
    sunburstOption() {
      return {
        series: {
          type: 'sunburst',
          highlightPolicy: 'ancestor',
          data: this.sunburstData,
          radius: [0, '95%'],
          // sort: null,
          levels: [
            {},
            {
              r0: '15%',
              r: '35%',
              itemStyle: {
                borderWidth: 2,
              },
              label: {
                position: 'left',
                align: 'left',
              },
            },
            {
              r0: '35%',
              r: '70%',
              label: {
                align: 'left',
              },
            },
            {
              r0: '70%',
              r: '72%',
              label: {
                position: 'outside',
                align: 'left',
                padding: 3,
                silent: false,
              },
              itemStyle: {
                borderWidth: 3,
              },
            },
          ],
        },
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
    echarts() {
      let myChart = echarts.init(document.getElementById('main'))
      myChart.setOption(this.sunburstOption)
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
