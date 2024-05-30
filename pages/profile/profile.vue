<template>
		<view style="margin: 20rpx">
			<view class="box" style=" justify-content: space-between; margin-bottom: 20rpx;">
				<view class="user-info-box" style="margin: 20rpx" @click="personalInfo">
					<fui-avatar size="large" :src="avatarUrl"></fui-avatar>
					<fui-text :text="nickName" :size="40" class="username-text"></fui-text>
				</view>
			</view>
			
			<view style="margin-bottom: 20rpx">
				<view class="box">
					<uni-list>
						<uni-list-item :show-extra-icon="true" :extra-icon="apply" title="申请接单" clickable showArrow
							@click="onClick" />
						<uni-list-item :show-extra-icon="true" :extra-icon="invite" title="邀请新人" clickable showArrow
							:to="`./chat`" @click="onClick" />
					</uni-list>
				</view>
			</view>
			
			<!-- list -->
			<view style="margin-bottom: 20rpx">
				<view class="box">
					<uni-list>
						<uni-list-item :show-extra-icon="true" :extra-icon="apply" title="申请接单" clickable showArrow
							@click="onClick" />
						<uni-list-item :show-extra-icon="true" :extra-icon="invite" title="邀请新人" clickable showArrow
							:to="`./chat`" @click="onClick" />
					</uni-list>
				</view>
			</view>
			
			<view style="margin-top: 20rpx">
				<view class="box">
					<uni-list>
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
		</view>
</template>

<script>
	import request from '@/utils/request';
	import fuiAvatar from "@/components/firstui/fui-avatar/fui-avatar.vue"
	import fuiIcon from "@/components/firstui/fui-icon/fui-icon.vue"
	import fuiText from "@/components/firstui/fui-text/fui-text.vue"
	export default {
		components: {
			fuiAvatar,
			fuiIcon,
			fuiText,
		},
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
				nickName: '阿飘',
				avatarUrl: 'https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/chatting.png' // 初始头像的 URL
			}
		},

		methods: {
			onClick(e) {
				console.log('执行click事件', e.data)
			},
			personalInfo() {
				console.log('跳转到个人信息');
				uni.navigateTo({
					url: '/pages/personal-info/personal-info',
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

	.user-info-box {
		display: flex;
		align-items: center;
	}

	.username-text {
		margin-left: 12px;
		margin-top: -30rpx;
	}
</style>