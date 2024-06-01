<template>
	<view class="address-container">
		<view v-if="isEmpty" class="empty-container">
			<fui-empty title="暂无数据"></fui-empty>
		</view>
		<view v-else class="address-content">
			<fui-card v-for="item in items" :key="item.id" :title="`${item.building}-${item.specificLocation}`"
				radius="30rpx" :size="35" :margin="['25rpx', '10rpx']">
				<view class="fui-card-content">
					{{ item.consignee }} {{ item.phone }}
					<view class="buttons-container">
						<view class="edit-button">
							<fui-button background="#37CBE8" width="100rpx" height="70rpx">编辑</fui-button>
						</view>
						<view class="delete-button">
							<fui-button background="#EEEEEE" color="#DE1E54" border-color="#0099FF" width="100rpx"
								height="70rpx" @click="removeAddress(item.id)">删除</fui-button>
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
	onLoad(options) {
		if (options.refresh) {
			this.loadAddressData(); // 调用方法刷新地址数据
		}
	},
	created() {
		this.loadAddressData()
	},
	mounted() {
		this.isEmpty = this.items.length === 0
	},
	data() {
		return {
			isEmpty: true,
			items: [],
		}
	},
	methods: {
		jumpAddAdress() {
			console.log("跳转新增地址页面");
			uni.navigateTo({
				url: '/pages/add-address/add-address', // 跳转页面
			})
		},
		loadAddressData() {
			// 初始化数据
			this.items = [];
			// 请求地址数据
			this.$request.get("/user/address/list").then((res) => {
				// 将获取到的地址数据赋值给 items 数组
				this.items = res.data;
				// 更新 isEmpty 的值
				this.isEmpty = this.items.length === 0;
			}).catch((error) => {
				console.error('获取地址数据失败：', error);
			});
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
