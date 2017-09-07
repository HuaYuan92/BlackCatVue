<template>
  <div class="box">
    sdasdfsafasf
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
</style>
