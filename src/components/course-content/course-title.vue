<template>
  <div class="title">
    第{{ num + 1 }}章
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    num: Number,
  },
}
</script>

<style lang="scss" scoped>
.title {
  color: #1c1f21;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
</style>
