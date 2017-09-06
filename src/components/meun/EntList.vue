<template>
  <div class="box_entlist" key="0">
    <div class="content_box">
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
      <div class="record_num">京ICP备1009-9098 All Rights Reserved</div>
    </div>
  </div>

</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'entlist',
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
<style lang="less" rel="stylesheet/less">
  .box_entlist {
    width: 100%;
    height: 100%;
    background: url("../../assets/image/big-bg.png") no-repeat 0 -80px;
    background-size: cover;
    position: relative;
    .box_title {
      width: 100%;
      padding-top: 160px;
      letter-spacing: 2px;
      .title_h {
        font-size: 48px;
        color: #ffffff;
        text-align: center;
      }

    }
    .content_search {
      position: relative;
      display: flex;
      background: #ffffff;
      box-shadow: 0px 13px 10px 0px rgba(46, 119, 242, 0.40);
      border-radius: 4px;
      width: 1100px;
      height: 60px;
      margin: 80px auto;
      padding-top: 10px;
      .select {
        width: 150px;
        position: relative;
      }
      .ipt {
        width: 830px;
        padding-left: 40px;
        position: relative;
      }
      .ipt:before {
        position: absolute;
        content: '';
        border: 1px solid #ced0d4;
        width: 1px;
        height: 23px;
        left: 20px;
        top: 16%;
        z-index: 2;

      }
      .button {
        width: 120px;
        margin-top: -10px;
      }
    }
    .ivu-select-selection {
      border: 1px solid #fff !important;
    }
    .ivu-select-visible .ivu-select-selection {
      box-shadow: none !important;
    }
    .ivu-select-selected-value {
      font-size: 16px !important;
      color: #6a6f83;
    }
    .ivu-input {
      border-color: #fff;
      font-size: 16px;
      color: #353842;
    }
    .ivu-input:focus {
      box-shadow: none;
    }
    .ivu-btn-large {
      background-image: linear-gradient(-179deg, #5f96ff 0%, #2e78f2 100%);
      border-radius: 0px 4px 4px 0px;
      width: 120px;
      height: 60px;
      .icon {
        vertical-align: top;
        padding-right: 4px;
      }
    }
    .ivu-select-item-selected, .ivu-select-item-selected:hover {
      color: #6a6f83;
      background: #fff;

    }
    .ivu-select-item {
      font-size: 16px !important;
    }
    .ivu-select-item:hover {
      color: #5f96ff !important;
      background: #fff;
    }
    .record_num {
      width: 100%;
      position: absolute;
      bottom: 50px;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0.2px;
      text-align: center;
    }
  }


</style>
