<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    beforeMount:function () {
      this.$store.dispatch('ReadLocal');
    },

  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "./assets/css/normalize.css";
  @import "../node_modules/iview/dist/styles/iview.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    min-width: 1350px;
    height: 100%;
  }
</style>
