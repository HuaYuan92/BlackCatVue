<template>

  <Form ref="logininfo" :model="logininfo" :rules="ruleInline" class="login_cat_form">
    <img src="../assets/image/logo.png" class="logo">
    <Form-item prop="name" class="login_cat">
      <Input type="text" v-model="logininfo.name" placeholder="用户名" size="large">
      <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </Form-item>
    <Form-item prop="password" class="login_cat">
      <Input type="password" v-model="logininfo.password" placeholder="密码" size="large">
      <Icon type="ios-locked-outline" slot="prepend"></Icon>
      </Input>
    </Form-item>
    <Form-item>
      <Button type="primary" @click="handleSubmit('logininfo')" size="large" class="login_btn">登录</Button>
    </Form-item>

  </Form>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'login',
    data () {
      return {
        ruleInline: {
          name: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        }
      }
    },
    computed: mapGetters(
      [
        'logininfo'
      ]
    ),

    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$store.dispatch('LoginCheck');
          }
        })
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .login_cat_form {
    width: 800px;
    margin: 0 auto;
    padding-top:140px;
  }

  .login_cat {
    width: 40%;
    margin: 20px auto;

  }
  .login_btn{
    width: 70px;
  }

</style>
