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
			if (this.action === 'update') {
				this.$request.post("/user/address/update", this.formData).then((res) => {
					if (res.code === 1) {
						console.log("修改地址信息成功")
						uni.showToast({
							title: '修改成功',
							duration: 2000
						});
					}
				})
			} else if (this.action === 'add') {
				this.$request.put("/user/address/save", this.formData).then((res) => {
					console.log(res)
					if (res.code === 1) {
						uni.showToast({
							title: '添加成功',
							duration: 2000
						});
					}
				})
			}
			console.log("back to address")
			uni.navigateBack({
				delta: 1, // 返回上一级页面
				success: function () {
					const page = getCurrentPages().pop();
					if (page == undefined || page == null) return;
					console.log('页面路径' + page.route)
					page.onLoad({ refresh: true });
				}
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
