<template>
	<view class="address-container">
		<view v-if="isEmpty" class="empty-container">
			<fui-empty title="暂无数据"></fui-empty>
		</view>
		<view v-else class="address-content">
			<fui-card v-for="item in items" :key="item.id" :title="`${item.building}-${item.house_number}`" radius="30rpx" :size="35" :margin="['25rpx', '10rpx']">
				<view class="fui-card-content">
					{{ item.name }}   {{ item.phone_number }}
					<view class="buttons-container">
						<view class="edit-button">
							<fui-button background="#37CBE8" width="100rpx" height="70rpx">编辑</fui-button>
						</view>
						<view class="delete-button">
							<fui-button background="#EEEEEE" color="#DE1E54" border-color="#0099FF" width="100rpx" height="70rpx" @click="removeAddress(item.id)">删除</fui-button>
						</view>
					</view>
				</view>
			</fui-card>
		</view>
		<view class="divider"></view>
		<view class="add-address">
			<fui-button background="#fff" color="#37CBE8" borderColor="#37CBE8" @click="jumpAddAdress">添加地址</fui-button>
		</view>
	</view>
</template>

<script>
	import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
	import fuiEmpty from "@/components/firstui/fui-empty/fui-empty.vue"
	import fuiCard from "@/components/firstui/fui-card/fui-card.vue"
	
	export default {
		components: {
			fuiButton,
			fuiEmpty,
			fuiCard,
		},
		created() {
			this.$bus.$on('add-address', this.addAddress);
		},
		mounted() {
			this.isEmpty = this.items.length === 0
		},
		data() {
			return {
				isEmpty: true,
				items: [
					{id: '1', building: '楼栋x', house_number: 'xxx', name: '姓名', phone_number: '123456'},
				],
			}
		},
		methods: {
			jumpAddAdress() {
				console.log("跳转新增地址页面");
				uni.navigateTo({
					url: '/pages/add-address/add-address', // 跳转页面
				})
			},
			addAddress(newAddress) {
				console.log("添加地址");
				// 示例
				// const newAddress = {id: this.items.length+1, building: '楼栋x', room: 'xxx', name: '姓名', phone: "123456"};
				this.items.push({...newAddress, id: this.items.length+1});
				this.isEmpty = this.items.length === 0;
			},
			removeAddress(id) {
				console.log("删除地址");
				this.items = this.items.filter(item => item.id != id);
				this.isEmpty = this.items.length === 0;
			}
		}
	}
</script>

<style>
	.address-container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	
	.empty-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	.address-content {
		padding: 10px 0;
	}
	
	.divider {
		display: flex;
		width: 100%;
		height: 1px;
		background-color: #37CBE8;
		margin-top: 1100rpx;
	}
	
	.add-address {
		display: flex;
		flex-direction: column;
		padding: 10px 0;
		margin-top: 1px;
		margin-left: 10px;
		margin-right: 10px;
	}
	
	.fui-card-content {
		position: relative;
		display: flex;
		margin-left: 10px;
		height: 40px;
	}
	
	.buttons-container {
		position: absolute;
		right: 10px;
		display: flex;
		align-items: center;
	}
	
	.edit-button {
		margin-left: 10px;
	}
	
	.delete-button {
		margin-left: 5px;
	}
</style>
