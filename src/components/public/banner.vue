<template>
  <el-card class="x-banner-main" :body-style="{ padding: '0px' }">
    <div class="x-banner-carousel"><slot name="carousel"></slot></div>
  </el-card>
</template>

<style lang="scss" scoped>
.x-banner-main {
  border-radius: 10px;
  width: 100%;
  .x-banner-carousel {
    width: 100%;
  }
}
</style>
