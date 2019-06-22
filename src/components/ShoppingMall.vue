<template>
	<div>
		<div class="search-bar">
			<van-row>
				<van-col span="3">
					<img class="location-icon" :src="locationIcon" width="80%">
				</van-col>
				<van-col span="16">
					<input type="text" class="search-input">
				</van-col>
				<van-col span="5">
					<van-button round>search</van-button>
				</van-col>
			</van-row>
		</div>
		<!--swipwer area-->
		<div class="swiper-area">
			<van-swipe :autoplay="5000" :show-indicators="false">
				<van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
					<img v-lazy="banner.image" width="100%">
				</van-swipe-item>
			</van-swipe>
		</div>

		<!--type bar-->
		<div class="type-bar">
			<div v-for="(cate,index) in category" :key="index">
				<img v-lazy="cate.image" width="90%">
				<span>{{cate.mallCategoryName}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "shoppingMall",
		data() {
			return {
				locationIcon: require("@/assets/images/location.png"),
                bannerPicArray: [],
                category:[],
			};
		},
		mounted() {
			this.getData();
		},
		methods: {
			async getData() {
				let res = await this.axios.get(
					"https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/index"
				);
				console.log(res);
                this.bannerPicArray = res.data.data.slides;
                this.category = res.data.data.category;
			}
		}
	};
</script>
<style lang="less" scoped>
	.search-bar {
		background-color: #e5017d;
		height: 1.1rem;
		line-height: 1.1rem;
		overflow: hidden;
	}
	.search-input {
		width: 100%;
		height: 0.65rem;
		border-top: 0px;
		border-left: 0px;
		border-right: 0px;
		border-bottom: 1px solid #fff !important ;
		background-color: #e5017d;
		color: #fff;
	}
	.location-icon {
		padding-top: 0.1rem;
		padding-left: 0.15rem;
	}
	.swiper-area {
		clear: both;
		max-height: 7.5rem;
		overflow: hidden;
	}
	.type-bar {
		background-color: #fff;
		margin: 0 0.15rem 0.15rem 0.15rem;
		border-radius: 0.15rem;
		font-size: 14px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		div {
			padding: 0.15rem;
			font-size: 12px;
			text-align: center;
			flex: 1;
		}
	}
</style>

