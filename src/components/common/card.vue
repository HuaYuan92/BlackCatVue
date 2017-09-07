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
    width: 14%;
    height: 30%;
    border-radius: 5px;
    color: #fff;
    .title {
      width: 100%;
      height: 32px;

      line-height: 32px;
      font-size: 16px;
    }
    .num {
      font-size: 34px
    }

  }


</style>
