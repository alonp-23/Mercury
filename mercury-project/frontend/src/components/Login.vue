<template>
  <div class="login-wrap">
	<div class="login-html">
         <div class = "topLogo"></div>
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">התחברות</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab"></label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">שם משתמש</label>
					<input id="user" type="text" v-model="username" class="input">
				</div>
				<div class="group">
					<label for="pass" class="label">סיסמה</label>
					<input id="pass" type="password" v-model="password" class="input" data-type="password">
				</div>
				<div v-if="this.showWrongCredentials == true" style="direction: rtl">
					<label for="wrong" class="wrong-login">התבלבלת כפרה, זאת לא הסיסמה הנכונה...</label>
				</div>
				<div class="group">
					<input type="submit" @click="requestLogin" class="button" value="כניסה">
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import router from '@/router/index.js'

export default {
	data(){
		return {
			username: "",
			password: "",
			showWrongCredentials: false,
		}
	},
    computed:{

	},
	methods: {
		requestLogin(){
			console.log('request login with: ' + this.username +" | "+ this.password);
			axios.post('http://backend-tmzde3.apps.openforce.openforce.biz/users/login', {
				username: this.username,
				password: this.password
			},{'Content-Type': 'application/json;charset=UTF-8',
		"Access-Control-Allow-Origin": "*"}).then((res) => {
				if(res.status == 200){
					router.push('Stats')
				}
			}).catch((err)=>{
				console.log("Caught");
				this.showWrongCredentials = true;
			})
		}
	}
}
</script>

<style>
body{
	margin:0;
	color:#6a6f8c;
	background:url(../assets/skyline-background.jpg);
	font:600 16px/18px 'Open Sans',sans-serif;
}
*,:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.wrong-login{
	color: crimson;
}

.input:active{
	outline: none;
}

.input:focus{
	outline: none;
}

.login-wrap{
	width:100%;
	margin:auto;
	max-width:650px;
	min-height:800px;
	position:relative;
	box-shadow:0 12px 15px 0 rgba(0,0,0,.30),0 17px 50px 0 rgba(0,0,0,.40);
}
.login-html{
	width:100%;
	height:100%;
	position:absolute;
	padding:90px 70px 50px 70px;
	background:rgba(40,57,101,.65);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm{
	top:0;
	left:0;
	right:0;
	bottom:0;
	position:absolute;
	transform:rotateY(180deg);
	backface-visibility:hidden;
	transition:all .4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check{
	display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
	text-transform:uppercase;
}
.login-html .tab{
	font-size:22px;
	margin-right:15px;
	padding-bottom:5px;
	margin:0 15px 10px 0;
	width: 498px;
	direction: rtl;
	position: relative;
	display:inline-block;
	border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab{
	color:#fff;
	border-color:#1161ee;
}
.login-form{
	min-height:345px;
	position:relative;
	perspective:1000px;
	transform-style:preserve-3d;
}
.login-form .group{
	margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
	width:100%;
	color:#fff;
	display:block;
}
.login-form .group .input,
.login-form .group .button{
	border:none;
	padding:15px 20px;
	border-radius:25px;
	background:rgba(255,255,255,.1);
}
.login-form .group input[data-type="password"]{
	text-security:circle;
	-webkit-text-security:circle;
}
.login-form .group .label{
	color:#aaa;
	direction: rtl;
	width: 498px;
	font-size:18px;
}
.login-form .group .input{
	direction: rtl;
}
.login-form .group .button{
  background:#1161ee;
  text-align: center;
  font-size: 21px;
  text-style: bold;
  width: 31%;
}
.login-form .group label .icon{
	width:15px;
	height:15px;
	border-radius:2px;
	position:relative;
	display:inline-block;
	background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
	content:'';
	width:10px;
	height:2px;
	background:#fff;
	position:absolute;
	transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
	left:3px;
	width:5px;
	bottom:6px;
	transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
	top:6px;
	right:0;
	transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
	color:#fff;
}
.login-form .group .check:checked + label .icon{
	background:#1161ee;
}
.login-form .group .check:checked + label .icon:before{
	transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
	transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
	transform:rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
	transform:rotate(0);
}

.hr{
	height:2px;
	background:rgba(255,255,255,.2);
}

.topLogo{
    width: 169%;
    height: 12.5%;
    margin-bottom: 2%;
    position: relative;
	position: center;
    background:url(../assets/Logo.png) no-repeat center;
    background-size: contain;
}
.foot-lnk{
    width: 100%;
    height: 92.5%;
	text-align:center;
    background:url(../assets/NYPDShieldLarge.png) no-repeat center;
    background-size: contain;
}
</style>