<template>
  <div class="bg">
    <div class="content">
      <div class="title">
        <h3>Useful reading book</h3>
        <span>You can click and download</span>
      </div>
      <div class="example-container">
        <div class="example">
          <img
            class="inline-block"
            src="~@/assets/forum/r1.jpg"
            alt
            width="210"
            height="300"
          />
          <img
            class="inline-block"
            src="~@/assets/forum/r2.jpg"
            alt
            width="210"
            height="300"
          />
           <img
            class="inline-block"
            src="~@/assets/forum/r3.jpg"
            alt
            width="210"
            height="300"
          />
           <img
            class="inline-block"
            src="~@/assets/forum/r4.jpg"
            alt
            width="210"
            height="300"
          />
          <img
            class="inline-block"
            src="~@/assets/forum/r5.jpg"
            alt
            width="210"
            height="300"
          />
        </div>
          
      </div>
      <div class="title">
        <h3>Useful Websit Link</h3>
        <span>You can click and trun on</span>
      </div>
      <div class="example-container">
        <div class="item1">
          <h2 ><a href="http://www.runoob.com/java/">www.runoob.com</a></h2>
          <h2 ><a href="https://www.w3school.com.cn/">www.w3school.com.cn</a></h2>
          <h2 ><a href="https://github.com/">github.com</a></h2> 
      </div>
       </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #203260;
  width: 100%;
  padding: 60px 0;
  .content {
    width: 1200px;
    box-sizing: border-box;
    margin: auto;
    text-align: center;
    .title {
      margin-bottom: 40px;
      h3 {
        margin-bottom: 5px;
        font-size: 36px;
        line-height: 54px;
        font-weight: normal;
        color: #fff;
      }
      span {
        color: #bababa;
        font-size: 20px;
      }
    }
    .example-container {
      text-align: left;
      padding: 40px;
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
          text-align: center;
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
            text-align: center;
          }
          
        }
      }
      .item1{
             color: rgb(218, 70, 12);
             text-align: center;
              
           }
    }
  }
}
</style>
