<template>
  <div class="card" @click="changeUrl">
    <div class="card-hover">
      <div class="title" :style="{ color: data.color }">{{ data.name }}</div>
      <div class="content">
        <span>内容：</span>
        {{ data.content }}
      </div>
      <div class="content">
        <span>技能：</span>
        {{ data.target }}
      </div>
      <div class="btn" :style="{ backgroundColor: data.color }">了解更多{{ data.name }}</div>
    </div>
    <div class="name">
      <div class="clearfix">
        <div class="name-text">
          <div class="title">{{ data.name }}</div>
          <p class="short-icon" :style="{ backgroundColor: data.color }"></p>
          <p class="text">{{ data.target }}</p>
        </div>
        <div class="name-img"><img :src="data.img" alt width="160" height="160" /></div>
      </div>
    </div>
    <div class="info">周期 {{ data.cycle }}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    changeUrl() {
      this.$router.push('/extraResources/' + this.data._id)
      this.$store.commit('toTargetLearning', this.data)
      window.localStorage.setItem(
        'toTargetLearning',
        JSON.stringify(this.$store.state.targetLearning),
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.card-hover {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  bottom: 80px;
  left: 0;
  width: 100%;
  height: 0;
  transition: all 0.3s;
  background-color: #fff;
  padding: 0 40px;
  .title {
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .content {
    font-size: 14px;
    color: #00000f;
    line-height: 24px;
    margin-bottom: 16px;
    height: 72px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    width: 100%;
    span {
      font-weight: bold;
      color: #1c1f21;
    }
  }
  .btn {
    border-radius: 18px;
    width: 202px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #aaa;
  }
}
.card {
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  transition: all 0.3s;
  width: 590px;
  height: 280px;
  padding: 40px;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 20px;
  &:nth-child(2n + 1) {
    margin-right: 20px;
  }
  box-shadow: 0 4px 8px 0 rgba(28, 31, 33, 0.1);
  &:hover {
    box-shadow: 0 4px 36px 0 rgba(28, 31, 33, 0.2);
    .card-hover {
      height: 308px;
      box-shadow: 0 -4px 4px 0 rgba(28, 31, 33, 0.1);
      padding-top: 40px;
    }
    .info {
      border-top: 1px solid rgba(28, 31, 33, 0.1);
    }
  }
  .name {
    height: 160px;
    .clearfix::after {
      clear: both;
      display: block;
      content: '';
    }
    .name-text {
      float: left;
      width: 330px;
      margin-right: 20px;
      float: left;
      .title {
        font-size: 24px;
        color: #1c1f21;
        line-height: 36px;
        margin-bottom: 8px;
        font-weight: bold;
      }
      .short-icon {
        width: 32px;
        height: 6px;
        border-radius: 3px;
        margin-bottom: 11px;
      }
      .text {
        font-size: 14px;
        color: #545c63;
        line-height: 24px;
      }
    }
    .name-img {
      background-color: #aaa;
      width: 160px;
      height: 160px;
      float: left;
      border-radius: 12px;
      overflow: hidden;
    }
  }
  .info {
    font-size: 12px;
    color: #9199a1;
    line-height: 30px;
    height: 50px;
    padding-top: 20px;
    border-top: 1px solid #fff;
  }
}
</style>
