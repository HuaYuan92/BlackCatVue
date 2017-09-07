<template>
  <div class="box">
    <div class="box_entlist">
      <div class="box_title">
        <div class="title_h">查尽天下失信行为</div>
      </div>
      <div class="content_search">
        <Select size="large" class="select" :value="value_s" @on-change="select_change">
          <Option value="name" key="0">按名称查询</Option>
          <Option value="code" key="1">按代码查询</Option>
        </Select>
        <Input v-model="search.keyword" :placeholder="p_h" size="large" class="ipt"> </Input >
        <Button type="primary" size="large" @click="searchipt" class="button">
          <Icon type="ios-search" size="20" class="icon"></Icon>
          点击搜索
        </Button>
      </div>
    </div>
    <div class="box_result">
      <div class="result_title">搜索结果</div>
      <div class="result_detail">
        <div class="detail_item item1">1</div>
        <div class="detail_item item2">1</div>
        <div class="detail_item item3">1</div>
        <div class="detail_action">1</div>
      </div>
    </div>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'entresult',
    data: function () {
      return {
        value_s: 'name',
        p_h: '输入所要查询的公司全称',
      }
    },
    computed: mapGetters(
      [
        'search'
      ]
    ),
    methods: {
      select_change(val){
        this.value_s = val;
        if (val == 'name') {
          this.p_h = '输入所要查询的公司全称'
        } else {
          this.p_h = '输入所要查询的公司代码'
        }
      },
      searchipt(){
        if (this.value_s == 'name') {
          this.$store.dispatch('SearchName');
        } else {
          this.$store.dispatch('SearchCode');
        }

      },
    },
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .box_entlist {
    height: 330px;
    background-position: 0 92%;
    .box_title {
      padding-top: 56px;
    }
    .content_search {
      margin-top: 40px;
    }

  }

  .box_result {
    width: 70%;
    min-height: 400px;
    min-width: 1000px;
    margin: 0 auto;
    .result_title{
      font-size:16px;
      color:#353842;
      letter-spacing:0px;
      text-align:left;
      margin-top:30px;
      margin-bottom:30px;
    }
    .result_detail{
      box-shadow:0px 3px 9px 0px rgba(46,119,242,0.18);
      width:100%;
      height:160px;
      display: flex;
      text-align: left;
      .detail_item{
        flex:2;

      }
      .detail_action{
        flex: 1;
      }
    }

  }


</style>
