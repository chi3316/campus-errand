<template>
	<view>
		<view class="box" style="margin: 20rpx;">
			<view class="list">
				<view class="text-desc">
					帮助内容
				</view>
				<view class="input">
					<uni-easyinput type="textarea" v-model="orderSubmitDTO.remark"
						placeholder="请输入帮助信息"></uni-easyinput>
				</view>
				<!-- other lists -->
				<uni-list>
					<uni-list-item title="收货地址" clickable @click="chooseAddr">
						<template v-slot:footer>
							<text class="list-text">{{ destination }}</text>
						</template>
					</uni-list-item>
					<view class="remark-container">
						<view class="item">
							<uni-list-item title="取货地点" />
						</view>
						<view class="input-container">
							<input v-model="orderSubmitDTO.departureAddress" placeholder="请输入取货点" class="list-text" />
						</view>
					</view>
					<uni-list-item title="优惠券" clickable @click="chooseCoupon">
						<template v-slot:footer>
							<text class="list-text">请选择优惠券</text>
						</template>
					</uni-list-item>
					<view class="remark-container">
						<view class="item">
							<uni-list-item title="金额" />
						</view>
						<view class="input-container">
							<input v-model="orderSubmitDTO.amount" placeholder="输入金额" class="list-text" />
						</view>
					</view>
				</uni-list>
			</view>
		</view>

		<view class="box" style="margin: 20rpx;">
			<uni-list>
				<uni-list-item :show-extra-icon="true" :extra-icon="info"
					title="跑腿费1.5元起（楼栋远建议加价。多加一份餐建议加1元）代买的东西的钱另外给接单员。请勿发布违法内容！" />
				<uni-list-item :show-extra-icon="true" :extra-icon="info" title="距离过长，无人简单建议增加金额" />
			</uni-list>
			<view>
				<fui-button radius="96rpx" @click="submit">发布订单</fui-button>
			</view>
		</view>
	</view>
</template>

<script>
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
export default {
	components: {
		fuiButton,
	},
	data() {
		return {
			orderSubmitDTO: {
				addressBookId: '',
				departureAddress: '',
				title: '校园跑腿',
				amount: '',
				remark: '',
				imageUrl: '', // 在这里可为空
				info: '', // 在这里可为空
			},
			destination: '请选择地址',
			info: {
				size: "22",
				type: "info",
			},
		}
	},
	onLoad(options) {
		// 返回用户选择的地址簿id
		this.orderSubmitDTO.addressBookId = options.addrId;
		this.destination = options.destination;
	},
	methods: {
		checkValue() {
			const { addressBookId, departureAddress, amount, remark } = this.orderSubmitDTO;
			return addressBookId && departureAddress && amount && remark;
		},
		chooseCoupon() {
			uni.navigateTo({ url: "/pages/my-discount-coupon/my-discount-coupon" })
		},
		chooseAddr() {
			// 选择地址
			// 跳转到地址页面，携带参数choose
			console.log("跳转到选择地址页面")
			uni.navigateTo({ url: "../address/address?action=choose" })
		},
		submit() {
			if (!this.checkValue()) {
				uni.showToast({
					title: '发布失败！请填写完整信息',
					icon: 'none',
					duration: 2000
				});
				return;
			}
			// 成功填写数据
			// 发送请求
			this.$request.post("/user/order/submit", this.orderSubmitDTO).then((res) => {
				if (res.code === 1) {
					// 跳转页面
					uni.switchTab({
						url: '../orders/orders',
						success: function () {
							const page = getCurrentPages().pop();
							if (page == undefined || page == null) return;
							page.onLoad();
						},
					})
					// 弹窗
					uni.showToast({
						title: '订单发布成功',
						duration: 2000
					});
				}
			})
		},
	}
}
</script>

<style>
.text-desc {
	width: 100%;
	text-align: left;
	margin: 10rpx 0;
}

.item {
	flex-grow: 1;
	/* 使列表项占据尽可能多的空间 */
}


.input {
	width: 100%;
	margin-bottom: 20rpx;
	margin-top: 20rpx;
}

.remark-container {
	display: flex;
	align-items: center;
	/* 垂直居中对齐 */
	justify-content: space-between;
	/* 使内容在两端对齐 */
	width: 100%;
	/* 确保容器占据可用宽度 */
}

.input-container {
	margin-left: 20rpx;
	margin-right: 20rpx;
	text-align: right;
	/* 给输入框一些左边距，以防与列表项重叠 */
}

.list-text {
	font-size: 28rpx;
	/* 根据需要调整字体大小 */
	color: #808080;
}
</style>
