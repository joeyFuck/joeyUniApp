<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view class="uni-title uni-common-mt">
                flex-direction: row
                <text>\n横向布局</text>
            </view>
            <view class="uni-flex uni-row">
                <view class="uni-flex-item uni-bg-red">A</view>
                <view class="uni-flex-item uni-bg-green">B</view>
                <view class="uni-flex-item uni-bg-blue">C</view>
            </view>
            <view class="uni-title uni-common-mt">
                flex-direction: column
                <text>\n纵向布局</text>
            </view>
            <view class="uni-flex uni-column">
                <view class="uni-flex-item flex-item-V uni-bg-red">A</view>
                <view class="uni-flex-item flex-item-V uni-bg-green">B</view>
                <view class="uni-flex-item flex-item-V uni-bg-blue">C</view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">

</style>
