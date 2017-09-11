<template>
  <div class="box">
    <div class="box_entlist" key="3-1">
      <div class="content_search">
        <div class="ipt_box">
          <Input v-model="enttable.keyword" placeholder="输入关键词" size="large" key="3-1" style="width: 980px;"> </Input>
        </div>
        <Button type="primary" size="large" @click="holdsearch" class="button">
          <Icon type="ios-search" size="20" class="icon"></Icon>
          点击搜索
        </Button>
      </div>
    </div>
    <div class="title">
      <div>已保存企业黑名单</div>
      <Button type="ghost" size="large" style="width: 100px;">批量操作</Button>
      <Button type="ghost" size="large" style="width: 100px;">删除</Button>
    </div>
    <div class="content_box">
      <div class="content_table">
        <Modal
          v-model="modal"
          title="对话框标题"
          :loading="true"
        >
          <p>点击确定后，对话框将在 2秒 后关闭。</p>
        </Modal>

        <Table :columns="columns" :data="enttable.table" size="large" @on-selection-change="selection"
               @on-sort-change="sort"></Table>
      </div>
      <div class="table_page">
        <Page :total="76" @on-change="page" show-elevator :current="enttable.current"></Page>
      </div>

    </div>
  </div>

</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'enthold',
    beforeMount: function () {
      this.$store.dispatch('HoldFetch');

    },
    data: function () {
      return {
        modal: false,
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
              const keyword = this.enttable.keyword;
              const reg = new RegExp("(" + keyword + ")");
              const splitArr = address.split(reg);
              const nodes = splitArr.map((currentValue) => {
                if (currentValue == keyword) {
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
                    class: '123123'
                  },
                  style: {
                    marginRight: '5px',
                    width: '100px',
                    cursor: 'default',
                  }
                }, params.row.address),])
            },
            sortable: 'custom'
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
        'enttable',
      ]
    ),
    methods: {
      holdsearch(){
        console.log(13);
        this.$store.commit('Hold_Search', 'ent');
      },
      selection(info){
        console.log(info);
        let modal = this.modal;
        this.modal = !modal;
        console.log(1);
      },
      sort(c){
        console.log(c);
      },
      show (index) {
        console.log(this.enttable.current);
      },
      remove (index) {
        this.enttable.table.splice(index, 1);
      },
      page(index){
        console.log('index=' + index);
        this.$store.commit('se', index);
        console.log('this.current=' + this.current);
      }

    },
  }

</script>
<style scoped lang="less" rel="stylesheet/less">
  .box {
    width: 100%;
    background-color: #ffffff;
    .box_entlist {
      height: 250px !important;
      background-position: 0 92%;
      overflow: hidden;
      .content_search {
        margin-top: 110px;
        .ipt_box {
          width: 1100px;
          font-size: 16px;
          color: #353842;
        }
      }

    }
    .title {
      width: 1200px !important;
      margin: 20px auto;
      text-align: left;
      font-size: 16px;
      height: 86px;
      line-height: 46px;
      color: #353842;
    }
    .content_box {
      width: 1200px;
      height: 770px;
      margin: 0 auto;
      position: relative;
      .content_search {
        padding-top: 14px;
        padding-left: 16px;
        position: relative;
        text-align: left;
      }

    }
    .content_table {
      width: 100%;
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

  .ivu-table td, .ivu-table th {
    border: none !important
  }

  .ivu-table-wrapper {
    border: none;
  }

</style>
