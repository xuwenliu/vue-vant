<template>
	<div class="register">
		<van-nav-bar title="登录" left-arrow @click-left="onClickLeft"/>

		<div class="register-form">
			<van-cell-group>
				<van-field size="large" v-model="userName" clearable label="账号" placeholder="请输入账号"/>

				<van-field size="large" v-model="password" type="password" label="密码" placeholder="请输入密码"/>
			</van-cell-group>
			<van-button
				round
				:loading="loading"
				type="danger"
				:loading-text="loadingText"
				size="large"
				@click="submit"
			>登录</van-button>
		</div>
	</div>
</template>
<script>
	import { mapActions } from "vuex";
	import { USER_LOGIN } from "@/vuex/mutationTypes";
	export default {
		name: "register",
		data() {
			return {
				userName: "",
				userNameErrorMsg: "",

				password: "",
				passwordErrorMsg: "",

				loadingText: "",
				loading: false
			};
		},
		created() {
			if (localStorage.getItem("token")) {
				this.$notify({
					message: "您已经登录过了!",
					onClose: () => {
						this.$router.push({ name: "index" });
					}
				});
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			async submit() {
				if (this.userName == "" || this.password == "") {
					this.$toast("请输入账号或密码");
					return;
				}
				this.loading = true;
				this.loadingText = "登录中...";
				let result = await this.login({
					userName: this.userName,
					password: this.password
				});
				if (result.data.success) {
					this.loading = false;
                    this.loadingText = "";
					localStorage.setItem("token", result.data.token);
					this.$toast({
                        message:'登录成功！',
                        onClose:()=>{
					        this.$router.push({ name: "index" });
                        }
                    });
				} else {
					this.loading = false;
					this.loadingText = "";
					this.$toast(result.data.msg);
				}
			},
			...mapActions("user", {
				login: USER_LOGIN
			})
		}
	};
</script>
<style lang="less" scoped>
	.register {
		height: 100%;
		position: absolute;
		width: 100%;
		.van-nav-bar {
			height: 90px;
			line-height: 90px;
			.van-nav-bar__left,
			.van-nav-bar__right {
				.van-nav-bar__arrow {
					font-size: 40px;
				}
			}
			.van-nav-bar__title {
				font-size: 30px;
			}
		}
	}
	.register-form {
		position: absolute;
		width: 100%;
		top: 10%;
		.van-cell-group {
			background: transparent;
		}
		.van-cell--large {
			padding: 0.32rem;
			line-height: 30px;
			background: transparent;
			/deep/.van-cell__title {
				font-size: 30px;
				line-height: 1.5;
				width: 1.6rem;
			}
			/deep/.van-field__control {
				font-size: 30px;
			}
			/deep/.van-field__clear {
				font-size: 30px;
				color: @red;
			}
		}
		.van-button--round {
			height: 90px;
			line-height: 90px;
			font-size: 30px;
			margin-top: 60px;
			width: 650px;
			margin-left: 50px;
		}
	}
</style>


