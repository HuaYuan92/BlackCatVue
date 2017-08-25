<template>
  <div class="home">
    <div class="meun">
      <Menu :theme="theme" :open-names="['1']" accordion>
        <div class="logo_div">
        </div>
        <Submenu name="1">
          <template slot="title">
            <Icon type="search"></Icon>
            <span class="meun_item">黑名单查询</span>
          </template>
          <router-link to="personlist" append>
            <Menu-item name="1-1"> 个人黑名单查询</Menu-item>
          </router-link>
          <router-link to="entlist" append>
            <Menu-item name="1-2">企业黑名单查询</Menu-item>
          </router-link>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="android-star-half"></Icon>
            查询统计信息
          </template>
          <router-link to="infolist" append>
            <Menu-item name="2-1">统计信息概览</Menu-item>
          </router-link>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="android-folder-open"></Icon>
            已保存黑名单
          </template>
          <router-link to="personhold" append>
            <Menu-item name="3-1">企业已保存黑名单</Menu-item>
          </router-link>
          <router-link to="enthold" append>
            <Menu-item name="3-2">个人已保存黑名单</Menu-item>
          </router-link>
        </Submenu>
      </Menu>
    </div>
    <div class="content">
      <div class="content_top">
        <div class="content_top_title">
          黑猫察机构定制查询系统
        </div>
        <div class="content_top_remind">
          <div></div>
          <div></div>
          <div></div>
            <div class="help" @click="help">
              <Icon type="help" size="16"></Icon>
              <span>帮助</span>

            </div>
          <div>
            <Icon type="android-person" size="16"></Icon>
            <span>{{formInline.name}}</span>

          </div>
          <div></div>
        </div>
      </div>
      <div class="content_bottom">

      </div>


    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'home',
    data () {
      return {
        theme: 'dark'
      }
    },
    methods:{
        help(){
            alert("帮助");
        }

    },
    computed: mapGetters(
      [
        'formInline'
      ]
    ),
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  .home {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .meun {
    flex: 1;
    height: 100%;
    .logo_div {
      width: 100%;
      height: 10%;
      font-size: 20px;
      background: url('../assets/image/logo_b.png') no-repeat center;
      background-size: cover;
      color: #ffffff;

    }
    .ivu-menu {
      width: 100% !important;
      height: 100%;
    }
    .meun_item {
      letter-spacing: 2px;
    }

  }

  .content {
    flex: 7;
    height: 100%;
    .content_top {
      width: 100%;
      height: 10%;
      display: flex;
      .content_top_title {
        flex: 1;
        font-size: 26px;
        text-align: left;
        padding-left: 20px;
        padding-top: 6px;
      }
      .content_top_remind {
        flex: 1;
        display: flex;
        align-items: center;
        div{
          flex:1;
          span{
            display: inline-block;
            font-size:16px;
            padding-left:6px;
            line-height: 16px;
          }
        }
        .help{
          cursor: pointer;
        }

      }
    }
    .content_bottom {
      width: 100%;
      height: 90%;
    }

  }
</style>
