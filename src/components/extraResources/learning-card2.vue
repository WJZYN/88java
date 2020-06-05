<template>
  <div class="learning-card">
    <div class="learning-card-img">
      <img :src="data.img" :alt="data.name" width="300" height="180" />
    </div>
    <div class="learning-card-main">
      <p class="learning-card-name">{{ data.name }}</p>
      <span class="cycle">周期：{{ data.cycle }}</span>
      <p class="learning-card-content">{{ data.content }}</p>
      <p class="learning-card-target">{{ data.target }}</p>
    </div>
    <el-button type="info" round>查看详情</el-button>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
}
</script>

<style lang="scss" scoped>
.learning-card {
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  width: 100%;
  padding: 20px;
  &::after {
    display: block;
    content: '';
    clear: both;
  }
  &:hover {
    img {
      transform: scale(1.1);
      transition: all ease 0.3s;
    }
  }
  .learning-card-img {
    float: left;
    overflow: hidden;
  }
  .learning-card-main {
    float: left;
    margin-left: 20px;
    width: calc(100% - 320px);
    .learning-card-name {
      font-size: 24px;
      font-weight: bold;
    }
    .cycle {
      height: 40px;
      line-height: 40px;
    }
    .learning-card-content {
      line-height: 24px;
      max-height: 72px;
    }
    .learning-card-target {
      max-height: 48px;
      line-height: 24px;
      margin-top: 10px;
    }
  }
  .el-button {
    width: 180px;
    height: 48px;
    font-size: 20px;
    text-align: center;
    border-radius: 50px;
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
</style>
