import { GOODS_GET_DETAIL_INFO } from "@/vuex/mutationTypes";
import axios from "@/axios/axios";
import api from "@/axios/api";

const user = {
	namespaced: true,
    state: {
        goodsInfo: {
            image1:''
        },
	},
	mutations: {
        [GOODS_GET_DETAIL_INFO](state, data) {
            state.goodsInfo = data;
		},
	},
	actions: {
		//获取商品详情
		async [GOODS_GET_DETAIL_INFO]({ commit }, data) {
			let res = await axios.post(api.goods.getInfo, data);
            commit(GOODS_GET_DETAIL_INFO, res.data.data);
		},
	},
};

export default user;
