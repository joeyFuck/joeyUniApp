<template>
	<view class="page">
		<page-head :title="title"></page-head>
		<view class="title">购物车</view>
		<view class="uni-list" v-if="cartCount!=0">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in cartList" :key="key">
				<view class="uni-media-list uni-collapse" @click="trigerCollapse(key)">
					<view class="uni-media-list-logo">
						<image v-if="showImg" :src="value.goods.image"></image>
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">
							{{value.goods.tip}}
							数量:{{value.count}}
						</view> 
						<view class="uni-media-list-text-bottom uni-ellipsis">{{value.goods.title}}</view>
					</view>
				</view> 
			</view>
		</view>
		 <view class="" v-if="cartCount==0">
		 	当前购物车为空
		 </view>
	</view>
</template>
<script>
	import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入 
	export default {
		data() {
			return {
				title: 'media-list',
				showImg: false, 
			}
		},
		computed:{ 
		  ...mapState({   
			 cartList:state=>state.shopCart.cart  
		  }),  
		   ...mapGetters('shopCart',{
			 cartCount:'getCartCount' 
		  }),
		},
		onLoad() {
			setTimeout(() => {
				this.showImg = true;
			}, 400)
		},
		methods:{
			  
		}
	}
</script> 

<style lang="less">
.title {
	padding: 20upx;
}
</style>
