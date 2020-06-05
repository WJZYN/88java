<template>
  <div class="bg">
    <div class="content">
      <div class="title">
        <h3>客户案例</h3>
        <span>Customer case</span>
      </div>
      <div class="example-container">
        <div class="example">
          <img
            class="inline-block"
            src="~@/assets/forum/partner.png"
            alt
            width="250"
            height="110"
          />
          <div class="inline-block text">
            <h3>中国移动</h3>
            <p>中国移动全量客户生命周期管理与精准营销平台</p>
          </div>
        </div>
        <div class="example">
          <img
            class="inline-block"
            src="~@/assets/forum/partner2.png"
            alt
            width="250"
            height="110"
          />
          <div class="inline-block text">
            <h3>中国联通</h3>
            <p>大数据与人工智能助力网络建维优</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #203260;
  width: 100%;
  padding: 50px 0;
  .content {
    width: 1200px;
    margin: auto;
    text-align: center;
    .title {
      margin-bottom: 50px;
      h3 {
        color: #fff;
        font-size: 30px;
        margin-bottom: 5px;
      }
      span {
        color: #bababa;
        font-size: 14px;
      }
    }
    .example-container {
      text-align: left;
      width: 1200px;
      padding: 30px;
      background-color: #fff;
      margin: auto;
      border-radius: 10px;
      box-shadow: 0 0 35px rgba(180, 180, 180, 0.2);
      .example {
        &:nth-child(n + 2) {
          margin-top: 20px;
        }
        &::after {
          display: block;
          clear: both;
          content: '';
        }
        .inline-block {
          display: inline-block;
          vertical-align: top;
        }
        .text {
          margin-left: 30px;
          height: 110px;
          border-bottom: 1px solid #fff;
          width: 840px;
          border-bottom: 1px solid #ccc;
          h3 {
            margin: 20px 0;
            font-size: 20px;
            color: #3f3f3f;
            line-height: 20px;
          }
          p {
            font-size: 16px;
            line-height: 20px;
            color: #666;
          }
        }
      }
    }
  }
}
</style>
