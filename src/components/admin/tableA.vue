<template>
  <div class="table-container">
    <el-button @click="abc">123</el-button>
    <div class="header">
      <div class="table-tag">
        <el-input
          class="search"
          placeholder="搜索用户"
          prefix-icon="el-icon-search"
          v-model="search"
        ></el-input>
      </div>
      <div class="page">
        <el-pagination
          @current-change="emitPage"
          background
          layout="prev, pager, next"
          :page-size="10"
          :total="users.length"
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
        <el-table-column fixed="right" type="index" :index="getIndex"></el-table-column>
        <el-table-column
          label="注册时间"
          width="200"
          sortable="custom"
          prop="date"
        ></el-table-column>
        <el-table-column fixed="left" label="用户名" width="200" prop="name"></el-table-column>
        <el-table-column
          label="收藏数量"
          sortable="custom"
          width="120"
          prop="collectionsLength"
        ></el-table-column>
        <el-table-column
          label="历史数量"
          sortable="custom"
          width="120"
          prop="historyLength"
        ></el-table-column>
        <el-table-column label="邮箱" width="250" prop="email"></el-table-column>
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
                <p v-for="(item, index) in scope.row.info" :key="index">
                  <span style="color: #FF7F00">{{ item.key }}:</span>
                  {{ item.value }}
                </p>
              </div>
              <p v-else>暂无信息</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.info.length }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="最近ip" prop="ip" width="300"></el-table-column> -->
        <el-table-column label="个性签名" width="300" prop="avator"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import json2csv from 'json2csv'
import fs from 'fs'
export default {
  props: {
    users: Array,
  },
  data() {
    return {
      search: '',
      sortBy: { prop: null, order: null },
      page: 1,
    }
  },
  computed: {
    tableData() {
      let array = []
      let len = this.users.length
      for (let i = 0; i < len; i++) {
        array.push({
          date: this.users[i].date,
          name: this.users[i].name,
          avator: this.users[i].avator || '尚未填写',
          collectionsLength: this.users[i].userCollection.length,
          historyLength: this.users[i].userHistory.length,
          collections: this.users[i].userCollection,
          history: this.users[i].userHistory,
          email: this.users[i].email || '尚未填写',
          log_num: this.users[i].login_log.length,
          log: this.getLog(this.users[i].login_log),
          info: this.users[i].info.filter(item => {
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
      if (this.search) {
        array = array.filter(item => item.name.indexOf(this.search) === 0)
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
    abc() {
      const { Parser } = require('json2csv')
      // const fields = Object.keys(this.tableData[0])
      const fields = ['collectionsLength', 'historyLength', 'log_num']
      console.log(fields)
      const myCars = this.tableData
      const json2csvParser = new Parser({ fields })
      const csv = json2csvParser.parse(myCars)
      let funDownload = function(content, filename) {
        // 创建隐藏的可下载链接
        var eleLink = document.createElement('a')
        eleLink.download = filename
        eleLink.style.display = 'none'
        // 字符内容转变成blob地址
        var blob = new Blob([content])
        eleLink.href = URL.createObjectURL(blob)
        // 触发点击
        document.body.appendChild(eleLink)
        eleLink.click()
        // 然后移除
        document.body.removeChild(eleLink)
      }
      funDownload(csv, 'lql.csv')
    },
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
    .table-tag {
      float: left;
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
