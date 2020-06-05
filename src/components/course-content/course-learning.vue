<template>
  <div class="container">
    <div class="learning">
      <div class="learning-btn" @click="isopen">
        <span v-if="!isBuy">立即购买</span>
        <span v-if="isBuy">已购买</span>
      </div>
      <div class="learning-info">
        <p>课程须知</p>
        <div class="you_need_know"><slot name="you_need_know"></slot></div>
        <p>老师告诉你能学到什么？</p>
        <div class="you_can_learning"><slot></slot></div>
      </div>
    </div>
    <el-dialog title="立即报名" :visible.sync="dialogFormVisible" class="dialog" width="400px">
      <div class="img" v-if="showQR">
        <p>扫描二维码获取购买代码</p>
        <img src="@/assets/QMResources/qr.png" alt width="200" height="200" />
        <div class="form">
          <el-input
            v-model="buyCode"
            autocomplete="off"
            placeholder="请输入购买代码"
            class="input"
          ></el-input>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitBuy">提交</el-button>
        </div>
      </div>
      <div v-if="!showQR">
        <el-form :model="ruleForm" ref="phoneNumber" :rules="rules">
          <el-form-item prop="phoneNumber">
            <el-input
              v-model="ruleForm.phoneNumber"
              autocomplete="off"
              placeholder="请输入你的手机号码"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('phoneNumber')">提交</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'

export default {
  data() {
    var validatephoneNumber = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入你的手机号码'))
      } else {
        if (this.ruleForm.phoneNumber.match(/^[1][3,4,5,7,8,9][0-9]{9}$/)) {
          callback()
        }
        callback(new Error('手机号码格式不正确'))
      }
    }
    return {
      // showQR: true,
      buyCode: '',
      dialogFormVisible: false,
      ruleForm: {
        phoneNumber: '',
      },
      rules: {
        phoneNumber: [{ validator: validatephoneNumber, trigger: 'blur' }],
      },
    }
  },
  computed: {
    isBuy() {
      let a = this.$store.state.userInfo.purchaseList
      return a ? (a.find(item => item.id === this.$route.params.id) ? true : false) : false
    },
    showQR() {
      return this.$store.state.userInfo.phoneNumber ? true : false
    },
  },
  methods: {
    isopen() {
      if (!this.isBuy) {
        if (localStorage.getItem('user')) {
          this.ruleForm.phoneNumber = ''
          this.dialogFormVisible = true
        } else {
          this.$router.push('/sign_in')
        }
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          agent.post('/user/phone', { phoneNumber: this.ruleForm.phoneNumber }).then(res => {
            if (res.status === 0) {
              localStorage.clear()
              this.$store.commit('toUser', {})
            }
          })
        } else {
          return false
        }
      })
    },
    submitBuy() {
      if (this.buyCode === '20190101') {
        alert('购买成功')
        agent.post('/user/purchaseList', { id: this.$route.params.id }).then(res => {
          if (res.status === 0) {
            localStorage.clear()
            this.$store.commit('toUser', {})
          } else {
            this.$store.commit('toUserInfo', res.data[0])
          }
          this.buyCode = ''
        })
        this.dialogFormVisible = false
      } else {
        this.buyCode = ''
        alert('无效购买')
      }
    },
    // open() {
    //   this.$prompt('请输入你的手机号', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     inputPattern: /^[1][3,4,5,7,8,9][0-9]{9}$/,
    //     // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    //     inputErrorMessage: '手机格式不正确',
    //   })
    //     .then(({ value }) => {
    //       if (localStorage.getItem('user')) {
    //         agent.post('/user/email', { email: value }).then(res => {
    //           if (res.status === 0) {
    //             localStorage.clear()
    //             this.$store.commit('toUser', {})
    //           }
    //         })
    //       } else {
    //         agent
    //           .post('/fingerprint/email', {
    //             userId: localStorage.getItem('fingerprintId'),
    //             email: value,
    //           })
    //           .then(res => {
    //             console.log(res)
    //           })
    //       }
    //     })
    //     .catch(() => {})
    // },
  },
  // created() {
  //   if (localStorage.getItem('user')) {
  //     agent.get('/user/userInfo').then(res => {
  //       if(res.purchaseList.find(item => item.id === this.$route.params.id)){
  //         this.isBuy = true
  //       }
  //       if(res.phoneNumber){
  //         this.showQR = true
  //       }
  //     })
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.dialog {
  // text-align: center;
  .img {
    text-align: center;
    img {
      padding: 4px 0;
    }
    .form {
      width: 200px;
      margin: auto;
      text-align: right;
      .input {
        padding-bottom: 4px;
      }
    }
  }
  .dialog-footer {
    text-align: right;
  }
}
.learning {
  width: 360px;
  padding: 24px 32px 32px;
  margin-bottom: 32px;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
  border-radius: 12px;
  .learning-btn {
    -weibkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    height: 48px;
    font-size: 16px;
    text-align: center;
    line-height: 24px;
    border-radius: 24px;
    background-color: #f20d0d;
    color: #fff;
    cursor: pointer;
    span {
      line-height: 48px;
    }
    &:hover {
      background: #c20a0a;
    }
  }
  .learning-info {
    padding-top: 24px;
    p {
      margin-bottom: 6px;
      font-weight: 700;
      font-size: 14px;
    }
    .you_need_know {
      font-size: 12px;
      line-height: 24px;
      color: #545c63;
      // white-space: pre-line;
      margin-bottom: 24px;
    }
    .you_can_learning {
      font-size: 12px;
      line-height: 24px;
      color: #545c63;
      // white-space: pre-line;
    }
  }
}
</style>
