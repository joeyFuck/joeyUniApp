<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
        </view>
		<view>
		    <text class="title">{{intro}}</text>
			<button type="primary" plain="true"  @click="testClick">按钮</button>
			<button type="default" plain="true"  @click="photoClick">photo</button>
			<button type="default" plain="true"  @click="viewClick">view</button> 
			<button type="default" plain="true"  @click="payClick">pay</button>
		</view> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				intro:'it is joey'
			}
		},
		onLoad() {

		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/about/about'
			});
		},
		methods: {
			testClick:function(e){
				// console.log(JSON.stringify(e));
				uni.navigateTo({
					url: '/pages/common/test/test'
				});
			},
			photoClick:function(e){
				uni.navigateTo({
					url: '/pages/common/testImg/testImg'
				});
			},
			viewClick:function(){
				uni.navigateTo({
					url: '/pages/common/testView/testView'
				});
			}, 
			payClick:function(){
				uni.navigateTo({
					url: '/pages/template/payment/payment'
				});
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
