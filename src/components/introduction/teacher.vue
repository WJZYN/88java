<template>
  <div class="teachers">
    <div class="container">
      <div
        class="teacher"
        :key="index"
        v-for="(teacher, index) in teachers"
        @click="choose(index + 1)"
      >
        <h1 class="name">{{ teacher.name }}</h1>
        <div class="info">
          <p>{{ teacher.info }}</p>
        </div>
        <div class="img"><img :src="teacher.img" alt width="280" height="340" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'
export default {
  data() {
    return {
      teachers: [],
    }
  },
  mounted() {
    agent.get('/teacher').then(res => {
      this.teachers = res
    })
  },
}
</script>

<style lang="scss" scoped>
.teachers {
  width: 100%;
  padding: 60px 0;
  .container {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .teacher {
      width: 280px;
      background-color: #fff;
      margin-bottom: calc(80px / 3);
      position: relative;
      overflow: hidden;
      // box-shadow: 0 4px 8px rgba(7,17,27,.1);
      box-shadow: 0 4px 16px #eee;
      &:hover {
        .img {
          bottom: -340px;
        }
      }
      &:nth-child(n + 5) {
        margin: 0;
      }
      .name {
        line-height: 40px;
        font-size: 24px;
        font-weight: normal;
        margin: 10px 0;
        text-align: center;
        color: #333;
      }
      .info {
        padding: 0 20px 20px;
        height: 340px;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        text-align: justify;
        overflow: hidden;
        color: #666;
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 16;
          overflow: hidden;
        }
      }
      .img {
        height: 340px;
        position: absolute;
        bottom: 0;
        transition: all 0.4s ease;
      }
    }
  }
}
</style>
