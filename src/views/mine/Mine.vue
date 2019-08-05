<template>
  <div class="movie">
    <Hh title="个人中心"></Hh>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Hh from "../../components/Hh";
import TabBar from "../../components/TabBar";
export default {
  name: "Mine",
  components: {
    Hh,
    TabBar
  }
};
</script>
<style lang="scss" scoped>
</style>
