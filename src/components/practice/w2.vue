<template>
  <div>
    <div class="bg-dark">
      <div class="content">
        <div class="title">MCQ</div>
        <div class="img-container">
        <form action="" method="get">Abstract method cannot be static. True or False ?<br /><br /> 
        <label><input name="Fruit" type="radio" value="" />True  </label> 
        <br  />
        <br  />
         <label><input name="Fruit" type="radio" value="" />False </label>
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
   
  }
}
</style>

