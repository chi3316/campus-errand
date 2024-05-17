<template>
	<veiw>
		<view style="margin: 20rpx">
			<view class="box" style=" justify-content: space-between; margin-bottom: 20rpx;">
				<view class="title">用户服务</view>
				<view style="display: flex;">
					<view class="grid-item-box" style="background-color: #fff;" @click="address">
						<image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/%E5%9C%B0%E5%9D%80.png" style="width: 50%; height: 92rpx;"></image>
						<text class="text">我的地址</text>
					</view>

					<view class="grid-item-box" style="background-color: #fff;" @click="onClick">
						<image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/%E6%94%B6%E6%94%AF.png" style="width: 50%; height: 92rpx;"></image>
						<text class="text">收支明细</text>
					</view>

					<view class="grid-item-box" style="background-color: #fff;" @click="onClick">
						<image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/%E8%AF%84%E4%BB%B7.png" style="width: 50%; height: 92rpx;"></image>
						<text class="text">评价中心</text>
					</view>

					<view class="grid-item-box" style="background-color: #fff;" @click="onClick">
						<image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/%E9%92%B1%E5%8C%85.png" style="width: 50%; height: 92rpx;"></image>
						<text class="text">我的钱包</text>
					</view>
				</view>
			</view>

			<!-- list -->
			<view class="box">
				<uni-list>
					<uni-list-item :show-extra-icon="true" :extra-icon="apply" title="申请接单" clickable showArrow
						@click="onClick" />
					<uni-list-item :show-extra-icon="true" :extra-icon="invite" title="邀请新人" clickable showArrow
						:to="`./chat`" @click="onClick" />
					<uni-list-item :show-extra-icon="true" :extra-icon="customerService" title="校区客服" clickable
						showArrow to="./chat" @click="onClick" />
					<uni-list-item :show-extra-icon="true" :extra-icon="feedback" title="反馈建议" clickable showArrow
						to="./chats" @click="onClick" />
					<uni-list-item :show-extra-icon="true" :extra-icon="cooperate" title="合作投诉" clickable showArrow
						to="./chats" @click="onClick" />
					<uni-list-item :show-extra-icon="true" :extra-icon="about" title="关于我们" clickable showArrow
						to="./chats" @click="onClick" />
				</uni-list>
			</view>
		</view>
	</veiw>
</template>

<script>
	import request from '@/utils/request';
	export default {
		data() {
			return {
				about: {
					color: '#ff5500',
					size: '22',
					type: 'gear-filled'
				},
				cooperate: {
					color: '#55f36f',
					size: '22',
					type: 'chatboxes-filled'
				},
				customerService: {
					color: '#4cd964',
					size: '22',
					type: 'weixin'
				},
				feedback: {
					color: '#0055ff',
					size: '22',
					type: 'compose'
				},
				invite: {
					color: '#55aaff',
					size: '22',
					type: 'staff'
				},
				apply: {
					color: '#ff557f',
					size: '22',
					type: 'personadd'
				},
			}
		},

		methods: {
			onClick(e) {
				console.log('执行click事件', e.data)
			},
			address() {
				console.log('跳转到地址页面')
				uni.navigateTo({
					url: '/pages/address/address', // 跳转页面
				})
				// 发送 GET 请求
				const response = request.get('/user/address/list').then(res => {
					console.log('请求成功，数据:', res.data);
				})
			},
		}
	}
</script>

<style>
	.grid-item-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px 0;
	}

	.text {
		font-size: 14px;
		margin-top: 5px;
	}

	.title {
		font-size: 19px;
		font-weight: 700;
		margin-bottom: 10rpx;
	}
</style>