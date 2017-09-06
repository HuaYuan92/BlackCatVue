<template>
  <div class="home">
    <div class="meun">
      <div class="logo_div">
        <div class="logo_img"></div>
        <div class="logo_title"></div>
        <div class="logo_text">
          机构定制版
        </div>
      </div>
      <Menu theme="primary" accordion mode="horizontal">

        <Submenu name="1">
          <template slot="title">
            <span class="meun_item">黑名单查询</span>
          </template>
          <Menu-item name="1-1">
            <router-link to="/home/entlist" class="router_link">
              企业黑名单查询
            </router-link>
          </Menu-item>
          <Menu-item name="1-2">
            <router-link to="/home/personlist" class="router_link">
              个人黑名单查询
            </router-link>
          </Menu-item>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            查询统计信息
          </template>
          <Menu-item name="2-1">
            <router-link to="/home/infolist" class="router_link">
              统计信息概览
            </router-link>
          </Menu-item>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            已保存黑名单
          </template>
          <Menu-item name="3-1">
            <router-link to="/home/enthold" class="router_link">
              企业已保存黑名单
            </router-link>
          </Menu-item>
          <Menu-item name="3-2">
            <router-link to="/home/personhold" class="router_link">
              个人已保存黑名单
            </router-link>
          </Menu-item>
        </Submenu>
      </Menu>
      <div class="user_div">
        <span @click="quit">{{logininfo.name}},退出</span>

      </div>
    </div>
    <div class="content">
        <router-view></router-view>

      </div>


    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'home',
    methods: {
      quit(){
        localStorage.removeItem('user');
        window.location.reload()
      }

    },
    computed: mapGetters(
      [
        'logininfo'
      ]
    ),
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  .home {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .meun {
    height: 80px;
    width: 100%;
    padding-top: 8px;
    position: absolute;
    background-image: url('../assets/image/big-bg.png');
    background-size: cover;
    background-position: top;
    .logo_div {
      width: 30%;
      min-width: 300px;
      position: absolute;
      left: 0;
      font-size: 20px;
      color: #ffffff;
      padding-top: 10px;
      text-align: left;
      .logo_img {
        display: inline-block;
        width: 42px;
        height: 42px;
        margin-left: 16%;
        background: url('../assets/image/login.png') no-repeat center;
        background-size: contain;
      }
      .logo_title {
        display: inline-block;
        width: 80px;
        height: 42px;
        margin-left: 1%;
        background: url('../assets/image/text.png') no-repeat center;
        background-size: contain;
      }
      .logo_text {
        display: inline-block;
        border: 1px solid #ffffff;
        border-radius: 100px;
        margin-left:1%;
        width: 98px;
        height: 26px;
        line-height: 23px;
        font-size:14px;
        text-align: center;
        vertical-align: top;
        margin-top:10px;
      }

    }
    .ivu-menu {
      width: 440px !important;
      margin: 0 auto;
      height: 100%;
    }
    .ivu-menu-primary {
      background: none;
    }
    .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-submenu:hover {
      background: none;
    }
    .meun_item {
      font-size: 15px;
      color: #ffffff;
      line-height: 32px;
      text-align: left;
      padding-right: 4px;
    }
    .router_link {
      color: inherit;
      display: inline-block;
      cursor: pointer;
      width: 100%;
    }

  }

  .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 0;
  }
  .user_div{
    position: absolute;
    right: 0;
    top: 0;
    width: 20%;
    height: 32px;
    min-width: 200px;
    background: url('../assets/image/user.png') no-repeat 20% 50%;
    margin-top: 24px;
    background-size: contain;
    text-align: left;
    span{
      display: inline-block;
      margin-left: 120px;
      margin-top:4px;
      font-size:14px;
      color:#ffffff;
      cursor: pointer;
    }
  }

  .content {
    height: 100%;
    padding-top: 80px;
  }

  .router-link-active {
    color: #5F96FF !important;
  }
  .ivu-menu-item{
    cursor: default !important;
  }
  .meun .router_link{
    color: #666666;
  }
</style>
