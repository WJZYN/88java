<template>
  <div class="bg">
    <div class="content">
      <div class="title">
        <h3>系统开发技术架构</h3>
        <span>System Devlopment Technology Architecture</span>
      </div>
      <div class="img-container">
        <img class="img" src="~@/assets/forum/content.png" alt width="1200" height="675" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #f6f6f6;
  padding: 50px 0;
  .content {
    width: 1200px;
    margin: auto;
    text-align: center;
    .title {
      margin-bottom: 50px;
      h3 {
        color: #403d56;
        font-size: 30px;
        margin-bottom: 5px;
      }
      span {
        color: #bababa;
        font-size: 14px;
      }
    }
    .img-container {
      padding: 30px 0px 60px;
      width: 1200px;
      margin: auto;
      box-shadow: 0 0 35px rgba(180, 180, 180, 0.5);
      border-radius: 10px;
      background-color: #fff;
      img {
        display: block;
      }
    }
  }
}
</style>
