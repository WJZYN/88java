<template>
  <div class="container">
    <div class="honors">
      <div class="honor" v-for="(honor, index) in list" :key="index">
        <p class="name">{{ honor.name }}</p>
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiangbei"></use>
        </svg>-->
        <p class="content">{{ honor.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import '@/assets/introduction/iconfont.js'
export default {
  data() {
    return {
      list: [
        {
          name: '年度最佳培训团队',
          content: '2018年度由北京现代金融颁发',
        },
        {
          name: '“大数据与智慧运营”首席讲师',
          content: '团队胡老师受聘为乐视移动“大数据与智慧运营”首席外聘讲师',
        },
        {
          name: '乐视移动“最佳培训伙伴”',
          content: '2015年度由乐视移动颁发',
        },
        {
          name: '中国移动集团级创新一等奖',
          content: '支撑广西移动获得2017年度中国移动集团公司颁发的创新一等奖',
        },
        {
          name: '京东大数据图书销量前三名',
          content: '2017年12月获得京东大数据图书销量排行前三名',
        },
        {
          name: '最佳培训实践案例奖',
          content: '2016年支撑广西移动获得中国移动集团颁发的“最佳培训实践案例奖”',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #f3f4f5;
  padding: 40px 0;
}
.honors {
  display: flex;
  width: 1200px;
  margin: auto;
  flex-wrap: wrap;
}
.honor {
  width: 400px;
  padding: 40px;
  &:hover {
    box-shadow: 0px 0px 15px #ccc;
  }
  .name {
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
  }
  .content {
    font-size: 14px;
    color: #868686;
    line-height: 21px;
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
