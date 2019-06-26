<template>
	<div class="register">
		<van-nav-bar title="注册" left-arrow @click-left="onClickLeft"/>

		<div class="register-form">
			<van-cell-group>
				<van-field
					size="large"
					v-model="userName"
					clearable
					label="账号"
					placeholder="请输入6-12位中文数字字母下划线的账号"
					:error-message="userNameErrorMsg"
					@input="userNameChange"
				/>

				<van-field
					size="large"
					v-model="password"
					type="password"
					label="密码"
					placeholder="请输入6-20位数字字母下划线的密码"
					:error-message="passwordErrorMsg"
					@input="passwordChange"
				/>
			</van-cell-group>
			<van-button
				round
				:loading="loading"
				type="danger"
				:loading-text="loadingText"
				size="large"
				@click="submit"
			>注册</van-button>
		</div>
	</div>
</template>
<script>
	import { mapActions } from "vuex";
	import { USER_REGISTER } from "@/vuex/mutationTypes";
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
				if (this.userNameChange() && this.passwordChange()) {
					if (this.userName === this.password) {
						this.$toast("账号和密码不能相同");
						return;
					}
					this.loading = true;
					this.loadingText = "注册中...";
					let result = await this.register({
						userName: this.userName,
						password: this.password
					});
					if (result.data.success) {
						this.loading = false;
						this.loadingText = "";
						localStorage.setItem("token", result.data.token);
						this.$toast({
							message: "注册成功！",
							onClose: () => {
								this.$router.push({ name: "index" });
							}
						});
					} else {
						this.loading = false;
						this.loadingText = "";
						this.$toast(result.data.msg);
					}
				}
			},
			...mapActions("user", {
				register: USER_REGISTER
			}),

			userNameChange() {
				let reg = /^[\u4E00-\u9FA5A-Za-z0-9_]{6,12}$/;
				if (!reg.test(this.userName)) {
					this.userNameErrorMsg = "账号格式错误！";
					return false;
				} else {
					this.userNameErrorMsg = "";
					return true;
				}
			},
			passwordChange() {
				let reg = /^[A-Za-z0-9_]{6,20}$/;
				if (!reg.test(this.password)) {
					this.passwordErrorMsg = "密码格式错误！";
					return false;
				} else {
					this.passwordErrorMsg = "";
					return true;
				}
			}
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


