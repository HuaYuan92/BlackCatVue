<template>
  <div class="box">
    <div class="title"><span style="color: #a2a2a2">企业黑名单查询</span>/查询结果</div>
    <div class="content_box">
      <div class="content_search">
        <div class="search_name">
          <Input v-model="search.entname" placeholder="请输入公司全称" style="width: 200px;"> </Input>
          <Button type="primary" style="width: 120px;" @click="searchname" icon="search">点击搜索</Button>
        </div>
        <div class="search_code">
          <Input v-model="search.entcode" placeholder="请输入公司代码" style="width: 200px"> </Input>
          <Button type="primary" style="width: 120px;" @click="searchcode" icon="search">点击搜索</Button>
        </div>
      </div>
      <div class="content_table">
        <Table :columns="columns" :data="enttable" size="small"></Table>
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
    name: 'entresult',
    data: function () {
      return {
        current: 1,
        keyword:'',
        columns: [
          {
            title: '主体名称',
            key: 'name',
            align: 'center',
            render: (h, params) => {
              const address = params.row.name;
              const keyword =this.keyword;
              const reg =new RegExp("("+keyword+")");
              console.log(reg);
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
            title: '失信标签数',
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
                }, '保存')
              ]);
            }
          }
        ],
      }
    },
    computed: mapGetters(
      [
        'search',
        'enttable'
      ]
    ),
    methods: {
      searchname(){
        this.$store.dispatch('SearchName');
        if(this.search.entname){
          this.current = 1;
          this.keyword=this.search.entname
        };


      },
      searchcode(){
        this.$store.dispatch('SearchCode');
        if(this.search.entcode){
          this.current = 1;
          this.keyword=this.search.entcode
        }

      },
      show (index) {

        console.log(this.current);
      },
      remove (index) {
        this.enttable.splice(index, 1);
      },
      page(index){
        this.current = index;
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
