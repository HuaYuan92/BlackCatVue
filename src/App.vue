<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    beforeCreate:function () {
      this.$store.dispatch('ReadLocal');
    },

  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "./assets/css/normalize.css";
  @import "../node_modules/iview/dist/styles/iview.css";

  #app {
    font-family: PingFangSC-Regular,'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    .logo {
      margin-top: 60px;
    }

  }

  html {
    text-align: center;
    height: 100%;

  }

  body {
    width: 100%;
    min-width: 1400px;
    height: 100%;
    min-height:740px;
  }
  .ivu-poptip-body {
    text-align: left !important;
  }
  .ivu-table:after{
    background-color: #fff !important;
  }

</style>
