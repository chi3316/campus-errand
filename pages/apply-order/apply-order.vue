<template>
	<view>
		<view v-if="isApply" class="box">
			<text class="text">手续费说明</text>
			<fui-divider width="800rpx" height="25"></fui-divider>
			<text class>以下为[华南理工大学]各项服务的手续费用，为保证平台服务发展所收取的费用</text>

			<fui-divider width="800rpx" height="25"></fui-divider>
			<uni-list>
				<uni-row>
					<uni-col :span="8">
						<text>服务项</text>
					</uni-col>
					<uni-col :span="8">
						<text>平台</text>
					</uni-col>
					<uni-col :span="8">
						<text>接单员</text>
					</uni-col>
				</uni-row>
				<fui-divider width="800rpx" height="25"></fui-divider>
				<uni-row>
					<uni-col :span="8">
						<text>快递代取</text>
					</uni-col>
					<uni-col :span="8">
						<text>5%</text>
					</uni-col>
					<uni-col :span="8">
						<text>95%</text>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col :span="8">
						<text>快递代寄</text>
					</uni-col>
					<uni-col :span="8">
						<text>5%</text>
					</uni-col>
					<uni-col :span="8">
						<text>95%</text>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col :span="8">
						<text>校园跑腿</text>
					</uni-col>
					<uni-col :span="8">
						<text>5%</text>
					</uni-col>
					<uni-col :span="8">
						<text>95%</text>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col :span="8">
						<text>游戏陪玩</text>
					</uni-col>
					<uni-col :span="8">
						<text>5%</text>
					</uni-col>
					<uni-col :span="8">
						<text>95%</text>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col :span="8">
						<text>代替服务</text>
					</uni-col>
					<uni-col :span="8">
						<text>5%</text>
					</uni-col>
					<uni-col :span="8">
						<text>95%</text>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col :span="8">
						<text>其他帮助</text>
					</uni-col>
					<uni-col :span="8">
						<text>5%</text>
					</uni-col>
					<uni-col :span="8">
						<text>95%</text>
					</uni-col>
				</uni-row>
			</uni-list>
			<fui-divider width="800rpx" height="25"></fui-divider>
			<fui-button text="下一步" @click="changeIsApply"></fui-button>
		</view>
		<view style="margin: 20rpx" v-else>
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
							<checkbox :checked="confirmed" @change="handleCheckboxChange" />
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

				<view>
					<fui-button radius="96rpx" @click="submit">提交申请</fui-button>
				</view>
			</uni-list>
		</view>
	</view>

</template>

<script>
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
import fuiDivider from "@/components/firstui/fui-divider/fui-divider.vue"

export default {
	components: {
		fuiButton,
		fuiDivider,
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
			confirmed: false,
			isApply: true,
		};
	},
	methods: {
		copyWeChat() {
			uni.getClipboardData({
				success(res) {
					wx.showToast({
						title: '复制微信号成功',
					})
					console.log(res.data); // data
				},
			});
			console.log("已复制管理员微信")
		},
		handleCheckboxChange(event) {
			this.confirmed = event.detail.value.length > 0;
		},
		toProtocol() {
			uni.navigateTo({
				url: "../confirm-protocol/confirm-protocol",
				events: {
					acceptDataFromOpenedPage: (data) => {
						if (data) {
							this.confirmed = true; // 使用箭头函数来正确绑定 this
						}
					}
				}
			})
		},
		checkValue() {
			const { name, studentCard, studentId } = this.applyOrderTakerDTO;
			return name && studentCard && studentId;
		},
		submit() {
			console.log(this.applyOrderTakerDTO)
			if (!this.checkValue()) {
				uni.showToast({
					title: '提交失败！请填写完整信息',
					icon: 'none',
					duration: 2000
				});
				return;
			}
			// 发送请求
			this.$request.post("/user/user/applyOrderTaker", this.applyOrderTakerDTO).then((res) => {
				// 跳转页面
				uni.switchTab({
					url: '../profile/profile'
				})
				// 弹窗
				uni.showToast({
					title: '提交申请成功',
					duration: 2000
				});
			})
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
		changeIsApply() {
			this.isApply = false;
		}
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

.text {
	text-align: center;
	display: block;
	margin-bottom: 20rpx;
}
</style>