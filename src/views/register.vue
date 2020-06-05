<template>
  <div class="signInPage">
    <div class="signInPage-form">
      <div class="signInPage-form-content">
        <h4>Register</h4>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
          <el-form-item prop="username">
            <el-input type="text" v-model="ruleForm.username" placeholder="username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              placeholder="password"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password_again">
            <el-input
              type="password"
              v-model="ruleForm.password_again"
              placeholder="confirm password"
            ></el-input>
          </el-form-item>
          <el-form-item prop="verification">
            <el-input v-model="ruleForm.verification" placeholder="verification code（666）"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Register</el-button>
          </el-form-item>
        </el-form>
        <div><a class="form-aisde" @click="router">Already have an account</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'

export default {
  data() {
    var checkusername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('用户名不能为空'))
      } else if (value.length < 6) {
        callback(new Error('用户名不能少于6位'))
      } else if (/^\w+$/.test(value)) {
        callback()
      } else {
        callback(new Error('格式不正确'))
      }
    }
    var checkpassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 8) {
        callback(new Error('密码不能少于8位'))
      } else {
        callback()
      }
    }
    var checkpassword_again = (rule, value, callback) => {
      if (value === this.ruleForm.password && this.ruleForm.password !== '') {
        callback()
      } else {
        callback(new Error('两次输入密码不一致'))
      }
    }
    var checkverification = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (value !== '666') {
        callback(new Error('验证码不正确'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: '',
        password_again: '',
        verification: '',
      },
      rules: {
        username: [{ validator: checkusername, trigger: 'change' }],
        password: [{ validator: checkpassword, trigger: 'change' }],
        password_again: [{ validator: checkpassword_again, trigger: 'change' }],
        verification: [{ validator: checkverification, trigger: 'change' }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let user = { name: this.ruleForm.username, password: this.ruleForm.password }
          agent.post('/user/register', user).then(res => {
            if (res.status === 1) {
              this.$message({
                message: '注册成功',
                type: 'success',
              })
              this.$router.push('/sign_in')
            } else {
              this.$message({
                message: '用户名已存在',
                type: 'error',
              })
              Object.keys(this.ruleForm).forEach(key => (this.ruleForm[key] = ''))
            }
          })
        } else {
          return false
        }
      })
    },
        router(){
      this.$router.push('/sign_in')
    }
  },
}
</script>

<style lang="scss" scoped>
.signInPage {
  background: url('~@/assets/sign_in/bg.jpg') no-repeat;
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #d7e4bd;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100vh - 80px);
    opacity: 0.6;
    background: url('~@/assets/sign_in/bg.jpg') 50% 50% no-repeat;
    animation: bgimg 25s linear infinite;
    -webkit-animation: bgimg 25s linear infinite; /*Safari and Chrome*/
  }
  // .signInPage-info,
  .signInPage-form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // .signInPage-info {
  //   font-weight: 500;
  //   font-size: 22px;
  //   line-height: 1.5;
  //   text-align: center;
  // }
  .signInPage-form-content {
    z-index: 1;
    width: 320px;
    text-align: center;
    h4 {
      margin-bottom: 40px;
      display: inline-block;
      padding: 0 6px 6px;
      font-weight: 500;
      font-size: 22px;
      text-align: center;
      letter-spacing: 4px;
      border-bottom: 2px solid #111;
    }
    .el-button {
      margin-top: 40px;
      width: 180px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      border-radius: 50px;
      border: 0px;
      box-shadow: rgba(152, 22, 244, 0.19) 0px 5px 10px 2px;
      padding: 0;
      span {
        display: block;
        height: 48px;
        line-height: 48px;
      }
    }
    .form-aisde {
      color: rgb(153, 153, 153);
      font-size: 12px;
      margin: 40px 20px;
    }
  }
}
@keyframes bgimg {
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
