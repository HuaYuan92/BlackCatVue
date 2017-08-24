<template>
  <div id="app">
    <img src="./assets/image/logo.png" class="logo">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
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
    .logo {
      margin-top: 60px;
    }

  }

  html {
    text-align: center;
  }

  body {
    width: 100%;
    min-width: 800px;
  }
</style>
