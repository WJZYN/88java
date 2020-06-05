<template>
  <div class="course-training">
    <v-category @my-filter="category" @my-sort="sort" @my-sort2="sort2"></v-category>
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
         <div v-if="week == 'Week 1'">
          <div v-if="show == 'Video'">
            <v-video1></v-video1>
          </div>
        </div>
         <div v-if="week == 'Week 2'">
          <div v-if="show == 'Video'">
            <v-video2></v-video2>
          </div>
        </div>
         <div v-if="week == 'Week 3'">
          <div v-if="show == 'Video'">
            <v-video3></v-video3>
          </div>
        </div>
         <div v-if="week == 'Week 4'">
          <div v-if="show == 'Video'">
            <v-video4></v-video4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'
import VCategory from '@/components/QMResources/category.vue'
import VPractice from '@/components/QMResources/practice.vue'
import VWeek1 from '@/components/QMResources/week1.vue'
import VWeek2 from '@/components/QMResources/week2.vue'
import VWeek3 from '@/components/QMResources/week3.vue'
import VWeek4 from '@/components/QMResources/week4.vue'
import VVideo1 from '@/components/QMResources/video1.vue'
import VVideo2 from '@/components/QMResources/video2.vue'
import VVideo3 from '@/components/QMResources/video3.vue'
import VVideo4 from '@/components/QMResources/video4.vue'
import VPaper1 from '@/components/QMResources/paper1.vue'
import VPaper2 from '@/components/QMResources/paper2.vue'
import VPaper3 from '@/components/QMResources/paper3.vue'
import VPaper4 from '@/components/QMResources/paper4.vue'
import VVideo5 from '@/components/QMResources/video5.vue'

export default {
  components: {
    VCategory,
    VPractice,
    VWeek1,
    VWeek2,
    VWeek3,
    VWeek4,
    VVideo1,
    VVideo2,
    VVideo3,
    VVideo4,
    VPaper1,
    VPaper2,
    VPaper3,
    VPaper4,
    VVideo5,
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

    sort2: function(sort2){
      this.show = sort2
    }
  }
}
</script> 


