<template>
  <div class="card">
    <div class="title">
      {{string}}
    </div>
    <div class="num">
      {{num|numbersss}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'card',
    props: ['string', 'num'],
    methods: {},
  }

</script>
<style scoped lang="less" rel="stylesheet/less">
  .card {
    display: inline-block;
    width: 220px;
    height: 240px;
    border-radius: 5px;
    color: #fff;
    .title {
      font-size: 16px;
      color:#ffffff;
      text-align:left;
      padding-top: 32px;
      padding-left: 24px;
    }
    .num {
      font-size: 34px;
      text-align:left;
      margin-top: 36px;
      padding-left: 24px;
    }

  }


</style>
