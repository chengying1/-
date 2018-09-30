<template>
    <div class="layout">
      <Header></Header>
      <div>
        <div class="w1170 content">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '@/components/Header.vue'
    export default {
        name: "Layout",
      components:{
          Header
      }
    }
</script>

<style scoped>

</style>
