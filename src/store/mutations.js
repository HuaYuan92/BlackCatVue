import * as types from './type'
import axios from 'axios'
import Vue from 'vue'
import Router from '../router/index'
const option = {
  title: {
    text: '近一年查询情况统计',
    padding: [0, 0, 0, 40],

  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['总查询次数', '查询命中数'],
    right: '4%',
    itemGap: 30
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#9094a4'
    },
    data: ['17-08', '17-09', '17-10', '17-11', '17-12', '18-01', '18-02', '18-03', '18-04', '18-05', '18-06', '18-07']
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#9094a4'
    },
  },
  color: ['#b800a8', '#5f96ff',],
  series: [
    {
      name: '查询命中数',
      type: 'line',
      smooth: true,
      symbolSize: 12,
      lineStyle: {
        normal: {
          width: 5,
          shadowColor: 'rgba(135,0,119,0.5)',
          shadowBlur: 46,
          shadowOffsetY: 16,
          shadowOffset: 16

        }
      },
      data: []
    },
    {
      name: '总查询次数',
      type: 'line',
      smooth: true,
      symbolSize: 12,
      lineStyle: {
        normal: {
          width: 5,
          shadowColor: 'rgba(46,114,242,0.7)',
          shadowBlur: 46,
          shadowOffsetY: 16,
          shadowOffset: 16
        }
      },
      data: []
    },


  ]
}

const vue = new Vue();
const state = {
  logininfo: JSON.parse(localStorage.getItem('user')) || {name: '', password: ''},
  search: {
    keyword: '',
    personname: '',
    personcord: '',
    personphone: '',
    time: '1'
  },
  option: option,
  enttable: {
    keyword: '',
    current: 1,
    table: []
  },
  entresult: {
    show: true,
    sum: {
      name: '',
      code: '',
      num: ''
    },
    detail: {}
  },
  persontable: {
    keyword: '',
    current: 1,
    table: []
  },
  personresult: {
    show: true,
    sum: {
      name: '',
      code: '',
      num: ''
    },
    detail: {}
  },
  t: {
    num0: "",
    num1: "",
    num2: "",
    num3: "",
    num4: ""
  }
};
const baseUrl = "http://10.2.30.53:8080";
let uid,token;

const userCheck = function () {
  console.log('login ... ');
  axios.post(baseUrl + '/api/login', JSON.stringify({
    userName: state.logininfo.name,
    password: state.logininfo.password
  })).then(function (res) {
    console.log(res);
    vue.$Message.config({
      top: 50,
      duration: 3,
    });
    let user = res.data.user;
    if (user.name == state.logininfo.name && user.password == state.logininfo.password) {
      vue.$Message.success('登录成功!');
      console.log(' login success');
      localStorage.setItem('user', JSON.stringify(state.logininfo));
      Router.push({path: '/home/entlist'});
    } else {
      vue.$Message.error('登录失败!');
      Router.push({path: '/login'});
    }
  }).catch(function (err) {
    console.log(err);
  })
};
const personSearch = function (num) {
  console.log('serch person ing ... ');
  let params;
  let url;
  if (num == 'two') {
    url = '/static/data/personresult.json';

  } else if (num == 'three') {
    url = '/static/data/null.json';


  }
  console.log('search person axios ing .......');
  axios.get(url).then(function (res) {
    console.log(res.data);
    let data = res.data;
    if (data) {
      state.personresult.show = true;
      state.personresult.sum.name = data.name;
      state.personresult.sum.code = data.code;
      state.personresult.sum.num = data.num;
      state.personresult.detail = data.detail;
    } else {
      state.personresult.show = false;

    }
  }).catch(function (err) {
    state.personresult.show = false;
    console.log(err);
  });
  console.log('search person axios end .......');
};
const entSearch = function (type) {
  let url;
  if (type == 'name') {
    url = '/static/data/entresult.json';
  } else if (type == 'code') {
    url = '/static/data/null.json';

  }
  axios.get(url).then(function (res) {
    console.log(res.data);
    let data = res.data;
    if (data) {
      state.entresult.show = true;
      state.entresult.sum.name = data.name;
      state.entresult.sum.code = data.code;
      state.entresult.sum.num = data.num;
      state.entresult.detail = data.detail;
    } else {
      state.entresult.show = false;
    }
  }).catch(function (err) {
    state.entresult.show = false;
    console.log(err);
  });
};
const mutations = {
  // login
  [types.LOGIN_CHECK](state){
    userCheck();
  },
  [types.Read_Local](state){
    if (state.logininfo.name) {
      userCheck()
    } else {
      Router.push({path: '/login'});

    }
  },
  // entlist
  [types.Search_Name](state){
    if (!state.search.keyword) {
      vue.$Message.error('请输入公司名称 ');
      return
    }
    entSearch('name');
    Router.push({path: '/home/entresult'});
  },
  [types.Search_Code](state){
    if (!state.search.keyword) {
      vue.$Message.error('请输入公司代码 ');
      return
    }
    entSearch('code');
    Router.push({path: '/home/entresult'});
  },
  // personlist
  [types.Search_Two](state){
    if (!state.search.personname || !state.search.personcord) {
      vue.$Message.error('请补全搜索信息!');
      return
    }
    if (state.search.personcord && state.search.personcord.length != 18) {
      vue.$Message.error('身份证位数错误');
      return
    }
    personSearch('two');
    Router.push({path: '/home/personresult'});

  },
  [types.Search_Three](state){
    if (!state.search.personname || !state.search.personcord || !state.search.personphone) {
      vue.$Message.error('请补全搜索信息!');
      return
    }
    if (state.search.personcord && state.search.personcord.length != 18) {
      vue.$Message.error('身份证位数错误');
      return
    }
    if (state.search.personphone && state.search.personphone.length != 11) {
      vue.$Message.error('手机号应为11位');
      return
    }
    personSearch('three')
    Router.push({path: '/home/personresult'});

  },
  hold(state, val){
    let url;
    if (val == 'ent') {
      url = '/static/data/entresult.json';
    } else {
      url = '/static/data/entresult.json';
    }
    axios.get(url).then(function (res) {
      console.log(res.data);
      let data = res.data;
      if (data) {
        vue.$Message.success('保存成功');
      } else {
        vue.$Message.error('保存失败');
      }
    }).catch(function (err) {
      console.log(err);
      vue.$Message.error('保存失败');
    });


  },
  // info
  [types.Select_Time](state){
    let url = '/static/data/info.json';
    if (state.search.time == 1) {

    } else if (state.search.time == 6) {
      url = '/static/data/infot.json'
    } else {

    }

    axios.get(url).then(function (res) {
      console.log(res.data);
      let data = res.data;
      state.t.num0 = data.t.num0;
      state.t.num1 = data.t.num1;
      state.t.num2 = data.t.num2;
      state.t.num3 = data.t.num3;
      state.t.num4 = data.t.num4;
      // 命中数
      state.option.series[0].data = [120, 132, 101, 134, 90, 230, 210, 33, 123, 131, 44, 55];
      // 总次数
      state.option.series[1].data = [220, 182, 191, 234, 290, 330, 310, 485, 888, 234, 667, 324];

    }).catch(function (err) {
      console.log(err);
    });
  },
  //已保存
  [types.Hold_Fetch](state){
    axios.get('/static/data/enttable.json').then(function (res) {
      state.enttable.table = res.data;
    }).catch(function (err) {
      console.log(err);
    });
    axios.get('/static/data/persontable.json').then(function (res) {
      state.persontable.table = res.data;
    }).catch(function (err) {
      console.log(err);
    })
  },
  Hold_Search(state, type){
    let url;
    if (type == 'ent') {
      url = '/static/data/enttable.json';
      if (state.enttable.keyword.length == 0) {
        vue.$Message.error('请输入查询关键词');
        return
      }
    } else {
      url = '/static/data/persontable.json';
      if (state.persontable.keyword.length == 0) {
        vue.$Message.error('请输入查询关键词');
        return
      }
    }
    axios.get(url).then(function (res) {
      state.enttable.table = res.data;
    }).catch(function (err) {
      console.log(err);
    });
  },
  toDetail(state, params){
    console.log(params.type);
    if (params.type == 'ent') {
      state.search.keyword = params.name;
      entSearch('name');
      Router.push({path: '/home/entdetail'});
    } else {
      state.search.personname = params.name;
      state.search.personcord = params.code;
      state.search.personcord = '123456789012345678';//待删
      personSearch('two');
      Router.push({path: '/home/persondetail'});
    }
  },
  remove (state, params) {
    let index = params.index;
    let url;
    if (params.type == 'ent') {
      url = '/static/data/enttable.json';
      state.enttable.table.splice(index, 1);
    } else {
      url = '/static/data/enttable.json';
      state.persontable.table.splice(index, 1);
    }
    axios.get(url).then(function (res) {
      console.log('删除成功');
    }).catch(function (err) {
      console.log(err);
    });
  },
  page(state, params){
    let url;
    if (params.type == 'ent') {
      state.enttable.current = params.index;
    } else {
      state.persontable.current = params.index;
    }


    console.log('state.current=' + state.current);
  },

};
const getters = {
  logininfo: (state) => {
    return state.logininfo
  },
  search: (state) => {
    return state.search
  },
  enttable: (state) => {
    return state.enttable
  },
  entresult: (state) => {
    return state.entresult
  },
  persontable: (state) => {
    return state.persontable
  },
  personresult: (state) => {
    return state.personresult
  },
  option: (state) => {
    return state.option
  },
  t: (state) => {
    return state.t
  },
};
export default {
  state,
  mutations,
  getters
}
