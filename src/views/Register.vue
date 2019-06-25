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
				/>

				<van-field
					size="large"
					v-model="password"
					type="password"
					label="密码"
					placeholder="请输入6-20位数字字母下划线的密码"
					:error-message="passwordErrorMsg"
				/>
			</van-cell-group>
			<van-button round :loading="loading" type="danger" :loading-text="loadingText" size="large" @click="submit">注册</van-button>
		</div>
	</div>
</template>
<script>
	export default {
		name: "register",
		data() {
			return {
				userName: "",
				userNameErrorMsg: "",
				
                password: "",
                passwordErrorMsg: "",
                
				loadingText: "",
                loading: false,
			};
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
            },
            submit(){
                this.loading = true;
                this.loadingText = '注册中...'
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


