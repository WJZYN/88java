<template>
  <div class="table-container">
    <div class="header">
      <div class="page">
        <el-pagination
          @current-change="emitPage"
          background
          layout="prev, pager, next"
          :page-size="10"
          :total="fingerUsers.length"
          :current-page="page"
        ></el-pagination>
      </div>
    </div>
    <div class="table">
      <el-table
        stripe
        border
        :data="tableData"
        :default-sort="{ prop: 'date', order: 'descending' }"
        @sort-change="sortByData"
      >
        <el-table-column type="index" :index="getIndex"></el-table-column>
        <el-table-column label="首次记录时间" width="200" sortable="custom" prop="date"></el-table-column>
        <el-table-column label="用户ID" width="300" prop="name"></el-table-column>
        <el-table-column label="历史数量" sortable="custom" width="120" prop="historyLength"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="最近登录" sortable="custom" width="120" prop="log_num">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="left">
              <el-table :data="scope.row.log" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="ip" label="IP" width="180"></el-table-column>
                <el-table-column prop="num" label="次数"></el-table-column>
              </el-table>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.log_num }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="设备信息" width="120" prop="info">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="left">
              <div v-if="scope.row.info.length">
                <p v-for="(item,index) in scope.row.info" :key="index">
                  <span style="color: #FF7F00">{{item.key}}:</span>
                  {{item.value}}
                </p>
              </div>
              <p v-else>暂无信息</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.info.length }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  props: {
    fingerUsers: Array,
  },
  data() {
    return {
      sortBy: { prop: null, order: null },
      page: 1,
    }
  },
  computed: {
    tableData() {
      let array = []
      let len = this.fingerUsers.length
      for (let i = 0; i < len; i++) {
        array.push({
          date: this.fingerUsers[i].date,
          name: this.fingerUsers[i].id,
          historyLength: this.fingerUsers[i].userHistory.length,
          history: this.fingerUsers[i].userHistory,
          email: this.fingerUsers[i].email || '尚未填写',
          log_num: this.fingerUsers[i].login_log.length,
          log: this.getLog(this.fingerUsers[i].login_log),
          ip: Array.from(new Set(this.fingerUsers[i].login_log.map(a => a.ip))),
          info: this.fingerUsers[i].info.filter(item => {
            return (
              [
                'userAgent',
                'language',
                'colorDepth',
                'deviceMemory',
                'screenResolution',
                'timezone',
              ].indexOf(item.key) > -1
            )
          }),
        })
      }
      if (this.sortBy.prop) {
        let _this = this
        array = array.sort(function(a, b) {
          if (_this.sortBy.order === 'ascending') {
            if (_this.sortBy.prop === 'date') {
              return new Date(a.date).getTime() - new Date(b.date).getTime()
            } else {
              return a[_this.sortBy.prop] - b[_this.sortBy.prop]
            }
          } else {
            if (_this.sortBy.prop === 'date') {
              return new Date(b.date).getTime() - new Date(a.date).getTime()
            } else {
              return b[_this.sortBy.prop] - a[_this.sortBy.prop]
            }
          }
        })
      }
      array = array.map(item => {
        item.date =
          new Date(item.date).toJSON().slice(0, 10) +
          ' ' +
          new Date(item.date).toTimeString().slice(0, 5)
        return item
      })
      return array.slice((this.page - 1) * 10, this.page * 10)
    },
  },
  methods: {
    getLog(logs) {
      let log = logs.filter(b => b.date != null)
      let date = Array.from(new Set(log.map(a => new Date(a.date).toJSON().slice(0, 10)))).sort()
      let array = log.map(a => {
        a.date = new Date(a.date).toJSON().slice(0, 10)
        return a
      })
      let num = []
      for (let i = 0; i < date.length; i++) {
        num[i] = array.filter(item => item.date === date[i]).length
      }
      let newArray = []
      for (let i = 0; i < date.length; i++) {
        newArray.push({
          date: date[i],
          num: num[i],
          ip: array.find(item => item.date === date[i]).ip,
        })
      }
      return newArray
    },
    echarts(data) {
      let myChart = echarts.init(document.getElementById('main1'))
      myChart.dispose()
      myChart = echarts.init(document.getElementById('main1'))
      myChart.setOption(data)
    },
    option(data) {
      let user = data.map(a => new Date(a.date).toJSON().slice(5, 10))
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
      // for (let i = 1; i < x.length; i++) {
      //   y[i] = y[i - 1] + y[i]
      // }
      // console.log(y)
      return {
        tooltip: {
          trigger: 'axis',
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
    emitPage(page) {
      this.page = page
    },
    sortByData(column) {
      this.sortBy = { prop: column.prop, order: column.order }
    },
    getIndex(index) {
      return index + (this.page - 1) * 10 + 1
    },
  },
}
</script>


<style lang="scss" scoped>
.table-container {
  height: 100%;
  .header {
    height: 60px;
    &::after {
      display: block;
      content: '';
      clear: both;
    }
    .page {
      float: right;
    }
  }
  .table {
    // height: calc(100% - 200px);
  }
}
</style>
