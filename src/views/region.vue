<template>
    <div class="region">
      <h2 class="title">
        新用户注册
      </h2>
      <div class="item">
        <input type="text " placeholder="用户名" v-model="formData.username">
      </div>
      <div class="item">
        <input type="text " placeholder="邮箱" v-model="formData.email">
      </div>
      <div class="item">
        <input type="password" placeholder="密码" v-model="formData.password" @keyup.enter.native="handleRegister">
      </div>
      <div class="item">
        <el-button type="primary" class="_el-btn" @click="handleRegister">
          注册
        </el-button>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            formData:{
              username:'',
              email:'',
              password:''
            }
          }
        },
      methods:{
        handleRegister(){
          this.$axios.post('/user', this.formData).then(res =>{
            if(res.code === 200){
              this.$message.success(res.msg)
              setTimeout(()=>{this.$router.push('/index')},500)
            }else {
              this.$message.error(res.msg)
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
.region{
  width: 714px;
  margin: 100px auto 0;
  border-radius: 6px;
  background: #fff;
  color: #333;
  padding-top: 30px;
  padding-bottom: 50px;

  h2{
    text-align: center;
    font-weight: 400;
    color: #333;
  }
}
  .item{
    width: 390px;
    box-sizing: border-box;
    margin: 30px auto 0;

    ._el-btn{
      width: 100%;
    }

    input{
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #f1f1f1;
      border-radius: 4px;
      padding: 14px;
      outline: none;
    }
  }
</style>
