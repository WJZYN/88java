<template>
  <div class="table-container">
    <div class="header">
      <el-button class="header-btn" @click="addCoures">增加课程</el-button>
      <div class="page">
        <el-pagination
          @current-change="emitPage"
          background
          layout="prev, pager, next"
          :page-size="10"
          :total="course.length"
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
        <!-- <el-table-column fixed type="index" :index="getIndex"></el-table-column> -->
        <el-table-column fixed type="expand" width="60">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="课程简介">
                <span>{{ props.row.introduction }}</span>
              </el-form-item>
              <br />
              <el-form-item label="课程详解简介">
                <span>{{ props.row.simple }}</span>
              </el-form-item>
              <br />
              <el-form-item label="你可以学到什么">
                <span>{{ props.row.you_can_learning }}</span>
              </el-form-item>
              <br />
              <el-form-item label="你需要的知识储备">
                <span>{{ props.row.you_need_know }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="课程名字" prop="name"></el-table-column>
        <el-table-column
          label="标签"
          width="120"
          prop="tag"
          sortable="custom"
          :formatter="formatterTag"
        ></el-table-column>
        <!-- <el-table-column label="课程简介" width="300" prop="introduction"></el-table-column> -->
        <el-table-column label="收藏" width="80" sortable="custom" prop="collect"></el-table-column>
        <el-table-column label="历史" width="80" sortable="custom" prop="history"></el-table-column>
        <el-table-column label="人数" width="80" sortable="custom" prop="num"></el-table-column>
        <el-table-column label="价格" width="80" sortable="custom" prop="price"></el-table-column>
        <el-table-column label="评价" width="80" sortable="custom" prop="score"></el-table-column>
        <el-table-column label="时间" width="100" sortable="custom" prop="time"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column label="课程详解简介" width="200" prop="simple"></el-table-column>
        <el-table-column label="你可以学到什么" width="200" prop="you_can_learning"></el-table-column>
        <el-table-column label="你需要的知识储备" width="200" prop="you_need_know"></el-table-column>-->
        <!-- <el-table-column label="最近登录" sortable="custom" width="120" prop="log_num">
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
        </el-table-column>-->
      </el-table>
    </div>
    <el-dialog title="编辑课程信息" :visible.sync="dialogFormVisible" width="80%">
      <el-form :model="editData">
        <el-form-item label="课程名字" label-width="120">
          <el-input
            type="textarea"
            autosize
            placeholder="请输入内容"
            v-model="editData.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="课程属性" label-width="120">
          <!-- <el-input
            type="textarea"
            autosize
            placeholder="请输入内容"
            v-model="editData.tag"
          ></el-input>-->
          <!-- <el-select v-model="editData.tag" placeholder="请选择" multiple>
            <el-option
              v-for="item in tags"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>-->
          <el-checkbox-group v-model="editData.tag">
            <el-checkbox
              v-for="(item, index) in tags"
              :key="index"
              :value="item.value"
              :label="item.label"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- <el-form-item label="课程简介" label-width="120">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="editData.introduction"></el-input>
        </el-form-item>
        <el-form-item label="课程详细简介" label-width="120">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="editData.simple"></el-input>
        </el-form-item>-->
        <el-button class="header-btn" @click="addTab">增加章节</el-button>
        <el-tabs v-model="activeTab" type="card" @tab-remove="tabRemove">
          <el-tab-pane label="课程介绍" name="first" :closable="false">
            <el-form-item label="课程简介" label-width="120">
              <el-input
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="editData.introduction"
              ></el-input>
            </el-form-item>
            <el-form-item label="课程详细简介" label-width="120">
              <el-input
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="editData.simple"
              ></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane
            v-for="(item, index) in editData.course"
            :key="index"
            :label="formatterElTab(index)"
            :name="index.toString()"
            :closable="editData.course.length > 1"
          >
            <el-form-item label="标题" label-width="120">
              <el-input
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="item.title"
              ></el-input>
            </el-form-item>
            <el-form-item label="章节介绍" label-width="120">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2 }"
                placeholder="请输入内容"
                v-model="item.simple"
              ></el-input>
            </el-form-item>
            <el-form-item label="目录" label-width="120">
              <el-input
                type="text"
                autosize
                placeholder="请输入内容"
                v-for="(a, index) in item.page"
                :key="index"
                v-model="item.page[index]"
              >
                <el-button
                  @click="addPage(item.page)"
                  v-if="index === item.page.length - 1"
                  slot="prepend"
                  icon="el-icon-plus"
                ></el-button>
                <el-button
                  v-if="item.page.length > 1"
                  @click="removePage(item.page, index)"
                  slot="append"
                  icon="el-icon-minus"
                ></el-button>
              </el-input>
            </el-form-item>
            <el-button class="header-btn" v-if="!item.page.length" @click="addPage(item.page)">
              添加目录
            </el-button>
          </el-tab-pane>
          <el-tab-pane label="右侧介绍" name="fourth">
            <el-form-item label="你可以学到什么" label-width="120">
              <el-input
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="editData.you_can_learning"
              ></el-input>
            </el-form-item>
            <el-form-item label="你需要的知识储备" label-width="120">
              <el-input
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="editData.you_need_know"
              ></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="一些参数" name="fifth">
            <el-form-item label="人数" label-width="120">
              <el-input
                @change="xyz"
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="editData.num"
              ></el-input>
            </el-form-item>
            <el-form-item label="评价" label-width="120">
              <el-input
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="editData.score"
              ></el-input>
            </el-form-item>
            <el-form-item label="价格" label-width="120">
              <el-input
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="editData.price"
              ></el-input>
            </el-form-item>
            <el-form-item label="时长" label-width="120">
              <el-input
                type="textarea"
                autosize
                placeholder="这里是string"
                v-model="editData.time"
              ></el-input>
            </el-form-item>
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'

export default {
  props: {
    course: Array,
    users: Array,
  },
  data() {
    return {
      sortBy: { prop: null, order: null },
      page: 1,
      dialogFormVisible: false,
      activeTab: 'first',
      tags: [
        { label: '大数据', value: '大数据' },
        { label: '数据挖掘', value: '数据挖掘' },
        { label: '5G与物联网', value: '5G与物联网' },
        { label: '人工智能', value: '人工智能' },
        { label: '综合管理', value: '综合管理' },
      ],
      editData: {
        tag: [],
        id: '',
        name: '',
        introduction: '',
        simple: '',
        you_can_learning: '',
        you_need_know: '',
        course: [],
        num: 0,
        score: 0,
        price: 0,
        time: '',
      },
    }
  },
  computed: {
    collections() {
      if (this.course.length && this.users.length) {
        let newArray = []
        for (let i = 0; i < this.users.length; i++) {
          let array = this.users[i].userCollection.filter(item => item.id != null)
          array.map(item => {
            let obj = {}
            obj.id = item.id
            // obj.name = this.courses.find(a => a._id === item.id).name
            // obj.tag = this.courses.find(a => a._id === item.id).tag
            obj.num = 1
            if (newArray.find(item => item.id === obj.id)) {
              let index = newArray.indexOf(newArray.find(item => item.id === obj.id))
              newArray[index].num++
            } else {
              newArray.push(obj)
            }
          })
        }
        return newArray
      }
      return []
    },
    historys() {
      if (this.course.length && this.users.length) {
        let newArray = []
        for (let i = 0; i < this.users.length; i++) {
          let array = this.users[i].userHistory.filter(item => item.id != null)
          array.map(item => {
            let obj = {}
            obj.id = item.id
            // obj.name = this.courses.find(a => a._id === item.id).name
            // obj.tag = this.courses.find(a => a._id === item.id).tag
            obj.num = 1
            if (newArray.find(item => item.id === obj.id)) {
              let index = newArray.indexOf(newArray.find(item => item.id === obj.id))
              newArray[index].num++
            } else {
              newArray.push(obj)
            }
          })
        }
        return newArray
      }
      return []
    },
    tableData() {
      let array = []
      let len = this.course.length
      for (let i = 0; i < len; i++) {
        array.push({
          grade: this.course[i].grade,
          collect: this.collections.find(item => item.id === this.course[i]._id)
            ? this.collections.find(item => item.id === this.course[i]._id).num
            : 0,
          history: this.historys.find(item => item.id === this.course[i]._id)
            ? this.historys.find(item => item.id === this.course[i]._id).num
            : 0,
          name: this.course[i].name,
          id: this.course[i]._id,
          introduction: this.course[i].introduction,
          num: this.course[i].num,
          price: this.course[i].price,
          score: this.course[i].score,
          simple: this.course[i].simple,
          tag: this.course[i].tag,
          time: this.course[i].time,
          you_can_learning: this.course[i].you_can_learning,
          you_need_know: this.course[i].you_need_know,
          course: this.course[i].course,
        })
      }
      if (this.sortBy.prop) {
        let _this = this
        array = array.sort(function(a, b) {
          if (_this.sortBy.order === 'ascending') {
            if (_this.sortBy.prop === 'time' || _this.sortBy.prop === 'tag') {
              return a[_this.sortBy.prop] > b[_this.sortBy.prop] ? 1 : -1
            } else {
              return a[_this.sortBy.prop] - b[_this.sortBy.prop]
            }
          } else {
            if (_this.sortBy.prop === 'time' || _this.sortBy.prop === 'tag') {
              return a[_this.sortBy.prop] < b[_this.sortBy.prop] ? 1 : -1
            } else {
              return b[_this.sortBy.prop] - a[_this.sortBy.prop]
            }
          }
        })
      }
      let newArr = array.slice((this.page - 1) * 10, this.page * 10)
      if (newArr.length) {
        return newArr
      } else {
        this.page--
        return array.slice((this.page - 1) * 10, this.page * 10)
      }
    },
  },
  methods: {
    xyz() {
      console.log(this.editData.num)
      console.log(typeof this.editData.num)
    },
    tabRemove(targetName) {
      console.log(targetName)
      this.editData.course.splice(Number(targetName), 1)
      // let tabs = this.editableTabs
      // let activeName = this.editableTabsValue
      // if (activeName === targetName) {
      //   tabs.forEach((tab, index) => {
      //     if (tab.name === targetName) {
      //       let nextTab = tabs[index + 1] || tabs[index - 1]
      //       if (nextTab) {
      //         activeName = nextTab.name
      //       }
      //     }
      //   })
      // }
    },
    addTab() {
      this.editData.course.push({
        title: '',
        simple: '',
        page: ['这是目录'],
      })
    },
    addCoures() {
      this.editData = {
        tag: [],
        id: '',
        name: '',
        introduction: '',
        simple: '',
        you_can_learning: '',
        you_need_know: '',
        course: [
          {
            title: '',
            simple: '',
            page: ['这是目录'],
          },
        ],
        num: '',
        score: '',
        price: '',
        time: '',
      }
      this.dialogFormVisible = true
    },
    isDisabled() {
      let array = Object.keys(this.editData)
      array.splice(array.indexOf('id'), 1)
      for (let i = 0; i < array.length; i++) {
        let result = this.editData[array[i]]
        let type = typeof result === 'object'
        if (typeof result === 'number') {
          result = result.toString()
        }
        // console.log(result)
        //  console.log(typeof(result))

        if (!result.length) {
          console.log(123)
          return false
        }
        if (type) {
          for (let i = 0; i < result.length; i++) {
            let arr = Object.keys(result[i])
            for (let i = 0; i < arr.length; i++) {
              if (!arr[i].length) {
                console.log(13)
                return false
              }
            }
          }
        }
      }
      return true
    },
    updateData() {
      if (this.isDisabled()) {
        agent.post('/course/update', this.editData).then(res => {
          console.log(res)
          this.dialogFormVisible = false
          this.getReload()
          this.$message({
            message: '修改成功',
            type: 'success',
          })
        })
      } else {
        console.log(this.editData)
        this.$message.error('请完整填写')
      }
    },
    addPage(item) {
      item.push('这是目录')
    },
    removePage(item, index) {
      item.splice(index, 1)
    },
    formatterTag(row) {
      return row.tag.join(' , ')
    },
    formatterElTab(index) {
      return `第${index + 1}章`
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
    getReload() {
      this.$emit('getReload')
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true
      let array = Object.keys(this.editData)
      for (let i = 0; i < array.length; i++) {
        this.editData[array[i]] = row[array[i]]
      }
    },
    handleDelete(index, row) {
      this.$confirm('永久删除该记录, 是否继续?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          return agent.post('/course/remove', { id: row.id })
        })
        .then(res => {
          if (res.status === 1) {
            this.getReload()
            this.$message({
              message: '删除成功',
              type: 'success',
            })
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
  },
  created() {
    console.log(this.course[0])
  },
}
</script>

<style lang="scss" scoped>
.table-container {
  height: 100%;
  .header {
    height: 60px;
    .header-btn {
      // position: absolute;
    }
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
    // height: calc(100vh - 150px);
  }
}
</style>
