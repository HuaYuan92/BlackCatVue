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
  SelectTime:({commit})=>{
    commit(types.Select_Time)
  },
  HoldFetch:({commit})=>{
    commit(types.Hold_Fetch)
  },
  SearchTwo:({commit})=>{
    commit(types.Search_Two)
  },
  SearchThree:({commit})=>{
    commit(types.Search_Three)
  }

}
