<template>
	<view>
		<view class="box" style="margin: 20rpx;">
			<view class="text-container">
				<view class="text">建议意见</view>
				<view class="input-wrapper">
					<input class="input" placeholder="请详细描述您的建议或意见" />
				</view>
			</view>

			<view class="image-container">
				<uni-file-picker limit="4" title="上传图片"></uni-file-picker>
			</view>

			<!-- 提交按钮 -->
			<view class="button-container">
				<button class="submit-button" @click="submit">
					<view>
						立即提交
					</view>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			url: '',
		}
	},
	methods: {
		submit() {

		},
		uploadImage() {
			this.$request.post("/user/common/upload")
		}
	}
}
</script>

<style>
.text-container {
	display: flex;
	align-items: center;
}

.image-container {
	flex-direction: column;
	/* 垂直排列子元素 */
	align-items: center;
	/* 子元素居中对齐 */
}

.button-container {
	margin-top: 20rpx;
}

.text {
	margin-right: 20px;
	/* 右侧间距 */
	line-height: 1.5;
}

.image-text {
	margin-bottom: 20rpx;
	/* 文字下方留出间距 */
}

.input-wrapper {
	flex: 1;
	/* 输入框占据剩余空间 */
}

.input {
	height: 80rpx;
	/* 设置输入框高度 */
	border: none;
	/* 移除边框 */
	overflow: auto;
	/* 当内容溢出时自动显示滚动条 */
	white-space: normal;
	width: 100%;
	/* 输入框宽度填满容器 */
	box-sizing: border-box;
	/* 设置盒子模型为边框盒 */
	border: none;
	/* 移除边框 */
	line-height: 1.5;
}

.submit-button {
	padding: 10px 20px;
	/* 按钮内边距 */
	background-color: #007bff;
	/* 按钮背景色 */
	color: #fff;
	/* 按钮文字颜色 */
	border: none;
	/* 移除按钮边框 */
	border-radius: 5px;
	/* 按钮圆角 */
	cursor: pointer;
	/* 鼠标样式为手型 */
	height: 100rpx;
}
</style>