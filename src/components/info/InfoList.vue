<template>
  <div class="box">
    <div class="content_box">
      <div class="tab">
        <span class="title"> 黑猫察使用数据统计</span>
        <Select style="width:200px;margin-top: -3px;" size="large" v-model="search.time" @on-change="select1">
          <Option v-for="item in select" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

      </div>
      <div class="box_card">
        <MyCard :num="t.num0" string="查询企业次数" class="card_detail card0" key="0"></MyCard>
        <MyCard :num="t.num1" string="命中企业次数" class="card_detail card1" key="1"></MyCard>
        <MyCard :num="t.num2" string="查询个人次数" class="card_detail card2" key="2"></MyCard>
        <MyCard :num="t.num3" string="命中个人次数" class="card_detail card3" key="3"></MyCard>
        <MyCard :num="t.num4" string="总命中次数" class="card_detail card4" key="4"></MyCard>
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
    beforeMount:function () {
      this.$store.dispatch('SelectTime');
    },
    mounted: function () {
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
      }
    },
    computed: mapGetters(
      [
        'search',
        'option',
        't'
      ]
    ),
    methods: {
      select1(){
        this.$store.dispatch('SelectTime');

      }

    },
  }

</script>
<style scoped lang="less" rel="stylesheet/less">
  .box {
    width: 1200px;
    margin: 0 auto;
    background-color: #f2f2f2;
    .title {
      text-align: left;
      font-size: 16px;
      height: 56px;
      line-height: 56px;
      color:#353842;
    }
    .content_box {
      width: 100%;
      min-height: 800px;
      background-color: #fff;
      padding-bottom: 40px;
      .box_card {
        display: flex;
        justify-content: space-between;
        padding: 20px ;
        .card0 {
          background-image: url("../../assets/image/card0.png");
        }
        .card1 {
          background-image: url("../../assets/image/card1.png");
        }
        .card2 {
          background-image: url("../../assets/image/card2.png");
        }
        .card3 {
          background-image: url("../../assets/image/card3.png");
        }
        .card4 {
          background-image: url("../../assets/image/card4.png");
        }
        .card_detail {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      }
      #echarts {
        width: 1240px;
        height: 500px;
        margin: 20px 0;
        margin-left:-20px;
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
  .ivu-select-item-selected, .ivu-select-item-selected:hover{
    background: rgba(165, 205, 255, 0.9);
  }


</style>
