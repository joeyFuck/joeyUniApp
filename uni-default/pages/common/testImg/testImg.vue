<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-common-mt">
			<form> 
				<view>
					<button type="primary" @click="chooseImageClick">测试选照片</button>
				</view>
				 <view class="page">
					<view class="image-list">
						<view class="image-item" v-for="(item,index) in array" :key="index">
							<view class="image-content">
								<image style="width: 200px; height: 200px; background-color: #eeeeee;" :mode="item.mode" :src="src"
									@error="imageError"></image>
							</view>
							<view class="image-title">{{item.text}}</view>
						</view>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>
<script> 
	export default {
		data() {
			return { 
				array: [{
					mode: 'scaleToFill',
					text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
				}, {
					mode: 'aspectFit',
					text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
				}, {
					mode: 'aspectFill',
					text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
				}],
				src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg'
			}
		},
		onUnload() {
				this.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg';
		},
		methods: { 
			chooseImageClick:function(){
				var that = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));
						console.log(that);
						// 预览图片
// 						uni.previewImage({
// 							urls: res.tempFilePaths
// 						});
						that.src = res.tempFilePaths[0];
						// this.imageList = this.imageList.concat(res.tempFilePaths);
					}
				}); 
			}
		}
	}
</script>

<style>
	.cell-pd {
		padding: 22upx 30upx;
	}

	.list-pd {
		margin-top: 50upx;
	}
</style>
