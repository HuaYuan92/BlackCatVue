<template>
  <div class="detail_box">
    <div class="box_img">
      <div class="img">
        <div class="img1">
        </div>
        <div class="img_text">
          <div class="name">
            {{personresult.sum.name}}
          </div>
          <div class="cord">
            身份证号：{{personresult.sum.code}}
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
              {{personresult.sum.name}}
            </div>
          </div>
          <div class="item_content_item">
            <div class="item_key">
              身份证号
            </div>
            <div class="item_val">
              {{personresult.sum.code}}
            </div>
          </div>
        </div>

      </div>
      <div class="content_item item2">
        <div class="item_title">
          失信详情
        </div>
        <div class="item_content">
          <div class="item_content_title title0">
            发展改革委/高法受惩黑名单
          </div>
          <div class="item_content_item">
            <div class="item_key">
              企业名称
            </div>
            <div class="item_val">
              辉山乳业有限责任公司北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101
            </div>
          </div>
          <div class="item_content_item ">
            <div class="item_key item_cord">
              统一社会
              信用代码
            </div>
            <div class="item_val">
              520490000049509
            </div>
          </div>
          <div class="item_content_item">
            <div class="item_key">
              法人代表
            </div>
            <div class="item_val">
              张伟
            </div>
          </div>
          <div class="item_content_item">
            <div class="item_key">
              注册地址
            </div>
            <div class="item_val">
              北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101
            </div>
          </div>
          <div class="hr"></div>
        </div>
        <div class="item_content">
          <div class="item_content_title title1">
            保监会行政处罚
          </div>
          <div class="item_content_item">
            <div class="item_key">
              企业名称
            </div>
            <div class="item_val">
              辉山乳业有限责任公司北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101
            </div>
          </div>
          <div class="item_content_item ">
            <div class="item_key item_cord">
              统一社会
              信用代码
            </div>
            <div class="item_val">
              520490000049509
            </div>
          </div>
          <div class="item_content_item">
            <div class="item_key">
              法人代表
            </div>
            <div class="item_val">
              张伟
            </div>
          </div>
          <div class="item_content_item">
            <div class="item_key">
              注册地址
            </div>
            <div class="item_val">
              北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101北京市海淀区五棵松八号院13号楼101
            </div>
          </div>
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
        'personresult'
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
          background: url('../../assets/image/head_company.png') no-repeat center;
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
        margin-bottom: 40px;
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
          .title0 {
            background-image: url('../../assets/image/tab0.png');
          }
          .title1 {
            background-image: url('../../assets/image/tab1.png');
          }
          .title2 {
            background-image: url('../../assets/image/tab2.png');
          }
          .title3 {
            background-image: url('../../assets/image/tab3.png');
          }
          .title4 {
            background-image: url('../../assets/image/tab4.png');
          }
          .title5 {
            background-image: url('../../assets/image/tab5.png');
          }

          .item_content_title {
            background-repeat: no-repeat;
            background-position: 2px 2px;
            font-size: 16px;
            color: #353842;
            line-height: 24px;
            height: 40px;
            padding-left: 36px;
          }
          .hr {
            width: 840px;
            border-bottom: 1px dashed #dddddd;
            margin: 0 auto;
          }

        }
      }

    }

  }
</style>

