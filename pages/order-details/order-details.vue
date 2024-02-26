<template>
	<view>
		<view>
			<view style="margin-bottom: 20rpx; margin:20rpx; border: 20rpx;">
				<uni-notice-bar v-if="content" show-icon speed="50" scrollable :text="content" />
			</view>

			<view style="margin:20rpx;">
				<view class="title">发起人</view>
				<view>
					<uni-card title="基础卡片" :sub-title="timeInfo" :extra="status" :thumbnail="avatar" @click="onClick"
						is-full="true">
						<view>
							<view style="margin:20rpx;">
								<text class="uni-body">校门口拿kfc</text>
							</view>
							<view>
								<text class="uni-body" style="font-size: 30rpx;">订单已完成，相关信息已隐藏</text>
							</view>

							<view class="rounded-box">
								金额：5￥
							</view>
							<!-- 右下角按钮容器 -->
							<view class="button-container">
								<view class="circle-button">
									<uni-icons class="icon" type="chat" size="22" color="white"></uni-icons>
									<text class="button-text">私信</text>
								</view>
								<view class="circle-button">
									<uni-icons class="icon" type="phone" size="22" color="white"></uni-icons>
									<text class="button-text">电话</text>
								</view>
							</view>

						</view>
					</uni-card>
				</view>
			</view>

			<view style="margin:20rpx;" v-if="showHireling">
				<view class="title">接单人</view>
				<view>
					<uni-card title="基础卡片" sub-title="副标题"  :thumbnail="avatar" @click="onClick"
						is-full="true">
						<!-- 左上角按钮容器 -->
						<view class="right-up-button-container">
							<view class="circle-button">
								<uni-icons class="icon" type="chat" size="22" color="white"></uni-icons>
								<text class="button-text">私信</text>
							</view>
							<view class="circle-button">
								<uni-icons class="icon" type="phone" size="22" color="white"></uni-icons>
								<text class="button-text">电话</text>
							</view>
						</view>
						<!-- 订单号 -->
						<view class="order-info">
							<text class="info-label">订单号：</text>
							<text class="info-value">{{ orderNumber }}</text>
						</view>
						<view class="divider"></view>
						<!-- 联系管理员 -->
						<view class="order-info">
							<text class="info-label">联系管理员：</text>
							<text class="info-value">{{ orderNumber }}</text>
						</view>
						<view class="divider"></view>
						<!-- 支付时间 -->
						<view class="order-info">
							<text class="info-label">支付时间：</text>
							<text class="info-value">{{ paymentTime }}</text>
						</view>
						<!-- 横线分隔 -->
						<view class="divider"></view>
						<!-- 接单时间 -->
						<view class="order-info">
							<text class="info-label">接单时间：</text>
							<text class="info-value">{{ orderTime }}</text>
						</view>
						<view class="divider"></view>
						<!-- 完成时间 -->
						<view class="order-info">
							<text class="info-label">完成时间：</text>
							<text class="info-value">{{ orderTime }}</text>
						</view>
						<view class="divider"></view>
					</uni-card>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '太阳天或下雨天，人挤人的咖啡店，找一个能想你舒服的角落...',
				showHireling: true,
				avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
				timeInfo: '2024-2-26 13:05:22',
				status: '已完成',
				orderNumber: '123456789', // 替换成实际的订单号
				orderTime: '2024-02-26 13:05:22', // 替换成实际的下单时间
				paymentTime: '2024-02-26 13:10:45' // 替换成实际的支付时间
				// 其他订单信息，根据需要添加更多数据
			}
		},
		methods: {
			onClick() {
				console.log('点击查看地址信息')
			}
		}
	}
</script>

<style>
	.title {
		font-size: 30rpx;
		font-weight: 400;
		margin-bottom: 10rpx;
	}

	.button-container {
		position: absolute;
		bottom: 10px;
		/* 距离底部 10 像素 */
		right: 10px;
		/* 距离右侧 10 像素 */
		display: flex;
		flex-direction: row;
		/* 横向排列按钮 */
	}
	
	.right-up-button-container {
		position: absolute;
		top: 10px;
		/* 距离底部 10 像素 */
		right: 10px;
		/* 距离右侧 10 像素 */
		display: flex;
		flex-direction: row;
		/* 横向排列按钮 */
	}

	.circle-button {
		width: 40px;
		/* 调整按钮宽度 */
		height: 40px;
		/* 调整按钮高度 */
		background-color: #0291ff;
		/* 蓝色背景 */
		border-radius: 50%;
		/* 圆形按钮 */
		margin-right: 10px;
		/* 按钮间距 */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	.icon {
		width: 20px;
		/* 调整图标大小 */
		height: 20px;

	}

	.button-text {
		color: #fff;
		/* 文字颜色为白色 */
		font-size: 22rpx;
	}

	.rounded-box {
		width: 150rpx;

		bottom: 0;
		/* 调整底部位置 */
		left: 0;
		/* 调整左侧位置 */
		padding: 5rpx;
		/* 调整内边距 */
		color: #00aaff;
		/* 文字颜色为白色 */
		border-radius: 40rpx;
		/* 圆角半径 */

		border: 1rpx solid #fff;
		/* 添加边框 */
		border-color: #55aaff;
	}

	.order-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10px 0;
	}

	.info-label {
		font-size: 14px;
		color: #333;
	}

	.info-value {
		font-size: 14px;
		color: #666;
	}

	.divider {
		height: 1px;
		background-color: #ddd;
		margin: 10px 0;
	}
</style>