<template>
  <div>
    <div class="bg-dark">
      <div class="content">
        <div class="title">Gap filling</div>
        <div class="img-container">
          <img class="img" src="~@/assets/practice/1.png" alt />
          <img class="img" src="~@/assets/practice/2.png" alt />
        </div>
        <div class="input-container">
        <input class="input" type="text" name="love" id="love" placeholder="" />
        <input class="input" type="text" name="love" id="love" placeholder=""  />
        </div>
        <div class="button-container">
        <button class="button" id='sub' > sub</button>
        <button class="button" id='sub'> sub</button>
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
    width: 1200px;
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
        width: 590px;
        height: 380px;
        &:nth-child(n + 3) {
          margin-top: 20px;
        }
      }
    }
       .input-container{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .input{
        widows: 50px;
        height: 50px;
        text-align:center;
        margin:20px auto;
      }
      
   }
   .button-container{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .button{
        width: 100px;
        height: 40px;
        margin:20px auto;
      }
   }   
  }
}
</style>