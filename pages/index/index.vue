<template>
	<view style="padding: 20rpx;">
		<view style="margin-bottom: 20rpx;">
			<swiper circular indicator-dots autoplay :interval="interval" :duration="duration" style="height: 350rpx;"
				indicator-color="rgba(255,255,255,0.6)" indicator-active-color="#3CB371">
				<swiper-item v-for="item in imgs" :key="item">
					<image :src="item" alt="" style="width: 100%; height: 350rpx;"></image>
				</swiper-item>
			</swiper>
		</view>
		<view style="margin-bottom: 20rpx;">
			<uni-notice-bar v-if="content" show-icon speed="50" scrollable :text="content" />
		</view>
		<view style="display: flex;" class="box">
			<view class="category-item">
				<image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/%E5%BF%AB%E9%80%92.png"
					style="width: 50%;" mode="widthFix"></image>
				<view>代取快递</view>
			</view>

			<view class="category-item">
				<image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/%E5%8F%96%E9%A4%90.png"
					style="width: 50%;" mode="widthFix"></image>
				<view>代取餐品</view>
			</view>

			<view class="category-item">
				<image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/%E9%9B%B6%E9%A3%9F.png"
					style="width: 50%;" mode="widthFix"></image>
				<view>代买零食</view>
			</view>

			<view class="category-item">
				<image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/%E8%8A%B1.png" style="width: 50%;"
					mode="widthFix"></image>
				<view>代买鲜花</view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request'
	export default {
		data() {
			return {
				imgs: [
					'https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/banner1.png',
					'https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/banner2.png',

				],
				interval: 3000,
				duration: 500,
				content: '这是测试版本~~~',
				noticeList: [],
				inter: null
			}
		},

		onShow() {
			this.load()
			//进入小程序需要用户授权微信登录
			uni.showModal({
				title: '温馨提示',
				content: '授权微信登录之后才能使用小程序哦',
				showCancel: false,
				success: (res) => {
					if (res.confirm) {
						// 用户点击确认后的操作
						uni.login({
							"provider": "weixin",
							"onlyAuthorize": true, // 微信登录仅请求授权认证
							success: function(event) {
								const {
									code
								} = event
								//客户端成功获取授权临时票据（code）, 向业务服务器发起登录请求。
								console.log("code : " + code)
								const userLoginDTO = {
									code: code
								};
								request.post("/user/user/login", userLoginDTO).then(res => {
									// 请求成功，处理响应
									console.log(res.data);
									// 响应数据中包含令牌的字段名是 token
									const token = res.data.token;

									if (token) {
										// 将令牌存储到本地存储中
										uni.setStorageSync('xm-user', {
											token
										});
									}
									
								});
							},
							fail: function(err) {
								// 登录授权失败
								// err.code是错误码
							}
						})
					}
				}
			})
		},
		onHide() {
			clearInterval(this.inter)
			this.inter = null
		},
		methods: {
			load() {
				// this.$request.get('/notice/selectAll').then(res => {
				// 	this.noticeList = res.data || []
				// 	let i = 0
				// 	this.content = this.noticeList.length ? this.noticeList[i].content : ''

				// 	//切换公告内容
				// 	if (this.noticeList.length > 1) {
				// 		this.inter = setInterval(() => {
				// 			i++
				// 			if (i === this.noticeList.length) {
				// 				i = 0
				// 			}
				// 			this.content = this.noticeList[i].content
				// 		}, 5000)
				// 	}
				// })
			}
		}
	}
</script>

<style>
	.category-item {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction:
			column;
		grid-gap: 20rpx;
	}
</style>