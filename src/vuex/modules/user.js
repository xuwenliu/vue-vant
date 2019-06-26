import { USER_REGISTER, USER_LOGIN, USER_LOGOUT } from "@/vuex/mutationTypes";
import axios from "@/axios/axios";
import api from "@/axios/api";

const user = {
	namespaced: true,
	state: {},
	mutations: {},
	actions: {
		//注册
		async [USER_REGISTER](ctx, data) {
			let res = await axios.post(api.user.register, data);
			return res;
		},
		//登录
		async [USER_LOGIN](ctx, data) {
			let res = await axios.post(api.user.login, data);
			return res;
		},
		//退出
		async [USER_LOGOUT]() {
			let res = await axios.post(api.user.logout);
			return res;
		},
	},
};

export default user;
