import { GET_INDEX_DATA } from "@/vuex/mutationTypes";
import axios from "axios";
const index = {
	namespaced: true,
	state: {
		slides: [],
		category: [],
		adBanner: "",
		recommend: [],
		floor1: [],
		floor2: [],
		floor3: [],
		floorName: {},
		hotGoods: [],
	},
	getters: {},
	mutations: {
		[GET_INDEX_DATA](state, palyload) {
            state.slides = palyload.slides;
            state.category = palyload.category;
            state.adBanner = palyload.advertesPicture.PICTURE_ADDRESS;
            state.recommend = palyload.recommend;
            state.floor1 = palyload.floor1;
            state.floor2 = palyload.floor2;
            state.floor3 = palyload.floor3;
            state.floorName = palyload.floorName;
            state.hotGoods = palyload.hotGoods;
            
		},
	},
	actions: {
		async [GET_INDEX_DATA]({ commit }) {
			let res = await axios.get("https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/index");
			commit(GET_INDEX_DATA, res.data.data);
		},
	},
};

export default index;
