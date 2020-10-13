<template>
	<view class="content">
		<view class="left-aside">
			<view v-for="(item,index) in categorys" :key="item.id" class="f-item" :class="{active: item.id === currentId}" @click="leftClick(item)">
				{{item.name}}
			</view>
		</view>
		<view class="right-aside">
			<view v-for="item in categorys" :key="item.id" class="s-list" v-if="item.id===currentId">
				<view v-for="item1 in item.childlist" :key="item1.id">
					<text class="s-item">{{item1.name}}</text>
					<view class="t-list">
						<view class="t-item" v-for="titem in item1.childlist" :key="titem.id" @click="goodlist(titem.id)">
							<!-- <navigator :url="`../category-list/category-list?id=${item.category_id}`"> -->
							<image :src="titem.image"></image>
							<text>{{titem.name}}</text>
							<!-- </navigator> -->
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex';
	export default {
		data() {
			return {
				currentId: 2
			};
		},
		onLoad: function(options) {
			this.getData()
		},
		computed: {
			...mapGetters('category', {
				categorys: 'categorys'
			})
		},
		methods: {
			getData() {
				this.$store.dispatch('category/GetCategory')
			},
			leftClick(item){
				this.currentId = item.id
			},
			// 点击跳转分类列表
			goodlist(id){
				
				// const id = item.id
				console.log(id)
				uni.navigateTo({
					url:'../category-list/category-list?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
	page,
	.content {
		height: 100%;
		background-color: #f8f8f8;
	}

	.content {
		display: flex;
	}

	.left-aside {
		flex-shrink: 0;
		width: 200upx;
		height: 100%;
		background-color: #fff;
	}

	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100upx;
		font-size: 28upx;
		// color: $font-color-base;
		position: relative;

		&.active {
			color: #ff3c3f;
			background: #f8f8f8;

			&:before {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 40upx;
				width: 8upx;
				background-color: #ff3c3f;
				// opacity: .8;
			}
		}
	}

	.right-aside {
		flex: 1;
		overflow: hidden;
		padding-left: 20upx;
	}

	.s-item {
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
		// color: $font-color-dark;
	}

	.t-list {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		padding-top: 12upx;

		&:after {
			content: '';
			flex: 99;
			height: 0;
		}
	}

	.t-item {
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 176upx;
		font-size: 26upx;
		color: #666;
		padding-bottom: 20upx;

		image {
			width: 140upx;
			height: 140upx;
		}
	}
</style>