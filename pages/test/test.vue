<template>
	<view class="containar">
		<view class="avatarUrl">
			<button type="balanced" open-type="chooseAvatar" @chooseavatar="onChooseavatar">
				<image :src="avatarUrl" class="refreshIcon"></image>
			</button>
		</view>
		<view class="nickname">
			<text>昵称：</text>
			<input type="nickname" class="weui-input" :value="nickName" @blur="bindblur" placeholder="请输入昵称"
				@input="bindinput" />
		</view>

		<view class="btn">
			<view class="btn-sub" @click="onSubmit">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarUrl: '',
				nickName: ''
			};
		},
		onLoad(option) {},
		methods: {
			bindblur(e) {
				this.nickName = e.detail.value; // 获取微信昵称
			},
			bindinput(e) {
				this.nickName = e.detail.value; //这里要注意如果只用blur方法的话用户在输入玩昵称后直接点击保存按钮，会出现修改不成功的情况。
			},
			onChooseavatar(e) {
				let self = this;
				let {
					avatarUrl
				} = e.detail;
				uni.showLoading({
					title: '加载中'
				});
				uni.uploadFile({
					url: '后台uploadFile接口',
					filePath: avatarUrl,
					name: 'file',
					header: {
						token: '自己的token',
					},
					success: uploadFileRes => {
						// 注意：这里返回的uploadFileRes.data 为JSON 需要自己去转换
						let data = JSON.parse(uploadFileRes.data);
						if (data.code === 0) {
							this.avatarUrl = data.data;
						}
					},
					fail: (error) => {
						uni.showToast({
							title: error,
							duration: 2000
						});
					},
					complete: () => {
						uni.hideLoading();
					}
				});
			},
			onSubmit() {
				if (this.nickName === '') {
					uni.showToast({
						icon: 'none',
						title: '请输入昵称'
					})
					return false;
				}
				// 这里做自己公司的存储逻辑
			}
		}
	};
</script>

<style>
	.btn {
		width: 100%;
	}

	.btn-sub {
		width: 670rpx;
		margin: 80rpx auto 0;
		height: 90rpx;
		background: #DF8585;
		border-radius: 45rpx;
		line-height: 90rpx;
		text-align: center;
		font-size: 36rpx;
		color: #fff;
	}

	.nickname {
		background: #fff;
		padding: 20rpx 30rpx 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.weui-input {
		padding-left: 60rpx;
	}

	.avatarUrl {
		padding: 80rpx 0 40rpx;
		background: #fff;
	}
	
	
	.jt {
		width: 14rpx;
		height: 28rpx;
	}
	
	.refreshIcon {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
	}
	
	button {
		background: #fff;
		line-height: 80rpx;
		height: auto;
		width: auto;
		padding: 20rpx 30rpx;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>