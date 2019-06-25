import { GET_ROUTES, CHANGE_ACTIVE } from '@/vuex/mutationTypes';

const index = {
	namespaced: true,
	state: {
        routes: [],
        active: 0,
	},
    mutations: {
        [GET_ROUTES](state) {
            state.routes = [{ value: 0, name: "index" }, { value: 1, name: "categoryList" }, { value: 2, name: "cart" }, { value: 3, name: "member" }];
        },
        [CHANGE_ACTIVE](state,playload) {
            state.active = playload;
        }
    },
};

export default index;
