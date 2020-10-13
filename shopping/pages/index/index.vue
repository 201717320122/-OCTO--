<template>
	<view>
		<view class="content">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item, index) in banners[0]" :key="index">
					<view class="swiper-item">
						<!-- {{banners}} -->
						<image :src="item.image"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="cate-grid-list">
				<uni-grid :column="4" :show-border="false">
					<uni-grid-item v-for="(item,index) in banners[1]" :key="index">
						<!-- {{item}} -->
						<image class="cart_img" :src="item.image"></image>
						<text class="text">{{item.title}}</text>
					</uni-grid-item>
				</uni-grid>
			</view>

			<view v-for="(item,index) in banners[2]" :key="index">
				<image :src="item.image" class="cart2_img"></image>
			</view>
			<view>
				<text class="br"></text>
			</view>
			<view class="cart3_img">

				<image src="../../static/2.png"></image>
				<text>分类精品</text>
			</view>

			<view>
				<text class="br1"></text>
			</view>
		</view>
		<!-- 精品沙发 -->
		<!-- getSofa -->
		<view class="sofa">
			<view v-for="(item1,index) in sofa" :key="index">
				<text class="sofa-name">{{item1.description}}</text>
				<scroll-view class="sofa-list" scroll-x>
					<view class="sofa-wrapper">
						<view class="sofa-item" v-for="(item2,index) in item1.products" :key="item2.id">
							<navigator :url="`../products/products?id=${item2.id}`">
								<image :src="item2.image[0]"></image>
								<text class="title clamp">{{item2.title}}</text>
								<text class="price">￥{{item2.price}}</text>
							</navigator>
						</view>
						<!-- <navigator :url="`../category-list/category-list?id=${item.category_id}`"> -->
						<view class="sofa-more">
							<text>更多</text>
							<text>More+</text>
						</view>
						<!-- </navigator> -->
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex';
	import unigrid from '../../components/uni-grid/uni-grid.vue'

	export default {
		data() {
			return {
				// title: 'Hello',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true, //是否显示面板指示点
				autoplay: true, //是否自动切换
				interval: 2000, //自动切换时间间隔
				duration: 500, //滑动动画时长
			}
		},
		onLoad: function(options) {
			this.getData();
		},
		computed: {
			...mapGetters('banner', {
				banners: 'banners'
			}),
			...mapGetters('banner', {
				sofa: 'sofa'
			})
		},
		methods: {
			async GetBanner() {
				await this.$store.dispatch('banner/GetBanner');
			},
			async GetSofa() {
				await this.$store.dispatch('banner/GetSofa');
			},
			async getData() {
				// uni.showLoading({
				// 	title: '数据加载中...'
				// });
				Promise.all([this.GetBanner(), this.GetSofa()])
				// uni.hideLoading();
			},
		},
	}
</script>

<style lang="scss">
	.swiper image {
		width: 100%;
	}

	.cate-grid-list {
		width: 100%;
		margin-top: 20rpx;
		display: flex;
	}

	.cart_img {
		width: 100rpx;
		height: 100rpx;
		margin: 0 auto;
	}

	.text {
		font-size: 30rpx;
		text-align: center;
	}

	.cart2_img {
		width: 95%;
		height: 60px;
		margin-left: 15rpx;
		// margin: 0 auto;
	}

	.br {
		width: 100%;
		height: 5px;
		display: block;
		background: #F1F1F1;
	}

	.cart3_img {
		width: 100%;
		height: 130rpx;
		display: flex;
	}

	.cart3_img image {
		width: 100rpx;
		height: 100rpx;
		margin-top: 15rpx;
	}

	.cart3_img text {
		margin-left: 10px;
		display: block;
		line-height: 100rpx;
		margin-top: 15rpx;
	}

	.br1 {
		width: 100%;
		height: 5px;
		display: block;
		background: #F1F1F1;
	}

	// .sofa1_img{
	// 	width: 20rpx;
	// 	height: 20rpx;
	// }
	//精品沙发女装
	.sofa {
		.sofa-name {
			padding: 9rpx 0 9rpx 9rpx;
			border-left: 6rpx solid #fc7592;
			font-size: 34rpx;
			display: block;
			border-bottom: 6rpx solid #F1F1F1;
		}

		.sofa-list {
			// box-shadow: 16rpx 0 0 0 rgba(255,222,41,.5);
			white-space: nowrap;
			margin: 25rpx 0;
			background: #FFFFFF;

			.sofa-wrapper {
				display: flex;
				align-items: flex-start;
			}

			.sofa-item {
				width: 200rpx;
				margin-left: 20rpx;
				font-size: 28rpx;
				color: #303133;
				line-height: 1.8;

				image {
					width: 186rpx;
					height: 186rpx;
					border-radius: 6upx;
				}

				.title {
					display: block;
					white-space: nowrap;
					text-overflow: ellipsis;
					-o-text-overflow: ellipsis;
					overflow: hidden;
				}

				.price {
					color: #DD524D;
				}
			}
		}

		.sofa-more {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			flex-shrink: 0;
			width: 180rpx;
			height: 180rpx;
			border-radius: 6rpx;
			background: #f3f3f3;
			font-size: 30rpx;
			color: #909399;
		}
	}
</style>
