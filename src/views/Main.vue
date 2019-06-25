<template>
	<div class="main">
		<div class="main-div">
			<keep-alive>
				<router-view/>
			</keep-alive>
		</div>
		<van-tabbar v-model="active" @change="changeTabbar()">
			<van-tabbar-item icon="shop">首页</van-tabbar-item>
			<van-tabbar-item icon="records">列表</van-tabbar-item>
			<van-tabbar-item icon="cart">购物车</van-tabbar-item>
			<van-tabbar-item icon="contact">会员中心</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	import { mapState, mapMutations } from "vuex";
    import { GET_ROUTES,CHANGE_ACTIVE} from "@/vuex/mutationTypes";
    
	export default {
		data() {
			return {};
		},
		computed: {
			...mapState("main", {
				routes: state => state.routes
			}),
			active: {
				get() {
					return this.$store.state.main.active;
				},
				set(newValue) {
					this.$store.state.main.active = newValue;
				}
			}
		},
		mounted() {
			this.getRoutes();
			this.changeTabBarActive();
		},
		methods: {
			...mapMutations("main", {
				getRoutes: GET_ROUTES
			}),
			changeTabBarActive() {
				this.routes.map(item => {
					if (item.name === this.$route.name) {
						this.$store.commit(`main/${CHANGE_ACTIVE}`,item.value);
					}
				});
			},
			changeTabbar() {
                this.$store.commit(`main/${CHANGE_ACTIVE}`,this.active);
				this.$router.push({ name: this.routes[this.active].name });
			}
		}
	};
</script>
<style lang="less" scoped>
	.main {
        .main-div{
            padding-bottom: 110px;
        }
		.van-tabbar {
			height: 100px;
		}
		/deep/.van-tabbar-item__icon {
			font-size: 0.48rem;
		}
	}
</style>

