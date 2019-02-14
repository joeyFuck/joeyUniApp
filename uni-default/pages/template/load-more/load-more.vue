<template>
	<view  class="page">
		<page-head :title="title"></page-head>
		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in list" :key="index">
				<view class="image-view">
					<image v-if="renderImage" class="uni-product-image" :src="product.image"  @click="productClick(product)"></image>
				</view>
				<view class="uni-product-title">{{product.title}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
					<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
					<text class="uni-product-tip">{{product.tip}}</text>
				</view>
			</view>
		</view>
		<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
	</view>
</template>
<script>
	import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入 
	import uniLoadMore from '../../../components/uni-load-more.vue'

	export default {
		data() {
			return {
				title: 'uni-load-more',
				list: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
			    renderImage: false
			}
		},
		computed:{ 
		  ...mapState({   
			 goodsList:state=>state.shopCart.goodsList  
		  }), 
		},
		onLoad() {
			this.loadData();
			setTimeout(()=> {
			    this.renderImage = true;
			}, 300);
		},  
		methods: {
			loadData() { 
				this.goodsList.forEach(item => {
					this.list.push(item);
				});  
			},
			productClick:function(product){
				// console.log(JSON.stringify(product));
				uni.navigateTo({
					url: '/pages/template/productDetail/productDetail?product='+ encodeURIComponent(JSON.stringify(product))
				});
			}
		}, 
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.loadingType = 1;
			
			setTimeout(() => {
				if (this.list.length > 26) {
					this.loadingType = 2;
					return;
				}
				this.loadData();
				this.loadingType = 0;
			}, 800);
			
// 			let list = [],
// 				maxItem = this.list[this.list.length - 1],
// 				length = maxItem + 6;
// 			for (let i = maxItem + 1; i < length; i++) {
// 				list.push(i);
// 			} 

// 			setTimeout(() => {
// 				if (length > 26) {
// 					this.loadingType = 2;
// 					return;
// 				}
// 				this.list = this.list.concat(list);
// 				this.loadingType = 0;
// 			}, 800);
		},
		components: {
			uniLoadMore
		}
	}
</script>

<style>

</style>
