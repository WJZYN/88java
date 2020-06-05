<template>
  <div>
    <div class="bg-dark">
      <div class="content">
        <div class="title">Practice exercises for this week</div>
        <div class="img-container">
          <img class="img" src="~@/assets/QMResources/paper2.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-dark {
  width: 100%;
  padding: 40px 0;
  .content {
    width: 900px;
    margin: auto;
    .title {
      color: black;
      text-align: center;
      font-size: 32px;
      margin-bottom: 40px;
    }
    .img-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .img {
        display: block;
        border-radius: 10px;
        width: 890px;
        height: 570px;
        &:nth-child(n + 3) {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>

