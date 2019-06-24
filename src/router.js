import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			redirect: {
				name: "index",
			},
		},
		{
			path: "/main",
			name: "main",
			component: () => import(/* webpackChunkName: "main" */ "./views/Main.vue"),
			children: [
				{
					path: "/",
					name: "index",
					component: () => import(/* webpackChunkName: "main" */ "./views/Index.vue"),
                },
                {
					path: "categoryList",
					name: "categoryList",
					component: () => import(/* webpackChunkName: "main" */ "./views/CategoryList.vue"),
				},
			],
		},
	],
});
