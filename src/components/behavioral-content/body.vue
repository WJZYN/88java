<template>
  <div class="body">
    <div class="container">
      <div class="header-tags">
        <div class="tag-container">
          <span
            class="tag"
            @click="choose(index)"
            :class="{ active: id === index }"
            v-for="(tag, index) in tags"
            :key="index"
          >
            {{ tag.name }}
          </span>
        </div>
      </div>
      <div class="main">
        <div class="content" v-if="id === 0">
          <div class="card">
            <h3>课程简介</h3>
            <p>{{ data.content }}</p>
          </div>
          <div class="card">
            <h3>学习目标</h3>
            <p>{{ data.target }}</p>
          </div>
          <div class="card">
            <h3>学习对象</h3>
            <p>{{ data.content }}</p>
          </div>
        </div>
        <div class="course" v-if="id === 1">
          <el-collapse accordion>
            <el-collapse-item
              :key="index"
              v-for="(item, index) in data.course"
              :title="item.title"
              :name="index"
            >
              <div v-for="(page, index) in item.page" :key="index">{{ page }}</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="teacher" v-if="id === 2">
          <h3>精英团队</h3>
          <div class="teacher-container">
            <div class="card" v-for="(item, index) in chooseTeachers" :key="index">
              <img :src="item.img" alt width="300" height="200" />
              <div class="text">
                <h3>{{ item.name }}</h3>
                <p>{{ item.info }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="question" v-if="id === 3">
          <div class="card" :key="index" v-for="(item, index) in data.question">
            <h3>{{ item.name }}</h3>
            <p>{{ item.info }}</p>
          </div>
        </div>
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
      tags: [
        { name: '课程介绍' },
        { name: '课程章节' },
        { name: '主讲老师' },
        { name: '课程问答' },
      ],
      id: 0,
      teachers: [],
    }
  },
  methods: {
    choose(n) {
      this.id = n
    },
  },
  computed: {
    chooseTeachers() {
      return this.teachers ? this.teachers.slice(0, 3) : ''
    },
  },
  mounted() {
    agent.get('https://www.easy-mock.com/mock/5c8373b022c6e01a284aaebf/cda/teacher').then(res => {
      this.teachers = res.data
    })
  },
}
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  padding: 40px 0;
  .container {
    width: 1200px;
    padding: 20px;
    margin: auto;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
    .header-tags {
      height: 60px;
      padding: 10px 0;
      padding-left: 20px;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
      .tag-container {
        margin: auto;
      }
      .tag {
        display: inline-block;
        font-weight: bold;
        cursor: pointer;
        margin-right: 80px;
        height: 40px;
        line-height: 40px;
        color: #333;
        font-size: 20px;
      }
      .active {
        color: #f20d0d;
        border-bottom: 3px solid #f20d0d;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      padding: 30px 0;
      .card {
        width: 400px;
        padding: 0 20px;
        border-left: 1px solid #ddd;
        h3 {
          font-size: 18px;
          color: #666;
          padding-bottom: 20px;
        }
        p {
          font-size: 14px;
          color: #3e3431;
          line-height: 24px;
        }
        &:first-child {
          border: 0;
        }
      }
    }
    .course {
      padding: 30px 20px;
    }
    .teacher {
      width: 920px;
      margin: auto;
      h3 {
        text-align: center;
        font-size: 24px;
        color: #666;
        padding: 30px 0;
      }
      .teacher-container {
        display: flex;
      }
      .card {
        width: 300px;
        margin-left: 10px;
        &:first-child {
          margin-left: 0;
        }
        .text {
          padding: 20px;
          height: calc(100% - 200px);
          &:hover {
            background-color: #666;
            p {
              color: #fff;
            }
            h3 {
              color: #fff;
            }
          }
          h3 {
            padding-bottom: 10px;
            font-size: 20px;
            padding: 0;
            padding-bottom: 10px;
            text-align: left;
          }
          p {
            color: #888;
          }
        }
      }
    }
    .question {
      width: 800px;
      margin: auto;
      padding: 40px 0;
      .card {
        width: 400px;
        display: inline-block;
        vertical-align: top;
        padding: 20px;
        h3 {
          font-size: 20px;
          padding-bottom: 10px;
          color: #333;
        }
        p {
          color: #555;
        }
      }
    }
  }
}
</style>
