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
    props: ['string','num'],
    methods: {
    },
  }

</script>
<style scoped lang="less" rel="stylesheet/less">
  .card{
    display: inline-block;
    width: 180px;
    height: 100px;
    border: 1px solid #000;
    border-radius:2px;
    .title{
      width: 100%;
      height: 32px;
      background-color: #88b1ff;
      color: #fff;
      line-height: 32px;
      font-size: 16px;
    }
    .num{
      font-size:44px
    }

  }


</style>
