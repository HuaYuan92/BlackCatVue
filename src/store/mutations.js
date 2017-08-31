import * as types from './type'
import axios from 'axios'
import Vue from 'vue'
import Router from '../router/index'
const option={
  title: {
    text: '近一年查询情况统计',
    padding: [0, 0, 0, 40],
    subtext: '(2017.08--2018.07)'

  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['总查询次数', '查询命中数'],
    orient: 'vertical',
    right: '12%'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['17-08', '17-09', '17-10', '17-11', '17-12', '18-01', '18-02', '18-03', '18-04', '18-05', '18-06', '18-07']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '查询命中数',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210, 33, 123, 131, 44, 55]
    },
    {
      name: '总查询次数',
      type: 'line',
      stack: '总量',
      data: [220, 182, 191, 234, 290, 330, 310, 485, 888, 234, 667, 324]
    },
  ]
}

const vue = new Vue();
const state = {
  formInline: JSON.parse(localStorage.getItem('user')) || {},
  search: {
    entname: '',
    entcode: '',
    time:''
  },
  option:option,
  enttable: [],
};

const userCheck = function () {
  console.log('login ... ');
  let flag = false;
  axios.get(location.origin + '/static/data/app.json').then(function (res) {
    let user = res.data.user;
    if (user.name == state.formInline.name && user.password == state.formInline.password) {
      vue.$Message.config({
        top: 50,
        duration: 3,
      });
      vue.$Message.success('登录成功!');
      console.log(' login success');
      localStorage.setItem('user', JSON.stringify(state.formInline));
      flag = true;
      Router.push({path: '/home/entlist'});
    } else {
      vue.$Message.error('登录失败!');
      Router.push({path: '/login'});
    }
  }).catch(function (err) {
    console.log(err);
  })
};
const mutations = {
  [types.LOGIN_CHECK](state){
    userCheck();
  },
  [types.Read_Local](state){
    if (state.formInline) {
      userCheck()
    } else {
      Router.push({path: '/login'});

    }
  },
  [types.Search_Name](state){
    if (!state.search.entname) {
      vue.$Message.error('请输入公司名称 ');
      return
    }
    Router.push({path: '/home/entresult'});

    axios.get(location.origin + '/static/data/enttable.json').then(function (res) {
      state.enttable=res.data;
    }).catch(function (err) {
      console.log(err);
    })

  },
  [types.Search_Code](state){
    if (!state.search.entcode) {
      vue.$Message.error('请输入公司代码 ');
      return
    }
    Router.push({path: '/home/entresult'});
  },
  [types.Select_Time](state){
    if(state.search.time==1){
      state.option.series[0].data=[120, 132, 101, 134, 90, 230, 210, 33, 123, 131, 44, 55];
      state.option.series[1].data=[220, 182, 191, 234, 290, 330, 310, 485, 888, 234, 667, 324];
    }else if(state.search.time==6){
      state.option.series[0].data=[33, 44, 55, 66, 77, 44, 55, 23, 44, 245, 54, 23];
      state.option.series[1].data=[12, 55, 123, 45, 17, 65, 12, 67, 38, 79, 53, 44];

    }else{
      state.option.series[0].data=[333, 424, 525, 676, 767, 494, 535, 237, 434, 245, 534, 223];
      state.option.series[1].data=[142, 555, 1323, 425, 147, 645,412, 627, 338, 796, 543, 744];

    }
  },

};
const getters = {
  formInline: (state) => {
    return state.formInline
  },
  search: (state) => {
    return state.search
  },
  enttable: (state) => {
    return state.enttable
  },
  option: (state) => {
    return state.option
  },
};
export default {
  state,
  mutations,
  getters
}
