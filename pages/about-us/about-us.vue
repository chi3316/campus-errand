<template>
	<view>
		<view class="profile">
			<uni-card padding="0" spacing="0">
				<template v-slot:cover>
					<view class="custom-cover">
						<image class="cover-image" mode="aspectFill" src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/a2fe9e9377d24610e4c8a7d96eca500.png">
						</image>
					</view>
				</template>
			</uni-card>
		</view>
		<view class="content">
			<text style="size: 50;">
				华园代跑专注于为全国高校提供最方便快捷的校园生活纺合服务平台。我们的理念互利共存，共建“开放、合作、共赢”的校园服务产业互联网生态。你可以成为一个发布者，发布你的需求;也可以做一个接收者，接收任务并完成他人的需求。
			</text>
		</view>
		<view class="content2">
			<uni-list>
				<uni-list-item :show-extra-icon="true" title="跑跑乐校园用户协议" clickable showArrow
					@click="onClick" />
				<uni-list-item :show-extra-icon="true" title="商户入驻平台协议" clickable showArrow
					 @click="onClick" />
				<uni-list-item :show-extra-icon="true" title="消费者权益保障说明" clickable showArrow
					@click="onClick" />
				<uni-list-item :show-extra-icon="true" title="食品安全管理办法" clickable showArrow
					@click="onClick" />
			</uni-list>
		</view>
	</view>
</template>

<script>
	import fuiCard from "@/components/firstui/fui-card/fui-card.vue"
	export default {
		components: {
			fuiCard,
		},
		data() {
			return {
				
			}
		},
		methods: {
			onClick() {
				uni.navigateTo({url : "/pages/confirm-protocol/confirm-protocol"})
			}
		}
	}
</script>

<style>
	.profile {
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
	.content {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 20rpx rgba(0,0,0,.1);
		margin-left: 60rpx;
		margin-right: 60rpx;
		margin-top: 0rpx;
	}
	.content2 {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 20rpx rgba(0,0,0,.1);
		margin-left: 60rpx;
		margin-right: 60rpx;
		margin-top: 50rpx;
	}
</style>
