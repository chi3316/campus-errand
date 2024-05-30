<template>
	<view style="margin: 20rpx;">
		<view class="information">

			<uni-list>
				<view class="container">
					<view class="item">
						<uni-list-item :show-extra-icon="true" :extra-icon="persion" title="头像" />
					</view>
					<view class="avatar">
						<button class="avatar-button" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
							<u-avatar :src="avatarUrl" size="40" @click="changeAvatar"></u-avatar>
						</button>
					</view>
				</view>

				<view class="container">
					<view class="item">
						<uni-list-item :show-extra-icon="true" :extra-icon="name" title="名字" />
					</view>
					<view class="input-container">
						<input type="nickname" v-model="nickName" placeholder="请输入昵称" class="nickname-input" />
					</view>
				</view>

				<uni-list-item :show-extra-icon="true" :extra-icon="phone" title="电话" :rightText=phoneNumber />
			</uni-list>
		</view>


		<view class="function">
			<uni-list>
				<uni-list-item :show-extra-icon="true" :extra-icon="address" title="我的地址" clickable showArrow
					@click="toAddress" />
				<uni-list-item :show-extra-icon="true" :extra-icon="income" title="收支明细" clickable showArrow
					to="./chats" @click="onClick" />
			</uni-list>
			<uni-list>
				<uni-list-item :show-extra-icon="true" :extra-icon="apply" title="申请商户" clickable showArrow to="./chat"
					@click="onClick" />
				<uni-list-item :show-extra-icon="true" :extra-icon="campus" title="更换校区" clickable showArrow
					to="./chats" @click="onClick" />
			</uni-list>
		</view>
	</view>

</template>

<script>
	import fuiIcon from "@/components/firstui/fui-icon/fui-icon.vue"
	import fuiList from "@/components/firstui/fui-list/fui-list.vue"
	import fuiListCell from "@/components/firstui/fui-list-cell/fui-list-cell.vue"
	import fuiText from "@/components/firstui/fui-text/fui-text.vue"
	import request from "../../utils/request"

	export default {
		components: {
			fuiIcon,
			fuiList,
			fuiListCell,
			fuiText,
		},
		data() {
			return {
				persion: {
					color: '#ffaa00',
					size: '24',
					type: 'person'
				},
				address: {
					color: '#ff5500',
					size: '24',
					type: 'location'
				},
				income: {
					color: '#00aaff',
					size: '24',
					type: 'wallet'
				},
				apply: {
					color: '#ffaaff',
					size: '24',
					type: 'shop'
				},
				campus: {
					color: '#aa00ff',
					size: '24',
					type: 'map-pin-ellipse'
				},
				phone: {
					color: '#55aaff',
					size: '24',
					type: 'phone'
				},
				name: {
					color: '#00aa00',
					size: '24',
					type: 'link'
				},
				nickName: "华园代跑用户",
				phoneNumber: "178****7975",
				avatarUrl: 'https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/chatting.png' // 初始头像的 URL
			}
		},
		methods: {
			toAddress() {
				console.log('跳转到地址页面')
				uni.navigateTo({
					url: '/pages/address/address', // 跳转页面
				})
				// 发送 GET 请求
				const response = request.get('/user/address/list').then(res => {
					console.log('请求成功，数据:', res.data);
				})
			},
			onChooseAvatar(e) {
				const {
					avatarUrl
				} = e.detail;
				this.avatarUrl = avatarUrl;
				// 把新上传的头像发送到后端，把用户的url和name更新
				const userUpdateDTO = {url : this.avatarUrl , name : this.nickName}
				request.post('/user/user/update', userUpdateDTO).then(res => {
					console.log('请求成功');
				});
			}
		}
	}
</script>

<style>
	.information {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, .1);
		margin: 10rpx;
	}

	.function {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, .1);
		margin: 10rpx;
	}


	.container {
		display: flex;
		align-items: center;
		/* 垂直居中对齐 */
		justify-content: space-between;
		/* 使内容在两端对齐 */
		width: 100%;
		/* 确保容器占据可用宽度 */
	}

	.item {
		flex-grow: 1;
		/* 使列表项占据尽可能多的空间 */
	}

	.avatar {
		margin-left: 10px;
		/* 给头像一些左边距，以防与列表项重叠 */
	}

	.input-container {
		margin-left: 10px;
		/* 给输入框一些左边距，以防与列表项重叠 */
	}

	.uni-list-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.nickname-input {
		border: none;
		/* 去除边框 */
		padding: 0;
		/* 去除内边距 */
		width: auto;
		/* 使输入框宽度自动调整 */
		text-align: right;
		/* 使输入框内容靠右 */
		flex-grow: 1;
		/* 使输入框占据剩余空间 */
		margin-left: 15rpx;
		/* 给输入框一些左边距 */
		font-size: 16px;
		/* 确保输入框字体大小与其他文本一致 */
	}

	.avatar-button {
		border-radius: 50%;
		border: none;
		/* 去除边框 */
		background: none;
		/* 去除背景 */
		padding: 0;
		/* 去除内边距 */
		outline: none;
		/* 去除点击时的轮廓 */
		box-shadow: none;
		/* 去除阴影 */
		cursor: pointer;
		/* 鼠标悬停时显示指针 */
	}
</style>