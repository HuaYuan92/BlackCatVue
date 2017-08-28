<template>
  <div class="box">
    <div class="title">企业黑名单查询</div>
    <div class="content_box">
      <div class="box_title">
        <h1>黑猫察</h1>
        <h2>查尽天下失信行为</h2>
      </div>
      <div class="content_search">
        <div class="search_name">
          <Input v-model="search.entname" placeholder="请输入公司全称" style="width: 300px;" size="large"> </Input>
          <br>
          <Button type="primary" size="large" style="width: 300px;margin-top: 20px;" @click="searchname">点击搜索</Button>
        </div>
        <div class="search_code">
          <Input v-model="search.entcode" placeholder="请输入公司代码" style="width: 300px" size="large"> </Input>
          <br>
          <Button type="primary" size="large" style="width: 300px;margin-top: 20px;" @click="searchcode">点击搜索</Button>
        </div>


      </div>
    </div>
  </div>

</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'entlist',
    data: function () {
      return {
        value: '1212'
      }
    },
    computed: mapGetters(
      [
        'search'
      ]
    ),
    methods: {
      searchname(){
        this.$store.dispatch('SearchName');
      },
      searchcode(){
        this.$store.dispatch('SearchCode');
      }

    },
  }

</script>
<style scoped lang="less" rel="stylesheet/less">
  .box {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    .title {
      text-align: left;
      padding-left: 20px;
      font-size: 16px;
      height: 36px;
      line-height: 36px;
    }
    .content_box {
      width: 96%;
      height: 90%;
      background-color: #fff;
      margin: 0 auto;
      .box_title {
        width: 100%;
        padding-top: 40px;
        letter-spacing: 2px;
        h1 {
          font-size: 32px;
        }
        h2 {
          margin-top: 2px;
          font-size: 24px;
        }
      }
      .content_search {
        padding-top: 80px;
        position: relative;
        display: flex;
        .search_name {
          flex: 1;
        }
        .search_code {
          flex: 1;
        }
      }
      .content_search:before {
        content: '或者';
        position: absolute;
        top: 110px;
        left: 48.4%;
        font-size: 20px;
        font-weight: 600;
      }

    }
  }


</style>
