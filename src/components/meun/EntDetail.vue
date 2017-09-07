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
            统一社会信用代码：{{entresult.sum.code}}
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
        'entresult'
      ]
    ),
    methods: {

    },
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
      .img{
        width: 900px;
        margin: 0 auto;
        background: url("../../assets/image/seal.png") no-repeat 100% 50%;
        .img1 {
          display: inline-block;
          width: 108px;
          height: 150px;
          background: url('../../assets/image/head_company.png') no-repeat center;
        }
        .img_text{
          display: inline-block;
          height: 150px;
          vertical-align: top;
          padding-left: 30px;
          padding-top:36px;
          .name{
            font-size:20px;
            color:#353842;
          }
          .cord{
            font-size:14px;
            color:#9094a4;
            margin-top: 20px;
          }

        }
      }

    }

  }
</style>
