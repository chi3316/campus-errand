<template>
	<view style="margin: 20rpx">
		<uni-list>
			<view class="container">
				<view class="item">
					<uni-list-item :show-extra-icon="true" :extra-icon="name" title="名字" />
				</view>
				<view class="input-container">
					<input v-model="applyOrderTakerDTO.name" placeholder="请输入姓名" class="text-input" />
				</view>
			</view>

			<view class="container">
				<view class="item">
					<uni-list-item :show-extra-icon="true" :extra-icon="number" title="学号" />
				</view>
				<view class="input-container">
					<input v-model="applyOrderTakerDTO.studentId" placeholder="请输入学号" class="text-input" />
				</view>
			</view>

			<view class="file-container">
				<view class="item">
					<uni-list-item :show-extra-icon="true" :extra-icon="card" title="学生证" />
				</view>
				<view style="margin-left: 120rpx;">
					<u-upload :fileList="fileList6" @afterRead="afterRead" @delete="deletePic" name="6" multiple
						:maxCount="1" :previewFullImage="true" width="250" height="150">
						<image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/20240601110646.jpg"
							mode="widthFix" style="width: 250px;height: 150px;"></image>
					</u-upload>
				</view>
			</view>


			<view class="container">
				<view class="item">
					<uni-list-item :show-extra-icon="true" :extra-icon="protocol" title="电子协议" />
				</view>
				<view class="input-container">
					<label @click="toProtocol">
						<text style="margin-right: 10rpx; color: #00aaff">勾选表示同意协议</text>
						<checkbox value="cb" checked="true" />
					</label>
				</view>
			</view>

			<view class="container">
				<view class="item">
					<uni-list-item :show-extra-icon="true" :extra-icon="weixin" title="加急审核" />
				</view>
				<view class="input-container">
					<a @click="copyWeChat" style="color: #00aaff">联系校区管理员</a>
				</view>
			</view>

			<view class="button-container">
				<fui-button radius="96rpx" @click="submit">提交申请</fui-button>
			</view>
		</uni-list>
	</view>
</template>

<script>
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
export default {
	components: {
		fuiButton
	},
	data() {
		return {
			// icons
			fileList6: [],
			name: {
				color: "#ffaa7f",
				size: "24",
				type: "person",
			},
			number: {
				color: "#00aaff",
				size: "24",
				type: "info",
			},
			card: {
				color: "#aaaaff",
				size: "24",
				type: "image",
			},
			weixin: {
				color: "#00aa00",
				size: "24",
				type: "weixin",
			},
			protocol: {
				color: "#ff5500",
				size: "24",
				type: "list",
			},
			applyOrderTakerDTO: {
				name: '',
				studentCard: '',
				studentId: ''
			},
		};
	},
	methods: {
		copyWeChat() {
			console.log("已复制管理员微信")
		},
		toProtocol() {
			console.log("请遵守协议")
		},
		submit() {
			console.log(this.applyOrderTakerDTO)
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
						this.applyOrderTakerDTO.studentCard = url;
						setTimeout(() => {
							resolve(res.data.data)
						}, 500)
					}
				});
			})
		},
	}
};
</script>


<style scoped>
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


.input-container {
	margin-left: 20rpx;
	margin-right: 20rpx;
	/* 给输入框一些左边距，以防与列表项重叠 */

}

.file-container {
	display: flex;
	flex-direction: column;
	margin-bottom: 20rpx;
	justify-content: center;
	/* 水平居中 */
}

.text-input {
	text-align: right;
	/* 使输入框中的文字左对齐 */
}
</style>