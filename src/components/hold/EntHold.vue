<template>
  <div class="box">
    <div class="title">已保存企业名单</div>
    <div class="content_box">
      <div class="content_search">
        <div class="search_name">

        </div>
      </div>
      <div class="content_table">
        <Modal
          v-model="modal"
          title="对话框标题"
          :loading="true"
        >
          <p>点击确定后，对话框将在 2秒 后关闭。</p>
        </Modal>

        <Table :columns="columns" :data="enttable" size="small" @on-selection-change="selection"  @on-sort-change="sort"></Table>
      </div>
      <div class="table_page">
        <Page :total="122" @on-change="page" show-elevator :current="current"></Page>
      </div>

    </div>
  </div>

</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'enthold',
    beforeMount:function () {
      this.$store.dispatch('EntHold');

    },
    data: function () {
      return {
        modal:false,
        keyword:'',
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'right'
          },
          {
            title: '主体名称',
            key: 'name',
            align: 'center',
            render: (h, params) => {
              const address = params.row.name;
              const keyword =this.keyword;
              const reg =new RegExp("("+keyword+")");
              const splitArr = address.split(reg);
              const nodes = splitArr.map((currentValue) => {
                if (currentValue == this.keyword) {
                  return h('span', {
                    style: {
                      color: 'red'
                    }
                  }, keyword);
                }
                return currentValue;
              });
              return h('div', nodes)
            },

          },
          {
            title: '主体代码',
            key: 'age',
            align: 'center'
          },
          {
            title: '保存时间',
            key: 'address',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small',
                    shape: "circle",
                    class:'123123'
                  },
                  style: {
                    marginRight: '5px',
                    width: '100px',
                    cursor: 'default',
                  }
                }, params.row.address),])
            },
            sortable:'custom'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.row.index)
                    }
                  }
                }, '查看详情'),
                h('Button', {
                  props: {
                    type: 'success',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.row.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
      }
    },
    computed: mapGetters(
      [
        'search',
        'enttable',
        'current'
      ]
    ),
    methods: {
      selection(info){
        console.log(info);
        let modal =this.modal;
        this.modal=!modal;
        console.log(1);


      },
      sort(c){
        console.log(c);
      },
      show (index) {

        console.log(this.current);
      },
      remove (index) {
        this.enttable.splice(index, 1);
      },
      page(index){

        console.log('index='+index);
        this.$store.commit('se',index);
        console.log('this.current='+this.current);
      }

    },
  }

</script>
<style scoped lang="less" rel="stylesheet/less">
  .box {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    .title {
      text-align: left;
      padding-left: 20px;
      font-size: 16px;
      height: 36px;
      line-height: 36px;
    }
    .content_box {
      width: 96%;
      height: 90%;
      background-color: #fff;
      margin: 0 auto;
      position: relative;
      .content_search {
        padding-top: 14px;
        padding-left: 16px;
        position: relative;
        text-align: left;
        .search_name {
          padding-bottom: 8px;
        }
        .search_code {
        }
      }

    }
    .content_table {
      width: 97%;
      margin: 0 auto;
      margin-top: 20px;
    }
    .table_page {
      width: 100%;
      position: absolute;
      bottom: 5%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


</style>
