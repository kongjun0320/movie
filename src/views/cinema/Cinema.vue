<template>
  <div class="movie">
    <Hh title="影院"></Hh>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Hh from "../../components/Hh";
import TabBar from "../../components/TabBar";
export default {
  name: 'Cinema',
  components: {
    Hh,
    TabBar
  }
}
</script>
<style lang="scss" scoped>
</style>
