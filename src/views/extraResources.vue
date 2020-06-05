<template>
  <div class="behavioral-learning">
    <div class="banner"><div class="text">YOU CAN DO IT!</div></div>
        
    <div class="behavioral-learning-list">
      <v-learning-card
        v-for="(course, index) in behavioralLearning"
        :key="index"
        :data="course"
      ></v-learning-card>
    </div>
    <v-example></v-example>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'
import VLearningCard from '@/components/extraResources/learning-card.vue'
import VExample from '@/components/extraResources/example.vue'

export default {
  components: {
    VLearningCard,
    VExample,
  },
  data() {
    return {
      behavioralLearning: [],
    }
  },
  mounted() {
    agent.get('/college').then(res => {
      this.behavioralLearning = res
    })
  },
}
</script>

<style lang="scss" scoped>
.behavioral-learning {
  width: 100%;
  .banner {
    width: 100%;
    height: 300px;
    background: url('~@/assets/learning/ad.jpg') no-repeat 50% 50%;
    .text {
      margin: auto;
      width: 1200px;
      line-height: 300px;
      font-size: 40px;
      color: white;
      padding-left: 200px;
    }
  }
  .behavioral-learning-list {
    width: 1200px;
    margin: auto;
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
  }
  .title {
    font-size: 36px;
    color: #333;
    text-align: center;
    line-height: 50px;
    // font-weight: normal;
    margin-top: 50px;
  }
  .item1{
    color: rgb(40, 7, 228);
    text-align: center;
    line-height: 100px;
    margin: 0 auto;
  }
}
</style>
