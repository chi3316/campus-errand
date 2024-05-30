<template>
	<view class="weixin">
		<image class="cover-image" mode="widthFix" src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/55f6f01850df7a174a8e7df7b4af3a2.jpg">
		</image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.weixin {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10rpx 0;
		width: 100%;
	}
	.custom-cover {
		position: relative;
	}
	.cover-image {
		border-radius: 16rpx; /* 设置圆角半径 */
	}
</style>
