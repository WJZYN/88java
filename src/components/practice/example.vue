<template>  
<div class="course-training">  
<v-category @my-filter="category" @my-sort="sort"></v-category>
<div class="course-section">
     <div v-if="material == 'Test Paper'">
          <div v-if="show == 'Video'">
            <v-video5></v-video5>
          </div>
        <div v-if="week == 'Week 1'">
          <div v-if="show == 'Slides'">
            <v-paper1></v-paper1>
          </div>
        </div>
        <div v-if="week == 'Week 2'">
          <div v-if="show == 'Slides'">
            <v-paper2></v-paper2>
          </div>
        </div>
        <div v-if="week == 'Week 3'">
          <div v-if="show == 'Slides'">
            <v-paper3></v-paper3>
          </div>
        </div>
        <div v-if="week == 'Week 4'">
          <div v-if="show == 'Slides'">
            <v-paper4></v-paper4>
          </div>
        </div>
      </div>
      <div v-if="material == 'Lessons'">
        <div v-if="week == 'Week 1'">
          <div v-if="show == 'Slides'">
            <v-week1></v-week1>
          </div>
        </div>
        <div v-if="week == 'Week 2'">
          <div v-if="show == 'Slides'">
            <v-week2></v-week2>
          </div>
        </div>
         <div v-if="week == 'Week 3'">
          <div v-if="show == 'Slides'">
            <v-week3></v-week3>
          </div>
        </div>
         <div v-if="week == 'Week 4'">
          <div v-if="show == 'Slides'">
            <v-week4></v-week4>
          </div>
        </div>
      </div>
    </div>

</div>
</template>
<script>
import agent from '@/common/lib/agent.js'
import VCategory from '@/components/practice/ss.vue'
import VWeek1 from '@/components/practice/w1.vue'
import VWeek2 from '@/components/practice/w2.vue'
import VWeek3 from '@/components/practice/w3.vue'
import VWeek4 from '@/components/practice/w4.vue'


export default {
  components: {
    VCategory,
    VWeek1,
    VWeek2,
    VWeek3,
    VWeek4, 
    
  },

  data() {
    return {
      material: 'Lessons',
      week: 'Week 1',
      show: 'Slides'
    }
  },

  methods: {
    category: function(category){
      this.material = category
    },

    sort: function(sort){
      this.week = sort
    },

  }
}
</script> 



<style lang="scss" scoped>
.bg-dark {
  width: 100%;
  padding: 40px 0;
  background-color: #1b1c22;
  .content {
    width: 1200px;
    margin: auto;
    .title {
      color: #fff;
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
        height: 331px;
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
        width: 50px;
        height: 40px;
        margin:20px auto;
      }
   }   
  }
}
</style>
