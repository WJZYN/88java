<template>
  <div class="page">
    <span
      :key="n"
      v-for="n in page"
      class="page-num"
      :class="{ active: active_num == n }"
      @click="changeNum(n)"
    >
      {{ n }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    number: Number,
    page_num: Number,
    num_of_page: Number,
  },
  data() {
    return {
      active_num: 1,
    }
  },
  watch: {
    page_num: function(new_value) {
      this.active_num = new_value
    },
  },
  computed: {
    page() {
      return Math.ceil(this.number / this.num_of_page)
    },
  },
  methods: {
    changeNum(n) {
      this.$emit('my-page', n)
      this.active_num = n
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  margin: auto;
  // width: 1200px;
  text-align: center;
  .page-num {
    display: inline-block;
    cursor: pointer;
    margin: 10px 12px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    border-radius: 50%;
    color: #4d555d;
    &:hover {
      background-color: #d9dde1;
    }
  }
  .active {
    background: #4d555d;
    color: #fff;
    &:hover {
      background-color: #4d555d;
    }
  }
}
</style>
