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
				{
					path: "cart",
					name: "cart",
					component: () => import(/* webpackChunkName: "main" */ "./views/Cart.vue"),
				},
				{
					path: "member",
					name: "member",
					component: () => import(/* webpackChunkName: "main" */ "./views/Member.vue"),
				},
			],
		},
		{
			path: "/register",
			name: "register",
			component: () => import(/* webpackChunkName: "register" */ "./views/Register.vue"),
		},
		{
			path: "/login",
			name: "login",
			component: () => import(/* webpackChunkName: "login" */ "./views/Login.vue"),
		},
	],
});
