import * as types from './type'
import axios from 'axios'
import Vue from 'vue'
import Router from '../router/index'

const vue =new Vue();
const state = {
  formInline: localStorage.getItem('user')||{
    name: '',
    password: '',
  },
};

const userCheck=function () {
  axios.get(location.origin + '/static/data/app.json').then(function (res) {
    let user = res.data.user;
    if (user.name == state.formInline.name && user.password == state.formInline.password) {
      vue.$Message.success('登录成功!');
      localStorage.setItem('user',JSON.stringify(state.formInline));
      Router.push({path:'/home'});

    }else{
      vue.$Message.error('登录失败!');
      Router.push({path:'/login'});
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
    let userInfo =JSON.parse(localStorage.getItem('user'))||'';
    if(userInfo){
      state.formInline.name =userInfo.name;
      state.formInline.password =userInfo.password;
      userCheck();
    }else{
      Router.push({path:'/login'});

    }
  }
};
const getters = {
  formInline: (state) => {
    return state.formInline
  },
};
export default {
  state,
  mutations,
  getters
}
