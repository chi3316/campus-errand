<template>
	<view>
		<view class="box" style="margin: 20rpx">
			<view class="container">
				<view class="title">
					取快递
				</view>
				<view class="text-desc">
					快递大小
				</view>
				<view class="price-options">
					<uni-data-checkbox mode="tag" v-model="radio" :localdata="size"></uni-data-checkbox>
				</view>
				<view class="text-desc">
					取件信息
				</view>
				<view class="input">
					<uni-easyinput type="textarea" v-model="orderSubmitDTO.info"
						placeholder="请输入取件码或上传截图"></uni-easyinput>
				</view>
				<view class="text-desc">
					上传图片
				</view>
				<view class="file-upload">
					<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
						:maxCount="10"></u-upload>
				</view>

				<view class="list">
					<!-- other lists -->
					<uni-list>
						<uni-list-item title="收件地址" clickable @click="chooseAddr">
							<template v-slot:footer>
								<text class="list-text">{{ destination }}</text>
							</template>
						</uni-list-item>
						<view class="remark-container">
							<view class="item">
								<uni-list-item title="快递商家" />
							</view>
							<view class="input-container">
								<input v-model="orderSubmitDTO.departureAddress" placeholder="请输入取货点"
									class="list-text" />
							</view>
						</view>
						<uni-list-item title="优惠券" clickable>
							<template v-slot:footer>
								<text class="list-text">请选择优惠券</text>
							</template>
						</uni-list-item>
						<view class="remark-container">
							<view class="item">
								<uni-list-item title="备注信息" />
							</view>
							<view class="input-container">
								<input v-model="orderSubmitDTO.remark" placeholder="所有人可见" class="list-text" />
							</view>
						</view>
					</uni-list>
				</view>
			</view>
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
			radio: 2,
			size: [{
				text: '小件 ￥2',
				value: 2
			}, {
				text: '中件 ￥5',
				value: 5
			}, {
				text: '大件 ￥7',
				value: 7
			}],
			fileList1: [],
			destination: '请选择地址',
			orderSubmitDTO: {
				addressBookId: '',
				departureAddress: '',
				title: '代取快递',
				amount: '',
				remark: '',
				imageUrl: '',
				info: '',
			}
		}
	},
	watch: {
		radio(newVal) {
			this.orderSubmitDTO.amount = newVal;
		}
	},
	onLoad(options) {
		// console.log("选择的地址：" + options)  ? => 这里为什么不会打印options这个对象？
		console.log("选择的地址id：" + options.addrId)
		console.log("选择的地址destination：" + options.destination)
		this.orderSubmitDTO.addressBookId = options.addrId;
		this.destination = options.destination;
	},
	methods: {
		checkValue() {
			console.log(this.orderSubmitDTO)
			const { addressBookId, departureAddress, amount, remark, imageUrl, info } = this.orderSubmitDTO;
			return addressBookId && departureAddress && amount && remark && imageUrl && info;
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
						url: '../index/index'
					})
					// 弹窗
					uni.showToast({
						title: '订单发布成功',
						duration: 2000
					});
				}
			})
		},
		chooseAddr() {
			// 选择地址
			// 跳转到地址页面，携带参数choose
			console.log("跳转到选择地址页面")
			uni.navigateTo({ url: "../address/address?action=choose" })
		},
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
			return new Promise((resolve, reject) => {
				let a = uni.uploadFile({
					url: 'http://localhost:8081/user/common/upload',
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
	}
}
</script>

<style>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.title {
	font-size: 30rpx;
	font-weight: bold;
	margin-bottom: 20rpx;
	color: #00aaff;
}

.text-desc {
	width: 100%;
	text-align: left;
	margin: 10rpx 0;
}

.price-options {
	width: 100%;
	text-align: left;
	margin-bottom: 20rpx;
}

.input {
	width: 100%;
	margin-bottom: 20rpx;
	margin-top: 20rpx;
}

.input-field {
	width: 100%;
	padding: 10rpx;
	border: 1px solid #ccc;
	border-radius: 4rpx;
}

.file-upload {
	width: 100%;
	margin-bottom: 20rpx;
}

.list {
	width: 100%;
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


.item {
	flex-grow: 1;
	/* 使列表项占据尽可能多的空间 */
}


.input-container {
	margin-left: 20rpx;
	margin-right: 20rpx;
	text-align: right;
	/* 给输入框一些左边距，以防与列表项重叠 */
}

.list-text {
	font-size: 28rpx;
	/* 你可以根据需要调整字体大小 */
	color: #808080;
}
</style>
