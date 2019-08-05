<template>
  <div class="movie">
    <Hh title="猫眼电影"></Hh>
    <section class="menu-box">
      <router-link to="/movie/city"  tag="section" class="city-name">
        <span>大连</span>
        <i class="iconfont icon-lower-triangle"></i>
      </router-link>
      <section class="navigation">
        <router-link to="/movie/nowPlaying" tag="span">正在热映</router-link>
        <router-link to="/movie/comingSoon" tag="span">即将上映</router-link>
      </section>
      <router-link to="/movie/search" tag="section" class="search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </section>
    <keep-alive>
      <router-view />
    </keep-alive>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Hh from "../../components/Hh";
import TabBar from "../../components/TabBar";
export default {
  name: "Movie",
  components: {
    Hh,
    TabBar
  }
};
</script>
<style lang="scss" scoped>
.movie {
  .menu-box {
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 0.44rem;
    font-size: 0.15rem;
    .city-name {
      color: #666;
    }
    .navigation {
      span {
        color: #666;
        font-weight: 700;
        padding: 13px 20px;
        &.router-link-active {
          color: #e54847;
          border-bottom: 1px solid #e54847;
        }
      }
    }
    .search {
      i {
        font-size: 0.25rem;
        color: #e54847;
      }
    }
  }
}
</style>
