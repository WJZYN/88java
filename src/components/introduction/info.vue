<template>
  <div class="container">
    <div class="text">
      <div class="section1">
        <p>Say</p>
      </div>
      <p class="title">Hello World</p>
      <div class="section2">
        <p>with 88Java</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: url(~@/assets/introduction/bg.jpg) no-repeat center ;
}
.text {
  width: 1200px;
  margin: auto;
}
.title {
  font-size: 80px;
  margin-bottom: 32px;
  color: #00a0e9;
  text-align: center;
}
.section1 {
  margin-left: 200px;
  font-size: 50px;
  font-weight: 300;
  color: #fff;
  line-height: 30px;
  width: 1100px;
  text-align: left;
  margin-bottom: 16px;
}
.section2 {
  font-size: 50px;
  font-weight: 300;
  color: #fff;
  line-height: 30px;
  width: 1100px;
  text-align: right;
  margin-bottom: 16px;
}
</style>
