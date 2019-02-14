<template>
	<view>  
		<view class="image-view">
			 <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item @click="onImgClick(0)" class="swiper-item">
					<image class="uni-product-image"  :src="product.image" ></image>
				</swiper-item>
				<swiper-item @click="onImgClick(1)" class="swiper-item">
					<image class="uni-product-image" :src="product.image" ></image>
				</swiper-item>
				<swiper-item @click="onImgClick(2)" class="swiper-item">
					<image class="uni-product-image" :src="product.image" ></image>
				</swiper-item>
			</swiper>  
		</view>
		<view class="uni-product-title">{{product.title}}</view>
		<view class="uni-product-price">
			<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
			<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
			<text class="uni-product-tip">{{product.tip}}</text> 
		</view>
		 <view class=""> 
			 <image @click="onCartClick" src="../../../static/aliiconfont/cart.png" mode="" class="shop-cart" style=""></image>
			  <view class="button-sp-area"> 
                <button class="mini-btn" type="warn" size="mini" @click="onCartListClick">购物车<uni-badge :text="cartCount" type="warning"></uni-badge></button>
            </view>
			  
		 </view>
	</view>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入 
	import {pushCartAction} from '../../../store/action/author'
	import uniBadge from "../../../components/uni-badge.vue";
	export default {
		components: {
			uniBadge
		},
		data() {
			return {
				// img list
				product:{},
				// swiper
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500
			};
		},
		onLoad(event) {
			// 目前在某些平台参数会被主动 decode，暂时这样处理。 
			try {
				this.product = JSON.parse(decodeURIComponent(event.product));
			} catch (error) {
				this.product = JSON.parse(event.product);
			} 
			// console.log(JSON.stringify(this.product));
		},
		computed:{ 
		  ...mapState({   
			 cart:state=>state.shopCart.cart  
		  }),  
		  ...mapGetters('shopCart',{
			 cartCount:'getCartCount' 
		  }),
		},
		methods:{
			  ...mapActions('shopCart',[  
				  pushCartAction
			  ]),
			onImgClick:function(e){
				// 预览图片
				console.log(e);
				uni.previewImage({
					urls: [this.product.image]
				}); 
			},
			onCartClick:function(e){ 
				this.pushCartAction(this.product.id);
				uni.showToast({title: "已添加到购物车"});
// 				console.log(JSON.stringify(this.cart));
// 				console.log(this.cartCount);
			},
			onCartListClick:function(){
				uni.navigateTo({
					url: '/pages/template/cartList/cartList'
				});
			}
		}
	}
</script>

<style lang="less">
@imgViewHeight:660upx;
@imgViewWidth:100%;
@imgHeight:100%;
@imgWidth:660upx;

/* swiper */
.swiper{
	height: @imgHeight;
}

.swiper-item{
	text-align: center;
}
	
/* detail	 */
.image-view {
    height: @imgViewHeight;
    width: @imgViewWidth;
	margin:12upx 0;
}

.uni-product-image {
   height: @imgHeight;
   width: @imgWidth;
}

.uni-product-title {
	padding-left: 15upx;
    width: 95%;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
	line-height:1.5;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.uni-product-price {
	margin-left: 15upx;
	margin-top:10upx;
    font-size: 28upx;
	line-height:1.5;
    position: relative;
}

.uni-product-price-original {
    color: #e80080;
}

.uni-product-price-favour {
    color: #888888;
    text-decoration: line-through;
    margin-left: 10upx;
}

.uni-product-tip {
    position: absolute;
    right: 10upx;
    background-color: #ff3333;
    color: #ffffff;
    padding: 0 10upx;
    border-radius: 5upx;
}

.shop-cart{
	height: 60upx;
	width: 60upx;
	margin-left: 10upx;
}
</style>
