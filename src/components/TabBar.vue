<template>
  <div class="tabbar">
    <router-link to="/movie" class="item" tag="section">
      <span class="iconfont icon-dianying"></span>
      <span>电影</span>
    </router-link>
    <router-link to="/cinema" class="item" tag="section">
      <span class="iconfont icon-yingyuan"></span>
      <span>影院</span>
    </router-link>
    <router-link to="/mine" class="item" tag="section">
      <span class="iconfont icon-wode"></span>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "TabBar"
};
</script>
<style lang="scss" scoped>
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 0.01rem solid #d8d8d8;
  display: flex;
  justify-content: space-around;
  padding: 0.05rem 0;
  background: #fff;
  .item {
    flex: 1;
    text-align: center;
    font-size: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.router-link-active {
      color: #f03d37;
    }
    span:nth-of-type(1) {
      font-size: 0.25rem;
      padding-bottom: 0.03rem;
    }
    span:nth-of-type(2) {
      font-size: 0.1rem;
    }
  }
}
</style>

