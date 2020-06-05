<template>
  <div class="container">
    <div class="clearfix">
      <div class="teacher clearfix">
        <div
          :key="teacher.id"
          v-for="(teacher, index) in teachers"
          class="teacher-img-container"
          :class="{ active: id == index + 1 }"
          @click="choose(index + 1)"
        >
          <img class="teacher-img" :src="teacher.src" alt width="150" height="150" />
        </div>
      </div>
      <div class="teacher-info">
        <div class="info-name">{{ choose_teacher_name }}</div>
        <p class="info-content" v-for="(n, index) in choose_teacher_info" :key="index">{{ n }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'
export default {
  data() {
    return {
      id: 1,
      teachers: [],
    }
  },
  computed: {
    choose_teacher_name() {
      return this.teachers.find(item => item.id == this.id)
        ? this.teachers.find(item => item.id == this.id).name
        : ''
    },
    choose_teacher_info() {
      return this.teachers.find(item => item.id == this.id)
        ? this.teachers.find(item => item.id == this.id).info.split('\n')
        : ''
    },
  },
  methods: {
    choose(n) {
      this.id = n
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
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.teacher {
  width: 700px;
  padding-left: 25px;
  float: right;
  margin-right: 100px;
  .active .teacher-img {
    border: solid 5px #fff;
  }
  .teacher-img {
    border-radius: 50%;
    overflow: hidden;
    box-sizing: border-box;
    border: solid 5px #231f20;
    &:hover {
      border: solid 5px #fff;
    }
  }
  .teacher-img-container {
    float: left;
    margin: 50px 0;
    margin-right: 25px;
    &:nth-child(4n) {
      margin-right: 0;
    }
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
}
.teacher-info {
  width: 700px;
  float: left;
  padding-right: 25px;
  margin-left: 100px;
  height: 500px;
  border-right: 1px dashed #aaa;
  .info-img {
    border-radius: 50%;
  }
  .info-name {
    font-size: 32px;
    line-height: 32px;
    color: #ff7422;
    padding: 20px;
  }
  .info-content {
    line-height: 26px;
    font-size: 18px;
    text-align: left;
    // color: #3f3f3f;
    color: #aaa;
    padding: 0 20px;
    padding-bottom: 14px;
  }
}
.clearfix::after {
  display: block;
  content: '';
  clear: both;
}
</style>
