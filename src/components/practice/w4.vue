<template>
  <div>
    <div class="bg-dark">
      <div class="content">
        <div class="title">MCQ</div>
        <div class="img-container">
        <form action="" method="get">Which method must be defined by a class implementing the java.lang.Runnable interface?<br /><br /> 
        <label><input name="Fruit" type="radio" value="" />void run()  </label> 
        <br  />
        <br  />
        <label><input name="Fruit" type="radio" value="" /> public void run() </label>
        <br  />
        <br  />
        <label><input name="Fruit" type="radio" value="" /> public void start() </label>
        <br  />
        <br  />
        <label><input name="Fruit" type="radio" value="" /> void run(int priority) </label>
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

