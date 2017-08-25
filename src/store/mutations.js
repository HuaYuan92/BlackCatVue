import * as types from './type'
import axios from 'axios'
import Vue from 'vue'
import Router from '../router/index'

const vue =new Vue();
const state = {
  formInline: JSON.parse(localStorage.getItem('user'))||{},
};

const userCheck=function () {
  console.log('login');
  let flag =false;
  axios.get(location.origin + '/static/data/app.json').then(function (res) {
    let user = res.data.user;
    if (user.name == state.formInline.name && user.password == state.formInline.password) {
      vue.$Message.success('登录成功!');
      localStorage.setItem('user',JSON.stringify(state.formInline));
      flag= true;
      Router.push({path:'/home'});
    }else{
      vue.$Message.error('登录失败!');
      Router.push({path:'/login'});
    }
  }).catch(function (err) {
    console.log(err);
  })
  return flag
};
const mutations = {
  [types.LOGIN_CHECK](state){
    userCheck();
  },
  [types.Read_Local](state){
    if(state.formInline){
      userCheck()
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
