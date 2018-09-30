<template>
    <div class="right-box">
      <div class="login-box" v-if="!$store.state.userInfo.username">
        <div class="item">
          <input type="text" placeholder="邮箱" v-model="formData.email">
        </div>
        <div class="item">
          <input type="password" placeholder="密码" v-model="formData.password" @keyup.enter="handleLogin">
        </div>
        <div class="item">
          <el-button type="primary" class="_el-btn" @click="handleLogin">
            登陆
          </el-button>
        </div>
        <div class="item">
          <el-button class="_el-btn" @click="$router.push('/region')">
            注册
          </el-button>
        </div>
      </div>

      <div class="user-box" v-else>
        <div class="user-box-item user-icon">
          <img :src=$store.state.userInfo.avatar>
        </div>
        <div class="name-item">
          萌新：{{$store.state.userInfo.username}}
        </div>
        <div class="email-item">
          email:{{$store.state.userInfo.email}}
        </div>
        <div>
          <el-button type="warning" style="width: 100%;margin-top: 10px;" @click="handelLogout">
            退出登录
          </el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            formData:{
              email:'',
              password:'',
            }
          }
        },
      methods:{
          handleLogin(){
            this.$axios.post('/login',this.formData).then(res =>{
              if(res.code == 200){
                console.log(res)

                this.$store.commit('CHANGE_userInfo',res.userData)
                this.$message.success(res.msg)
              }
            })
          },
        handelLogout(){
            this.$axios.get('/logout').then(res => {
              let userInfo = {
                avatar:'',
                email:'',
                username:''
              }
              if(res.code == 200){
                this.$message.success(res.msg)
                this.$store.commit('CHANGE_userInfo', userInfo)
                this.$router.push('/index')
              }else {
                this.$store.commit('CHANGE_userInfo', userInfo)
                this.$message.info('登陆过期')
              }
            })
        }
      }
    }
</script>

<style scoped lang="scss">
  .right-box {
    box-sizing: border-box;
    width: 360px;
    background: #fff;
    border-radius: 4px;
    padding: 21px 30px;
  }
.item{
  margin-top: 30px;
}
  ._el-btn {
    width: 100%;
  }
  input{
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 14px;
    box-sizing: border-box;
    outline: none;
  }

  .user-box {
    padding-top: 30px;
    .user-icon {
      text-align: center;
      img{
        width: 100px;
        height: 100px;
      }
    }
    .name-item,.email-item {
      text-align: center;
      margin-top: 20px;
      font-size: 16px;
      color: #333;
      font-weight: 400;
      line-height: 36px;
    }
  }
</style>
