<template>
  <div class="container">
    <div class="content">
      <div class="qrcode">
        <div class="l">
          <div class="img">
            <p>Follow our</p>
            <p>official account</p>
            <img src="~@/assets/home/QR_code.png" alt width="120" height="120" />
          </div>
          <svg class="icon" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg>
          <p class="text">Wechat</p>
        </div>
        <div class="l">
          <div class="img">
            <p>Scan this code</p>
            <p>to download Help word</p>
            <img src="~@/assets/home/QR_code2.png" alt width="120" height="120" />
          </div>
          <svg class="icon" aria-hidden="true"><use xlink:href="#icon-app"></use></svg>
          <p class="text">Help</p>
        </div>
      </div>
      <div class="tag">
        <a href="#">About</a>
        <a href="#">Help Center</a>
        <a href="#">Contact Us</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <p class="info">Copyright © 2020 Gp88</p>
    </div>
  </div>
</template>

<script>
import '@/assets/home/app.js'
export default {}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #2b2b2b;
  .content {
    width: 1200px;
    margin: auto;
    padding: 40px 0;
    position: relative;
    .tag {
      height: 28px;
      line-height: 28px;
      color: #bbb;
      a {
        display: inline-block;
        margin: 0 10px;
        &:first-child {
          margin-left: 0;
        }
        &:hover {
          color: #fff;
        }
      }
    }
    .info {
      height: 24px;
      line-height: 24px;
      margin-top: 8px;
      color: #929292;
      font-size: 14px;
    }
    .qrcode {
      position: absolute;
      height: 60px;
      right: 0;
      font-size: 32px;
      .l {
        display: inline-block;
        text-align: center;
        width: 60px;
        height: 60px;
        margin-left: 32px;
        position: relative;
        .img {
          position: absolute;
          width: 160px;
          background-color: #fff;
          bottom: 70px;
          left: -50px;
          padding: 20px;
          display: none;
          box-shadow: 0 2px 16px 0 rgba(7, 17, 27, 0.3);
          border-radius: 2px;
          p {
            font-size: 14px;
            color: #999;
            margin-bottom: 4px;
          }
        }
        &:hover {
          .icon {
            color: #fff;
          }
          .img {
            display: block;
          }
          .text {
            color: #fff;
          }
        }
        .icon {
          width: 1em;
          height: 1em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
          color: #888;
        }
        .text {
          font-size: 12px;
          height: 24px;
          line-height: 24px;
          margin-top: 4px;
          color: #888;
        }
      }
    }
  }
}
</style>
