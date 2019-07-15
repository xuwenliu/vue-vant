<template>
	<div>
		<div class="navbar-div">
			<van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="$router.go(-1)" />
		</div>
		<div class="topimage-div">
			<img :src="goodsInfo.image1" width="100%" />
		</div>
	</div>
</template>
<script>
	import { mapState, mapActions } from "vuex";
	import { GOODS_GET_DETAIL_INFO } from "@/vuex/mutationTypes";

	export default {
		name: "goods",
		computed: {
			...mapState("goods", {
				goodsInfo: state => state.goodsInfo
			})
		},
		created() {
			let postData = {
				goodsId: "775e575ce28a4f89b1dfe2c99eb08ae7"
			};
            this.getGoodsInfo(postData);
		},
		methods: {
			...mapActions("goods", {
				getGoodsInfo: GOODS_GET_DETAIL_INFO
			})
		}
	};
</script>
<style lang="less" scoped>
</style>


