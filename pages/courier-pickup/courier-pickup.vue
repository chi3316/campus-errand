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
					<uni-data-checkbox mode="tag" v-model="radio" :localdata="sex"></uni-data-checkbox>
				</view>
				<view class="text-desc">
					取件信息
				</view>
				<view class="input">
					<uni-easyinput type="textarea" v-model="value" placeholder="请输入取件码或上传截图"></uni-easyinput>
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
						<uni-list-item showArrow title="收件地址" rightText="请选择地址" />
						<uni-list-item showArrow title="快递商家" rightText="请选择快递点" />
						<uni-list-item showArrow title="优惠券" rightText="请选择优惠券" />
						<view class="remark-container">
							<view class="item">
								<uni-list-item title="备注信息" />
							</view>
							<view class="input-container">
								<input v-model="remark" placeholder="所有人可见" />
							</view>
						</view>
					</uni-list>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			radio: 0,
			sex: [{
				text: '小件 ￥2',
				value: 0
			}, {
				text: '中件 ￥5',
				value: 1
			}, {
				text: '大件 ￥7',
				value: 2
			}],
			value: '',
			fileList1: [],
			remark: ''
		}
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
			return new Promise((resolve, reject) => {
				let a = uni.uploadFile({
					url: 'http://localhost:8081/user/common/upload',
					filePath: url,
					name: 'file',
					header: { token: uni.getStorageSync("xm-user")?.token },
					success: (res) => {
						const url = JSON.parse(res.data).data;
						console.log(url)
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
</style>
