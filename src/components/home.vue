<template>
  <div class="home">
  	<!-- 轮播图 -->
  	<div class="container">
  		<ul>
  			<li class="active">设备列表</li>
  			<li>控制台</li>
  			<li>个人</li>
  		</ul>
  	</div>
  	<div id="swipe">
  		<mt-swipe :auto="2000">
			  <mt-swipe-item><img src="static/img/1.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="static/img/2.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="static/img/3.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
  	</div>
  	<!--我的开发板状态  -->
  	<div>
  		<ul class="dev_ul" v-for="itme in devArr">
  			<li class="dev_li">
  				<div>{{itme.name}}</div>
  				<div class="dev_li_two_div">{{itme.online_status}}</div>
  			</li>
  			<li class="dev_li"><button class="btn"></button></li>
        <div style="clear:both"></div>
  		</ul>
  		<ul class="dev_ul">
  			<li style="text-align: right"><span class="add_more" >添加更多</span><button class="btn_add">+</button></li>
        <div style="clear:both"></div>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	devArr:[{
    		name:'我的一号开发板',
    		online_status:'在线'
    	},{
    		name:'我的二号开发板',
    		online_status:'在线'
    	}]
    }
  }
}
</script>

<style scoped>
.mint-swipe {
	margin-top: .4rem;
 	height:10rem;
}
.mint-swipe img{
	height: 10rem;
	width: 100%;
}
.dev_ul{
	margin-top: 1.4rem;
	padding: 0 1rem 0.4rem 1rem;
}
.dev_li{
	display: inline-block;
}
.dev_li:nth-child(1){
	float: left;
}
.dev_li:nth-child(2){
	float: right;
}
.dev_li_two_div{
	margin-top: 0.2rem;
	color: #d36a6a;
	text-align: left;
}
.btn{
	display: block;
	width: 2.4rem;
	height: 2.4rem;
	background: #d36a6a;
	border-radius: 50%;
	outline: none;
	box-shadow: none;
	border: none;
}
.btn_add{
	display: inline-block;
	width: 4rem;
	height: 4rem;
	background: #9391ea;
	border-radius: 50%;
	outline: none;
	box-shadow: none;
	border: none;
	text-align: center;
	line-height: 4rem;
	color: #fff;
}
.add_more{
	margin-right: 2rem;
	font-size: 1rem;
	letter-spacing: 0.08rem;
}
.container{
    height: 3rem;
    background: #211cfa;
}
.container ul{
	display: flex;
    text-align: center;
}
.container ul .active{
	color: #fff;
	border-bottom: .2rem solid #d2ce52;
}
.container ul li{
	width: 33%;
	line-height: 3rem;
	display:block;
	color: #c5c3c3;
}
</style>
