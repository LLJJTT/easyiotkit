<template>
  <div class="login">
    <!-- head -->
    <div id="title">
      登录
    </div>
    <!-- logo -->
    <div class="top wrapper">
      <li>
        <p class="welcome">欢迎登录</p>
      </li>
    </div>
    <!-- 输入框 -->
    <div class="indiv wrapper1">
      <li>
        <input class="number inp" v-model="username" placeholder="请输入用户名" type="text">
      </li>
      <li>
        <input class="pwd inp" v-model="pwd" placeholder="请输入密码" type="password">
      </li>
      <li class="fun">
        <span class="goregister" @click="goRegister">快速注册</span>
        <span class="goforget" @click="goForget">忘记密码</span>
        <div style="clear:both"></div>
      </li>
      <li>
        <button @click="goLogin" class="btn">登录</button>
      </li>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import axios from 'axios'
export default {
  data () {
    return {
      username:'',
      pwd:'',
      url:'http://112.74.63.14/BodyPratice/bodybuilding_php/login.php'//登录接口
    }
  },
  methods:{
    goRegister:function(){
      this.$router.push({
        path:'register'
      })
    },
    goLogin:function(){
    }
  }
}
</script>

<style scoped>
  .login{
    /*background: #aaa;*/
    height: 100%;
  }
  .wrapper{
    padding: 3rem 1rem 0rem 1rem;
  }
  .wrapper1{
    padding: 0rem 1rem 0rem 1rem;
  }
  .logo{
    width: 6rem;
    height:4rem;
  }
  .welcome{
    text-align: left;
    font-size: 1.3rem;
  }
  .indiv{
    margin-top: 1rem;
  }
  .inp{
    box-shadow: none;
    border: none;
    border-bottom: 1px solid #000;
    margin-top: 1rem;
    width: 100%;
    padding: .8rem 0;
    text-indent: 1rem;
  }
  .goregister{
    float: left;
    margin-left: .5rem;
  }
  .goforget{
    float: right;
    margin-right: .5rem;
  }
  .fun{
    margin-top: 1rem;
    padding: 0 .5rem;
    color: #65686b;
    font-weight: 400;
    font-size: .4rem;
  }
  .btn{
    border: none;
    box-shadow: none;
    width: 90%;
    background: #211cfa;
    padding: .5rem 0;
    border-radius: .4rem;
    color: #fff;
    margin-top: 2rem;
  }
  #title{
    background: #211cfa;
    padding:.4rem 0;
    font-size:1rem;
    font-weight:bold;
    letter-spacing:.12rem;
    color:#fff;
   }
  .prev{
    font-weight:bold;
    position:absolute;
    left:1rem;
    top:.1rem;
    padding:.5rem;
  }
</style>