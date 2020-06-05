<template>
  <div class="partner">
    <div class="title">
      <h3>Cooperation Partner</h3>
    </div>
    <div class="container">
      <img
        v-for="(item, index) in list"
        :key="index"
        :src="item.url"
        width="240"
        height="70"
        :alt="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          url: require('@/assets/partner/QMUL.jpg'),
        },
        {
          url: require('@/assets/partner/BUPT.png'),
        },
        {
          url: require('@/assets/partner/THU.jpg'),
        },
        {
          url: require('@/assets/partner/coursera.jpg'),
        },
        {
          url: require('@/assets/partner/edX.jpg'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.partner {
  width: 100%;
  padding: 70px 0;
  .title {
    text-align: center;
    margin-bottom: 20px;
    h3 {
      font-size: 36px;
      line-height: 54px;
      font-weight: normal;
      color: #333;
    }
  }
  .container {
    width: 1200px;
    margin: auto;
  }
}
</style>
