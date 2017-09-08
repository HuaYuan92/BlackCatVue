<template>
  <div class="detail_box">
    <div class="box_img">
      <div class="img">
        <div class="img1">
        </div>
        <div class="img_text">
          <div class="name">
            {{entresult.sum.name}}
          </div>
          <div class="cord">
            身份证号：{{entresult.sum.code}}
          </div>
        </div>
      </div>

    </div>
    <div class="detail_content">
      <div class="detail_remind">
        声明：黑猫察提供的失信信息均来自于合法途径，如有异议可提出申诉，但黑猫察不承担任何法律责任。
      </div>
      <div class="content_item item1">
        <div class="item_title">
          基础信息
        </div>
        <div class="item_content">
          <div class="item_content_item">
            <div class="item_key">
              真实姓名
            </div>
            <div class="item_val">
              庞宗红
            </div>
          </div>
          <div class="item_content_item">
            <div class="item_key">
              身份证号
            </div>
            <div class="item_val">
              110100199807261249
            </div>
          </div>
        </div>

      </div>
      <div class="content_item item2">
        <div class="item_title">
          失信详情
        </div>
        <div class="item_content">
        </div>

      </div>


    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'persondetail',
    data: function () {
      return {}
    },
    computed: mapGetters(
      [
        'entresult'
      ]
    ),
    methods: {},
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .detail_box {
    width: 100%;
    text-align: left;
    background: #ffffff;
    box-shadow: 0px 8px 8px 0px rgba(46, 119, 242, 0.07);
    height: 150px;
    border-top: 1px solid #e1e5e7;
    .box_img {
      .img {
        width: 900px;
        margin: 0 auto;
        background: url("../../assets/image/seal.png") no-repeat 100% 50%;
        .img1 {
          display: inline-block;
          width: 108px;
          height: 150px;
          background: url('../../assets/image/head_person.png') no-repeat center;
        }
        .img_text {
          display: inline-block;
          height: 150px;
          vertical-align: top;
          padding-left: 30px;
          padding-top: 36px;
          .name {
            font-size: 20px;
            color: #353842;
          }
          .cord {
            font-size: 14px;
            color: #9094a4;
            margin-top: 20px;
          }

        }
      }

    }
    .detail_content {
      width: 900px;
      margin: 0 auto;
      min-height: 500px;
      .detail_remind {
        background-color: #fff7ef;
        background-image: url('../../assets/image/amazing.png');
        background-repeat: no-repeat;
        background-position: 2% 48%;
        border: 1px solid #fff2e4;
        border-radius: 4px;
        height: 42px;
        font-size: 14px;
        color: #6a6f83;
        line-height: 42px;
        padding-left: 40px;
        margin-top: 30px;
      }
      .item0 {
        background-image: url('../../assets/image/icon0.png');
      }
      .item1 {
        background-image: url('../../assets/image/icon1.png');
      }
      .item2 {
        background-image: url('../../assets/image/icon2.png');
      }
      .content_item {
        background-color: #ffffff;
        background-repeat: no-repeat;
        background-position: 28px 15px;
        border: 1px solid #e1e5e7;
        margin-top: 24px;
        .item_title {
          height: 50px;
          line-height: 50px;
          padding-left: 60px;
          font-size: 16px;
          color: #353842;
          font-weight: 600;
          border-bottom: 1px solid #e1e5e7;
        }
        .item_content {
          padding: 30px 30px 26px;
          .content_sum {
            display: inline-block;
            font-size: 16px;
            color: #6a6f83;
            line-height: 118px;
            vertical-align: top;
            padding-left: 40px;
            span {
              color: #5F96FF;
            }
          }
          .item_content_item {
            margin-bottom: 16px;
            .item_key {
              display: inline-block;
              font-size: 16px;
              color: #b4b8c7;
              line-height: 46px;
              width: 80px;
              min-height: 46px;
            }
            .item_cord {
              min-height: 46px;
              line-height: 22px;
            }
            .item_val {
              display: inline-block;
              font-size: 16px;
              color: #6a6f83;
              vertical-align: top;
              background: #fafafa;
              border-radius: 2px;
              min-width: 400px;
              max-width: 700px;
              min-height: 46px;
              line-height: 32px;
              margin-left: 26px;
              padding-left: 24px;
              padding-right: 24px;
              padding-top: 6px;
            }

          }
        }
      }

    }

  }
</style>
