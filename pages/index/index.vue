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
				<image src="../../static/快递.png" style="width: 50%;" mode="widthFix"></image>
				<view>代取快递</view>
			</view>

			<view class="category-item">
				<image src="../../static/取餐.png" style="width: 50%;" mode="widthFix"></image>
				<view>代取餐品</view>
			</view>

			<view class="category-item">
				<image src="../../static/零食.png" style="width: 50%;" mode="widthFix"></image>
				<view>代买零食</view>
			</view>

			<view class="category-item">
				<image src="../../static/花.png" style="width: 50%;" mode="widthFix"></image>
				<view>代买鲜花</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgs: [
					require('../../static/banner1.png'),
					require('../../static/banner2.png')
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
						this.init()
					}
				}
			})
		},
		onHide() {
			clearInterval(this.inter)
			this.inter = null
		},
		methods: {
			//封装微信获取用户code，避免嵌套
			login() {
				return new Promise((resolve, reject) => {
					uni.login({
						success(res) {
							resolve(res);
						},
						fail(err) {
							reject(err);
						}
					});
				});
			},
			async getWechatOpenIdByCode(params) {
			  try {
			    const response = await uni.request({
			      url: 'http://localhost:8080/user/login', // 替换成实际的后端接口地址
			      method: 'GET',
			      data: params,
			    });
			
			    // 处理后端返回的数据
			    const data = response.data;
			
			    return data; // 返回后端返回的数据
			  } catch (error) {
			    console.error('请求失败:', error);
			    throw error; // 抛出异常，让调用者处理
			  }
			},
			async init() {
			    //调用微信登陆
			    let res = await this.login()
			    if (res.code && ['login:ok'].includes(res.errMsg)) {
			        //后端通过code调用微信API返回openid/unionid/session_key参数， 存储起来,前端无法直接调用微信相关API
			        let openIdRes = await getWechatOpenIdByCode({ code: res.code })
					console.log('请求响应：',openIdRes)
			        if (openIdRes.success) {
			            let { openId, sessionKey } = openIdRes
			            this.openId = openId
			            this.sessionKey = sessionKey
			        }
			    } else {
			        //异常处理，再次发起请求或者抛出异常
			        // .....
			    }
			},

			load() {
				this.$request.get('/notice/selectAll').then(res => {
					this.noticeList = res.data || []
					let i = 0
					this.content = this.noticeList.length ? this.noticeList[i].content : ''

					//切换公告内容
					if (this.noticeList.length > 1) {
						this.inter = setInterval(() => {
							i++
							if (i === this.noticeList.length) {
								i = 0
							}
							this.content = this.noticeList[i].content
						}, 5000)
					}
				})
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