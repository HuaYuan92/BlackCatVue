import * as types from './type'

export default {
  LoginCheck:({commit})=>{
    commit(types.LOGIN_CHECK)
  },
  ReadLocal:({commit})=>{
    commit(types.Read_Local)
  },
  SearchName:({commit})=>{
    commit(types.Search_Name)
  },
  SearchCode:({commit})=>{
    commit(types.Search_Code)
  },

}
