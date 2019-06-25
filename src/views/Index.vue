<template>
	<div>
		<div class="search-bar">
			<van-row>
				<van-col span="3">
                    <van-icon class="location-icon" name="location-o" color="#fff" size=".8rem"></van-icon>
				</van-col>
				<van-col span="16">
					<input type="text" class="search-input">
				</van-col>
				<van-col span="5">
					<van-button round icon="search"></van-button>
				</van-col>
			</van-row>
		</div>
		<!--swipwer area-->
		<div class="swiper-area">
			<van-swipe :autoplay="5000" :show-indicators="false">
				<van-swipe-item v-for="(banner,index) in slides" :key="index">
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
		<!--adbanner area-->
		<div>
			<img v-lazy="adBanner" width="100%">
		</div>

		<!--Recommend goods area-->
		<div class="recommend-area">
			<div class="recommend-title">商品推荐</div>
			<div class="recommend-body">
				<swiper :options="swiperOption">
					<swiper-slide v-for="(item,index) in recommend " :key="index">
						<div class="recommend-item">
							<img :src="item.image" width="80%">
							<div>{{item.goodsName}}</div>
							<div>{{item.price | currency}}({{item.mallPrice | currency}})</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
		<floor-component :floor-data="floor1" :floor-title="floorName.floor1"></floor-component>
		<floor-component :floor-data="floor2" :floor-title="floorName.floor2"></floor-component>
		<floor-component :floor-data="floor3" :floor-title="floorName.floor3"></floor-component>

		<!--Hot Area-->
		<div class="hot-area">
			<div class="hot-title">热卖商品</div>
			<div class="hot-goods">
				<!--这里需要一个list组件-->
				<van-list>
					<van-row gutter="20">
						<van-col span="12" v-for="(item , index) in hotGoods" :key="index">
							<goods-info
								:goods-id="item.goodsId"
								:goods-image="item.image"
								:goods-name="item.name"
								:goods-price="item.price"
							></goods-info>
						</van-col>
					</van-row>
				</van-list>
			</div>
		</div>
	</div>
</template>
<script>
	import "swiper/dist/css/swiper.css";
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import { mapState, mapActions } from 'vuex';
    import { GET_INDEX_DATA} from '@/vuex/mutationTypes';
	import floorComponent from "@/components/Floor";
	import goodsInfo from "@/components/GoodsInfo";

	export default {
		name: "index",
		components: { swiper, swiperSlide, floorComponent, goodsInfo },

		data() {
			return {
				swiperOption: {
					slidesPerView: 3
				},
			};
        },
        computed:{
            ...mapState('index',{
                slides:state => state.slides,
                category:state => state.category,
                adBanner:state => state.adBanner,
                recommend:state => state.recommend,
                floor1:state => state.floor1,
                floor2:state => state.floor2,
                floor3:state => state.floor3,
                floorName:state => state.floorName,
                hotGoods:state => state.hotGoods,
            })
        },
		mounted() {
            this.getData();
		},
		methods: {
            ...mapActions('index',{
                getData:GET_INDEX_DATA
            }),
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

	.recommend-area {
		background-color: #fff;
		margin-top: 0.15rem;
		.recommend-title {
			border-bottom: 1px solid #eee;
			font-size: 14px;
			padding: 0.1rem;
			color: #e5017d;
		}
		.recommend-body {
			border-bottom: 1px solid #eee;
		}
		.recommend-item {
			width: 99%;
			height: 308px;
			border-right: 1px solid #eee;
			font-size: 12px;
			text-align: center;
		}
	}

	.hot-area {
        text-align: center;
        font-size: 14px;
		.hot-title {
			height: 0.9rem;
			line-height: 0.9rem;
		}
	}
	.hot-goods {
		overflow: hidden;
		background-color: #fff;
	}
</style>

