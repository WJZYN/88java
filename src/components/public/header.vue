<template>
  <div class="header" :class="{ active: fixed }">
    <div class="header-main">
      <div class="header-logo" @click="selectTab('/introduction')">
        <img src="~@/assets/home/logo.png" alt width="200" />
      </div>
      <div class="header-tab" @click="selectTab('/QMResources')">QM Resources</div>
      <div class="header-tab" @click="selectTab('/extraResources')">Extra Resources</div>
      <div class="header-tab" @click="selectTab('/practice')">Practice</div>
      <div class="header-tab" @click="selectTab('/forum')">Forum</div>
      <div class="header-form">
        <div v-if="nottoken">
          <span class="form" @click="selectTab('/sign_in')">Sign In</span>
          /
          <span class="form" @click="selectTab('/register')">Register</span>
        </div>
        <div v-if="!nottoken" class="user">
          <img
            class="avator"
            src="~@/assets/user/avator.png"
            width="60"
            height="60"
            @click="selectTab('/user')"
          />
        </div>
      </div>
      <div class="header-search">
        <input
          type="text"
          @keyup.enter="onSearch('/search')"
          placeholder="Search..."
          v-model="search"
          class="search"
        />
        <i class="el-icon-search" @click="onSearch('/search')"></i>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'

export default {
  props: {
    scrollTopNum: Number,
  },
  data() {
    return {
      search: '',
      fixed: false,
      scrolltop: '',
    }
  },
  watch: {
    scrollTopNum(new_value, old_value) {
      if (new_value > 80) {
        this.fixed = new_value > old_value ? false : true
      }
    },
  },
  computed: {
    nottoken() {
      return JSON.stringify(this.$store.state.user) === '{}' ? 1 : 0
    },
  },
  methods: {
    onSearch(path) {
      if (this.search.trim() != '') {
        agent.post('/course', { name: this.search.trim() }).then(res => {
          this.$store.commit('toSearch', res)
        })
        this.search = ''
        this.$router.replace(path)
      }
    },
    selectTab(path) {
      this.$router.replace(path)
    },

  },

}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  z-index: 100;
  transition: all 0.3s ease;
  position: absolute;
  top: -80px;
  &.active {
    position: fixed;
    top: 0;
  }
  .header-main {
    width: 1400px;
    margin: auto;
    height: 80px;
    font-size: 16px;
    color: #333;
    text-align: center;
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    .header-tab {
      float: left;
      line-height: 80px;
      width: 140px;
      cursor: pointer;
      color: #666;
      &:hover {
        background-color: #f3f5f6;
      }
    }
    .header-logo {
      width: 200px;
      float: left;
      cursor: pointer;
      height: 80px;
      margin-right: 60px;
    }
    .header-search {
      float: right;
      height: 40px;
      line-height: 40px;
      margin: 20px 30px 20px 0;
      border-radius: 40px;
      padding-right: 10px;
      background-color: #f8f8f8;
      .search {
        width: 220px;
        border: none;
        outline: none;
        vertical-align: top;
        background: none;
        padding-left: 20px;
        color: #666;
      }
      .el-icon-search {
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
        width: 40px;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
        border-radius: 50%;
        color: #666;
      }
    }
    .header-form {
      float: right;
      font-size: 14px;
      color: #d9dde1;
      line-height: 80px;
      height: 80px;
      .user {
        cursor: pointer;
        color: #4d555d;
        line-height: 60px;
        height: 80px;
        padding: 10px 0;
        .name {
          color: #ff4500;
          width: 100px;
          display: inline-block;
          width: 100px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          line-height: 80px;
        }
        .avator {
          border-radius: 50%;
        }
      }
      .form {
        cursor: pointer;
        color: #666;
        padding: 0 6px;
        &:hover {
          color: #ff4500;
        }
      }
    }
  }
}
</style>
