<template>
    <div class="article-list">
      <router-link to="#"  class="item">
      <div class="item-top">
        <div class="img-wrap">
          <img src="/static/img/icon.jpg">
        </div>
        <div class="item-msg">
          <div class="row-one">
            <span class="author-name">
              莫言
            </span>
            <h2>
              红高粱
            </h2>
          </div>
          <div class="row-two">
            <span class="row-item">
              浏览：998
            </span>
            <span class="row-item">
              回复：998
            </span>
            <span class="row-item">
              分类：998
            </span>
          </div>
        </div>
      </div>
      <div class="item-content">哈哈~嗝~</div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "ArticleList"
    }
</script>

<style scoped lang="scss">
  .article-list {
    box-sizing: border-box;
    margin-top: 30px;
    border-radius:  4px;
    padding: 2px 20px;
    background: #fff;

  }

  .item {
    text-decoration: none;
    color: #333;
    display: block;
    padding-bottom: 20px;
    margin-top: 20px;
  }

  .item-top {
    display: flex;

    .img-wrap {
      margin-right: 15px;
      width: 80px;
      height: 80px;
      img {
        display: block;
        width: 100%;
      }
    }
  }

  .row-one {
    display: flex;

    .author-name {
      color: #409eff;
      font-weight: 700;
      padding-right: 8px;
      border-right: 1px solid #000;
    }

    h2 {
      font-size: 18px;
      font-weight: 700;
      margin-left: 15px;
    }
  }

  .item-msg {
    width: 100%;
  }

  .row-two {
    box-sizing: border-box;
    padding: 4px 8px;
    margin-top: 15px;
    border-radius: 4px;
    width: 100%;
    background: #bbb;

    .row-item {
      font-size: 14px;
      color: #333;
      font-weight: 700;
      margin-right: 30px;
    }
  }
</style>
