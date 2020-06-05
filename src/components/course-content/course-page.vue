<template>
  <div class="page">
    {{ number }}
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    num: Number,
    num2: Number,
  },
  computed: {
    number() {
      return this.num + 1 + '.' + (this.num2 + 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding-left: 12px;
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    background: rgba(242, 13, 13, 0.05);
    color: #f20d0d;
  }
}
</style>
