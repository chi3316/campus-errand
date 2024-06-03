<template>
	<view class="add-address">
		<uni-forms :modelValue="formData">
			<uni-forms-item label="楼栋" required name="building">
				<uni-easyinput v-model="formData.building" placeholder="请输入楼栋" />
			</uni-forms-item>
			<uni-forms-item label="门牌号" name="specificLocation" required>
				<uni-easyinput v-model="formData.specificLocation" placeholder="请输入门牌号" />
			</uni-forms-item>
			<uni-forms-item label="姓名" name="consignee" required>
				<uni-easyinput v-model="formData.consignee" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="手机号" name="phone" required>
				<uni-easyinput v-model="formData.phone" placeholder="请输入手机号" />
			</uni-forms-item>
		</uni-forms>
		<fui-button radius="96rpx" @click="submitAddress" color="white" background="#37CBE8">确定</fui-button>
	</view>
</template>

<script>
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
export default {
	components: {
		fuiButton,
	},
	onLoad(options) {
		console.log("add-address: onLoad")
		this.action = options.action;
		console.log("options.action: " + options.action)
		console.log("options.id: " + options.id)
		const id = options.id;
		if (options.action === 'update') {
			// 获取id对应的地址信息，回显
			this.$request.get(`/user/address/${id}`).then((res) => {
				this.formData = res.data;
				console.log(this.formData)
			})
			// 输入新的数据 => update
		}
	},
	data() {
		return {
			formData: {
				building: '', // 楼栋
				specificLocation: '', // 门牌号
				consignee: '', // 姓名
				phone: '', //手机号
			},
			action: '',
		}
	},
	methods: {
		submitAddress() {
			// 根据操作类型调用不同的 API
			const request = this.action === 'update'
				? this.$request.post("/user/address/update", this.formData)
				: this.$request.put("/user/address/save", this.formData);

			request.then((res) => {
				if (res.code === 1) {
					const successMessage = this.action === 'update' ? '修改成功' : '添加成功';
					uni.showToast({
						title: successMessage,
						duration: 2000
					});

					// API 请求成功后再进行页面跳转
					uni.navigateBack({
						delta: 1, // 返回上一级页面
						success: function () {
							const page = getCurrentPages().pop();
							if (page == undefined || page == null) return;
							page.onLoad({ refresh: true });
						}
					});
				} else {
					// 请求返回非成功状态码时的处理
					uni.showToast({
						title: res.message || '操作失败',
						duration: 2000,
						icon: 'none'
					});
				}
			}).catch((error) => {
				// 请求失败时的处理
				console.error("API请求失败", error);
				uni.showToast({
					title: '请求失败，请稍后再试',
					duration: 2000,
					icon: 'none'
				});
			});
		},
	}
}
</script>

<style>
.add-address {
	background-color: #fff;
	padding: 20rpx;
	border-radius: 10rpx;
	box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, .1);
	margin: 10rpx;
}
</style>
