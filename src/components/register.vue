<template>
  <div class="register">
    <!-- head -->
    <div id="title">
      注册
    </div>
    <div class="top wrapper">
      <li>
        <p class="welcome">欢迎注册</p>
      </li>
    </div>
    <!-- 输入框 -->
    <div class="indiv wrapper1">
      <li>
        <input class="number inp" v-model="phonenumber" placeholder="请输入手机号" type="text">
      </li>
      <li>
        <input class="pwd inp" v-model="pwd1" placeholder="请输入密码" type="password">
      </li>
      <li>
        <input class="pwd2 inp" v-model="pwd2" placeholder="请再次输入密码" type="password">
      </li>
      <li class="fun">
        <span class="goregister" @click="goLogin">去登录</span>
        <div style="clear:both"></div>
      </li>
      <li>
        <button class="btn" @click="nowRegister">立即注册</button>
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
      phonenumber:'',
      pwd1:'',
      pwd2:'',
    }
  },
  methods:{
    goLogin:function(){
      history.back();
    },
    nowRegister:function(){
      
    }
  }
}
</script>

<style scoped>
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
  .wrapper{
    padding: 3rem 1rem 0rem 1rem;
  }
  .welcome{
    text-align: left;
    font-size: 1.3rem;
  }
  .wrapper1{
    padding: 0rem 1rem 0rem 1rem;
  }
  .logo{
    width: 6rem;
    height:6rem;
    margin: 0 auto;
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
    float: right;
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
</style>