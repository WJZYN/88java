<template>
  <div>
    <div class="bg-dark">
      <div class="content">
        <div class="title">MCQ</div>
        <div class="img-container">
        <form action="" method="get">Which two create an instance of an array? <br /><br /> 
        <label><input name="Fruit" type="radio" value="" />int[] ia = new int [15];</label> 
        <br  />
        <br  />
        <label><input name="Fruit" type="radio" value="" />float fa = new float [20];</label>
        <br  />
        <br  />
        <label><input name="Fruit" type="radio" value="" />char[] ca = “Some String”; </label>
        <br  />
        <br  />
        <label><input name="Fruit" type="radio" value="" />Int ia [][] = (4, 5, 6) (1, 2, 3) </label>
        </form>     
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
      justify-content: center;
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
