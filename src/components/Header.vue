<template>
<header class="layout-header">
  <div class="w1170 wrap">
    <h1 @click="$router.push('/')">云笔记</h1>
    <el-button class="write-btn" @click="handelwrite">写笔记</el-button>
  </div>
</header>
</template>

<script>
    export default {
        data() {
          return {}
        },
      methods:{
          handelwrite(){
            if(this.$store.state.userInfo.username){
              this.$router.push('/writeNote')
            }else {
              this.$message.warning('只有登录后才能写笔记哦')
            }
          }
      }
    }
</script>

<style scoped lang="scss">
.layout-header {
  height: 50px;
  background: #409eff;
}
  .wrap{
    display: flex;
    justify-content: space-between;

    h1 {
      margin-top: 5px;
      color: #fff;
      font-weight: 400;
      font-size: 30px;
    }

    .write-btn {
      margin-top: 5px;
    }
    /*.el-button{*/
      /*height: 40px;*/
      /*width: 84px;*/
    /*}*/
  }
</style>
