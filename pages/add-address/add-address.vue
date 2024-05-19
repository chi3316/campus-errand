<template>
	<view class="add-address">
		<uni-forms :modelValue="formData">
			<uni-forms-item label="楼栋" required name="building">
				<uni-easyinput v-model="formData.building" placeholder="请输入楼栋"/>
			</uni-forms-item>
			<uni-forms-item label="门牌号" name="house_number" required>
				<uni-easyinput v-model="formData.house_number" placeholder="请输入门牌号" />
			</uni-forms-item>
			<uni-forms-item label="姓名" name="name" required>
				<uni-easyinput v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="手机号" name="phone_number" required>
				<uni-easyinput v-model="formData.phone_number" placeholder="请输入手机号" />
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
		data() {
			return {
				formData: {
					building: '', // 楼栋
					house_number: '', // 门牌号
					name: '', // 姓名
					phone_number: '', //手机号
				},
			}
		},
		methods: {
			submitAddress() {
				this.$bus.$emit('add-address', this.formData);
				uni.navigateBack();
			},
		}
	}
</script>

<style>
	.add-address {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 20rpx rgba(0,0,0,.1);
		margin: 10rpx;
	}
</style>
