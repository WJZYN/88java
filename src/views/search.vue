<template>
  <div class="container">
    <div class="search">
      <div class="search-form">
        <input class="search-text" @keyup.enter="searchText" type="text" v-model="text" />
        <button class="search-btn" @click="searchText">搜索</button>
      </div>
    </div>
    <div class="body">
      <div class="main">
        <div v-if="show">
          <div class="card" :key="index" v-for="(item, index) in search_list">
            <img :src="item.img" alt width="224" height="120" />
            <div class="text">
              <div class="name" @click="router(item)">{{ item.name }}</div>
              <div class="tag">
                <div class="float-left">
                  难度
                  <span>{{ item.grade }}</span>
                </div>
                <div class="float-left">
                  时长
                  <span>{{ item.time }}</span>
                </div>
                <div class="float-left">
                  学习人数
                  <span>{{ item.num }}</span>
                </div>
                <div class="float-left">
                  综合评分
                  <span>{{ item.score }}</span>
                </div>
              </div>
              <div class="introduction">{{ item.introduction }}</div>
            </div>
          </div>
          <v-page
            :number="length"
            @my-page="choosePage"
            v-if="length > 10"
            :page_num="page"
            :num_of_page="10"
          ></v-page>
        </div>
        <div v-else class="nodata">暂无相关数据</div>
      </div>
      <div class="aisde">
        <h3 class="title">相关内容推荐</h3>
        <v-course-popular
          :data="popular"
          :key="popular.id"
          v-for="popular in recommend"
        ></v-course-popular>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'
import VPage from '@/components/QMResources/page.vue'
import VCoursePopular from '@/components/course-content/course-popular.vue'

export default {
  components: {
    VCoursePopular,
    VPage,
  },
  data() {
    return {
      popular: [],
      text: '',
      page: 1,
    }
  },
  computed: {
    search() {
      return this.$store.state.search
    },
    recommend() {
      let num = Math.floor(Math.random() * 100)
      return this.popular.slice(num, num + 6)
    },
    show() {
      return this.search.length > 0 ? 1 : 0
    },
    search_trim() {
      return this.text.trim()
    },
    length() {
      return this.search.length
    },
    search_list() {
      return this.search.slice((this.page - 1) * 10, this.page * 10)
    },
  },
  methods: {
    searchText() {
      if (this.search_trim != '') {
        agent.post('/course', { name: this.search_trim }).then(res => {
          this.$store.commit('toSearch', res)
        })
      }
    },
    choosePage: function(n) {
      this.page = n
    },
    router(item) {
      this.$router.push('/QMResources/' + item._id)
      this.$store.commit('toTargetCourse', item)
      if (localStorage.getItem('user')) {
        // agent.post('/user/history', { id: item._id }).then(res => {})
      } else {
        agent
          .post('/fingerprint/history', {
            userId: localStorage.getItem('fingerprintId'),
            courseId: item._id,
          })
          .then(res => {})
      }
      window.localStorage.setItem('toTargetCourse', JSON.stringify(this.$store.state.target))
    },
  },
  mounted() {
    agent.get('/course').then(res => {
      this.popular = res
    })
  },
}
</script>

<style lang="scss" scoped>
.search {
  height: 148px;
  width: 100%;
  background: #d9dde1;
  padding-top: 40px;
  .search-form {
    height: 48px;
    width: 840px;
    margin: auto;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    .search-text {
      font-size: 16px;
      color: #93999f;
      width: 736px;
      line-height: 48px;
      height: 48px;
      outline: none;
      border: none;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding: 0 20px;
    }
    .search-btn {
      outline: none;
      border: none;
      background: #f01414;
      width: 104px;
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
.body {
  width: 1200px;
  margin: auto;
  padding: 40px 0;
  &::after {
    clear: both;
    display: block;
    content: '';
  }
  .main {
    width: 800px;
    float: left;
    .nodata {
      text-align: center;
      line-height: 100px;
      font-size: 20px;
      color: #666;
    }
    .card {
      width: 100%;
      padding: 30px;
      background-color: #fff;
      margin-top: 20px;
      box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.05);
      &::after {
        clear: both;
        display: block;
        content: '';
      }
      img {
        float: left;
      }
      .text {
        float: left;
        width: calc(100% - 224px);
        padding-left: 20px;
        .name {
          font-size: 16px;
          line-height: 32px;
          font-weight: 700;
          color: #1c1f21;
          cursor: pointer;
          &:hover {
            color: #00a1d6;
          }
        }
        .tag {
          &::after {
            display: block;
            content: '';
            clear: both;
          }
          .float-left {
            float: left;
            line-height: 12px;
            font-size: 12px;
            margin: 10px 20px 20px 0;
            color: #4d555d;
          }
        }
        .introduction {
          line-height: 20px;
          font-size: 14px;
          color: #4d555d;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
  .aisde {
    width: 360px;
    float: right;
    .title {
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 48px;
    }
  }
}
</style>
