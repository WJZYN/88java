<template>
  <div class="card"><slot></slot></div>
</template>

<style lang="scss" scoped>
.card {
  padding: 24px 32px 32px;
  margin-bottom: 8px;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
  border-radius: 12px;
  line-height: 28px;
  width: 800px;
  font-size: 14px;
}
</style>
