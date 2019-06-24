<template>
	<div class="main">
		<div class="main-div">
			<keep-alive>
				<router-view/>
			</keep-alive>
		</div>
		<van-tabbar v-model="active" @change="changeTabbar(active)">
			<van-tabbar-item icon="shop">首页</van-tabbar-item>
			<van-tabbar-item icon="records">列表</van-tabbar-item>
			<van-tabbar-item icon="cart">购物车</van-tabbar-item>
			<van-tabbar-item icon="contact">会员中心</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				active: 0,
                nowName: "", //当前路径
                routes:[
                    {value:0,name:'index'},
                    {value:1,name:'categoryList'},
                    {value:2,name:'cart'},
                    {value:3,name:'member'},
                ]
			};
		},
		created() {
			this.changeTabBarActive();
		},
		updated() {
			this.changeTabBarActive();
		},
		methods: {
			changeTabBarActive() {
                this.nowName = this.$route.name;
                this.routes.map(item=>{
                    if(item.name === this.nowName){
                        this.active = item.value;
                    }
                })
			},
			changeTabbar(active) {
                this.$router.push({ name: this.routes[active].name });
			}
		}
	};
</script>
<style lang="less" scoped>
	.main {
		.van-tabbar {
			height: 100px;
		}
		/deep/.van-tabbar-item__icon {
			font-size: 0.48rem;
		}
	}
</style>

