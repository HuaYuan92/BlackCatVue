<template>
  <div class="box">
    <div class="title"> 查询信息统计</div>
    <div class="content_box">
      <div class="box_card">
        <MyCard v-for="(t,index) in value" :num="t.num" :string="t.string" class="card_detail" :key="index"></MyCard>
      </div>

    </div>
  </div>

</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'infolist',
    data: function () {
      return {
        value: [
          {string:'查询企业次数',
            num:'1384'
          },
          {string:'命中企业次数',
            num:'684'
          },
          {string:'查询个人次数',
            num:'2451'
          },
          {string:'命中个人次数',
            num:'1131'
          },
          {string:'总命中次数',
            num:'1815'
          },
        ]
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
  .box{
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    .title{
      text-align: left;
      padding-left: 20px;
      font-size:16px;
      height: 36px;
      line-height: 36px;
    }
    .content_box{
      width: 96%;
      height: 90%;
      background-color: #fff;
      margin: 0 auto;
      .box_card{
        display: flex;
        justify-content: space-around;
        padding-top:20px;
        .card_detail{

        }
      }
    }
  }



</style>
