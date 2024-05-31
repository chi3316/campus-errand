<template>
	<view class="container">
		<view class="notice-bar-wrapper">
			<uni-notice-bar v-if="content" show-icon speed="50" scrollable :text="content" />
		</view>
		<view class="weixin">
			<image class="cover-image" mode="widthFix"
				src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/55f6f01850df7a174a8e7df7b4af3a2.jpg">
			</image>
		</view>

	</view>
</template>

<script>
export default {
	data() {
		return {
			content: '请添加管理员微信洽谈合作~'
		}
	},
	methods: {

	}
}
</script>

<style>
.custom-cover {
	position: relative;
}

.cover-image {
	border-radius: 16rpx;
	/* 设置圆角半径 */
}

.container {
	display: flex;
	flex-direction: column;
	/* 垂直排列子元素 */
	align-items: center;
	/* 子元素水平居中对齐 */
	padding: 0 20rpx;
	/* 在容器两侧添加间距 */
}

.notice-bar-wrapper {
	width: 100%;
	margin-top: 20rpx;
	margin-bottom: 20rpx;
}
</style>
