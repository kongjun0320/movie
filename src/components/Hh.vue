<template>
  <div class="hh">
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
export default {
  name:'Hh',
   props:{
    title:{
      type:String
    }
  }
}
</script>
<style lang="scss" scoped>
  .hh{
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    background: #e54847;
    text-align: center;
    h1{
      font-size: .18rem;
      color: #fff;
    }
  }
</style>

