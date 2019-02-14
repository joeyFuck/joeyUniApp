<template>
	<view> 
		<text class="title">哈罗吖</text>
		<button type="primary" @click="testBackClick">返回</button>
		<button type="primary" @click="testLessClick">to less</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			testBackClick:function(e){
				// console.log('testBackClick');
				// console.log(e);
				uni.navigateBack({
					delta: 1
				});
			},
			testLessClick:function(e){
				uni.navigateTo({
					url: '/pages/common/testLess/testLess'
				});
			}
		}
	}
</script>

<style>
 @import "./style.css";
 
 
</style>
