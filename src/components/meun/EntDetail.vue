<template>
  <div class="detail_box">
    <div class="box_img">
      <div class="img1">

      </div>
    </div>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'persondetail',
    data: function () {
      return {

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
  .detail_box{
    width: 900px;
    margin: 0 auto;
    text-align: left ;
    .img1{
      display: inline-block;
      width: 108px;
      height: 108px;
      background: url('../../assets/image/head_company.png');
    }


  }
</style>
