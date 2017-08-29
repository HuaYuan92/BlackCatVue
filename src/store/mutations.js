import * as types from './type'
import axios from 'axios'
import Vue from 'vue'
import Router from '../router/index'

const vue = new Vue();
const state = {
  formInline: JSON.parse(localStorage.getItem('user')) || {},
  search: {
    entname: '',
    entcode: ''
  },
  enttable: []
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
};
export default {
  state,
  mutations,
  getters
}
