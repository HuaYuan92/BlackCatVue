<template>
  <div class="box">
    <div class="box_entlist" key="1-2">
      <div class="box_title">
        <div class="title_h">查尽天下失信行为</div>
      </div>
      <div class="content_search">
        <Select size="large" class="select" :value="value_s" @on-change="select_change">
          <Option value="2" key="0">两要素查询</Option>
          <Option value="3" key="1">三要素查询</Option>
        </Select>
        <div class="ipt_box">
          <Input v-model="search.personname" placeholder="输入姓名" size="large" key="0" class="ipt"> </Input>
          <Input v-model="search.personcord" placeholder="输入身份证号" size="large" key='1' :maxlength='18'
                 class="ipt"> </Input>
          <Input v-model="search.personphone" placeholder="输入手机号" size="large" key='2' :maxlength='11' class="ipt"
                 v-show="phone"> </Input>
        </div>

        <Button type="primary" size="large" @click="searchipt" class="button">
          <Icon type="ios-search" size="20" class="icon"></Icon>
          点击搜索
        </Button>
      </div>
    </div>
    <div class="box_result">
      <div class="result_title">搜索结果</div>
      <div class="result_detail" v-if="personresult.show">
        <div class="detail_item item1">
          <div class="item_title">
            姓名
          </div>
          <div class="item_content">
            {{personresult.sum.name}}
          </div>
        </div>
        <div class="detail_item item2">
          <div class="item_title">
            身份证号
          </div>
          <div class="item_content">
            {{personresult.sum.code}}
          </div>
        </div>
        <div class="detail_item item3">
          <div class="item_title">
            失信标签数
          </div>
          <div class="item_num">
            {{personresult.sum.num}}
          </div>
        </div>
        <div class="detail_action">
          <router-link to="/home/persondetail">
            <div class="bt_action">
              查看详情
            </div>
          </router-link>
          <Poptip
            confirm
            title="确定保存这条黑名单吗？"
            placement="top-end"
            @on-ok="ok"
          >
            <div class="bt_action">
              保存
            </div>
          </Poptip>


        </div>
      </div>
      <div class="result_no" v-else></div>
    </div>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'personresult',
    data: function () {
      return {
        value_s: '2',
        phone: false
      }
    },
    computed: mapGetters(
      [
        'search',
        'personresult'
      ]
    ),
    methods: {
      select_change(val){
        this.value_s = val;
        if (val == '2') {
          this.phone = false;
        } else {
          this.phone = true;

        }
      },
      searchipt(){
        if (this.value_s == '2') {
          this.$store.dispatch('SearchTwo');
        } else {
          this.$store.dispatch('SearchThree');
        }

      },
      ok(){
        this.$store.commit('hold', 'person');
      }
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
    .result_title {
      font-size: 16px;
      color: #353842;
      letter-spacing: 0px;
      text-align: left;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .result_detail {
      box-shadow: 0px 3px 9px 0px rgba(46, 119, 242, 0.18);
      width: 100%;
      min-height: 160px;
      display: flex;
      text-align: left;
      .item1 {
        background-image: url('../../assets/image/name.png');
      }
      .item2 {
        background-image: url('../../assets/image/cord.png');
      }
      .item3 {
        background-image: url('../../assets/image/num.png');
      }
      .detail_item {
        flex: 2;
        position: relative;
        padding: 40px 130px 30px 40px;
        background-repeat: no-repeat;
        background-position: 90% 50%;
        .item_title {
          font-size: 14px;
          color: #9094a4;
          line-height: 18px;
          text-align: left;
        }
        .item_content {
          margin-top: 36px;
          width: 100%;
          font-size: 16px;
          color: #353842;
          line-height: 18px;
          text-align: left;
        }
        .item_num {
          margin-top: 36px;
          background-image: linear-gradient(0deg, #5f96ff 0%, #2e78f2 100%);
          box-shadow: 0px 6px 8px 0px rgba(46, 119, 242, 0.24);
          border-radius: 100px;
          width: 74px;
          height: 24px;
          text-align: center;
          font-size: 16px;
          color: #ffffff;
          line-height: 24px;
        }

      }
      .detail_item:after {
        position: absolute;
        top: 25%;
        right: 0;
        content: '';
        background: #f2f2f2;
        width: 1px;
        height: 90px;
      }
      .detail_action {
        flex: 2;
        text-align: center;
        .bt_action {
          border: 1px solid #5f96ff;
          border-radius: 4px;
          width: 108px;
          height: 32px;
          font-size: 14px;
          color: #5f96ff;
          line-height: 32px;
          text-align: center;
          margin: 0 auto;
          margin-top: 34px;
          cursor: pointer;
        }
        .bt_action:hover {
          background: #5f96ff;
          color: #ffffff;
        }
      }
    }

  }

  .result_no {
    width: 100%;
    height: 360px;
    background-image: url('../../assets/image/noresult.png');
    background-repeat: no-repeat;
    background-position: center;
  }


</style>
