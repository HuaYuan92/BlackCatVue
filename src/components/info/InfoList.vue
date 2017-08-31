<template>
  <div class="box">
    <div class="title"> 查询信息统计</div>
    <div class="content_box">
      <div class="tab">
        <span class="title"> 黑猫察使用数据统计</span>
        <Select  style="width:200px" size="small" v-model="search.time" @on-change="select1">
          <Option v-for="item in select" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

      </div>
      <div class="box_card">
        <MyCard v-for="(t,index) in value" :num="t.num" :string="t.string" class="card_detail" :key="index"></MyCard>
      </div>
      <div id="echarts"></div>

    </div>
  </div>

</template>
<script>
  import {mapGetters} from 'vuex'
  let echarts = require('echarts');
  export default {
    name: 'infolist',
    mounted:function () {
      var myChart = echarts.init(document.getElementById('echarts'));
      myChart.setOption(this.option);
    },
    updated: function () {
      var myChart = echarts.init(document.getElementById('echarts'));
      myChart.setOption(this.option);
    },
    data: function () {
      return {
        select: [
          {
            value: '1',
            label: '近一个月'

          },
          {
            value: '6',
            label: '近半年'

          },
          {
            value: '12',
            label: '近一年'

          },
        ],
        value: [
          {
            string: '查询企业次数',
            num: '1384'
          },
          {
            string: '命中企业次数',
            num: '684'
          },
          {
            string: '查询个人次数',
            num: '2451'
          },
          {
            string: '命中个人次数',
            num: '1131'
          },
          {
            string: '总命中次数',
            num: '1815'
          },
        ]
      }
    },
    computed: mapGetters(
      [
        'search',
        'option',
      ]
    ),
    methods: {
      searchname(){
        this.$store.dispatch('SearchName');
      },
      searchcode(){
        this.$store.dispatch('SearchCode');
      },
      select1(val){
        this.$store.dispatch('SelectTime');

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
      .box_card {
        display: flex;
        justify-content: space-around;
        padding-top: 20px;
        .card_detail {

        }
      }
      #echarts {
        width: 96%;
        height: 70%;
        margin: 20px auto;
      }
    }
  }

  .tab {
    text-align: left;
    padding-left: 2%;
    padding-top: 10px;
    .title {
      font-size: 16px;
      font-weight: 500;
      padding-right: 20px
    }
  }


</style>
