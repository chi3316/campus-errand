<template>
	<view style="padding: 20rpx;">
		<view style="margin-bottom: 20rpx;">
		<swiper circular indicator-dots autoplay :interval="interval" :duration="duration"
						style="height: 350rpx;" indicator-color="rgba(255,255,255,0.6)" indicator-active-color="#3CB371">
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
				content : '这是测试版本~~~',
				noticeList: [],
				inter : null
			}
		},
		onShow() {
			this.load()
		},
		onHide() {
			clearInterval(this.inter)
			this.inter = null
		},
		methods: {
			load() {
				this.$request.get('/notice/selectAll').then(res => {
					this.noticeList = res.data || []
					let i = 0
					this.content = this.noticeList.length ? this.noticeList[i].content : ''
					
					//切换公告内容
					if(this.noticeList.length > 1) {
						this.inter = setInterval(() => {
							i++
							if(i === this.noticeList.length) {
								i = 0
							}
							this.content = this.noticeList[i].content
						},5000)
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
	column; grid-gap: 20rpx;
}
</style>