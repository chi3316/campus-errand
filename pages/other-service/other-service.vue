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
				<view class="text-desc">
					上传图片
				</view>
				<view class="file-upload">
					<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
						:maxCount="10"></u-upload>
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
				<uni-list-item :show-extra-icon="true" :extra-icon="info" title="距离过长，无人简单建议增加金额" />
			</uni-list>
			<view>
				<fui-button radius="96rpx" @click="submit">发布订单</fui-button>
			</view>
		</view>
	</view>
</template>

<script>
import apiConfig from '@/config.js'
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
export default {
	components: {
		fuiButton,
	},
	data() {
		return {
			fileList1: [],
			orderSubmitDTO: {
				addressBookId: '',
				departureAddress: '',
				title: '其它帮助',
				amount: '',
				remark: '',
				imageUrl: '', // 在这里可为空
				info: '',
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
		// 删除图片
		deletePic(event) {
			this[`fileList${event.name}`].splice(event.index, 1)
		},
		// 新增图片
		async afterRead(event) {
			// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
			let lists = [].concat(event.file)
			let fileListLen = this[`fileList${event.name}`].length
			lists.map((item) => {
				this[`fileList${event.name}`].push({
					...item,
					status: 'uploading',
					message: '上传中'
				})
			})
			for (let i = 0; i < lists.length; i++) {
				const result = await this.uploadFilePromise(lists[i].url)
				let item = this[`fileList${event.name}`][fileListLen]
				this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
					status: 'success',
					message: '',
					url: result
				}))
				fileListLen++
			}
		},
		// 上传到服务器
		uploadFilePromise(url) {
			const baseUrl = process.env.NODE_ENV === 'develpoment' ? apiConfig.dev.baseUrl : apiConfig.prod.baseUrl
			return new Promise((resolve, reject) => {
				let a = uni.uploadFile({
					url: `${baseUrl}/user/common/upload`,
					filePath: url,
					name: 'file',
					header: { token: uni.getStorageSync("xm-user")?.token },
					success: (res) => {
						const url = JSON.parse(res.data).data;
						console.log(url)
						this.orderSubmitDTO.imageUrl = url
						// 逻辑处理
						setTimeout(() => {
							resolve(res.data.data)
						}, 500)
					}
				});
			})
		},
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
	},
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

.file-upload {
	width: 100%;
	margin-bottom: 20rpx;
}
</style>
