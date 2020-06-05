<template>
  <div>
    <div class="header">
      <div class="text">
        <div class="title">Test Yourself</div>
        <div class="content">
          you complete the blank to do quiz
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.header {
  background: url('~@/assets/practice/header.png') 50% 50% no-repeat;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  .text {
    width: 1200px;
    margin: auto;
    color: #fff;
    .title {
      font-size: 65px;
    }
    .content {
      font-size: 18px;
      margin-top: 40px;
      width: 450px;
    }
  }
}
.phone {
  text-align: center;
  height: 150px;
  width: 100%;
  background-color: #fff;
  color: #3f3f3f;
  line-height: 150px;
  font-size: 24px;
  font-weight: 300px;
  box-shadow: 0 2px 4px 0 rgba(7, 17, 27, 0.1);
  .number {
    padding-left: 50px;
    .active {
      color: #c80;
    }
  }
}
</style>
