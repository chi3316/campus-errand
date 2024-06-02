<template>
	<view class="address-container">
		<view v-if="isEmpty" class="empty-container">
			<fui-empty title="暂无数据"></fui-empty>
		</view>
		<view v-else class="address-content">
			<fui-card v-for="item in items" :key="item.id" :title="`${item.building}-${item.specificLocation}`"
				radius="30rpx" :size="35" :margin="['25rpx', '10rpx']" @click=chooseAddr(item)>
				<view class="fui-card-content">
					{{ item.consignee }} {{ item.phone }}
					<view class="buttons-container">
						<view class="edit-button">
							<fui-button background="#37CBE8" width="100rpx" height="70rpx"
								@click="updateAdress(item.id)">编辑</fui-button>
						</view>
						<view class="delete-button">
							<fui-button background="#EEEEEE" color="#DE1E54" border-color="#0099FF" width="100rpx"
								height="70rpx" @click="confirmRemoveAddr(item.id)">删除</fui-button>
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
		console.log(options)
		if (options.refresh) {
			this.loadAddressData(); // 调用方法刷新地址数据
		}
		// options接受到choose => set this.choose = true
		// 地址组件绑定 @click = chooseAddr : if(choose) {...}
		if (options.action === 'choose') {
			this.choose = true;
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
			choose: false, // 默认不可选
		}
	},
	methods: {
		chooseAddr(item) {
			if (this.choose) {
				const address = item;
				// 返回上一页，把地址id传给上一个页面
				uni.navigateBack({
					delta: 1, // 返回上一级页面
					success: (res) => {
						const id = address.id
						const building = address.building
						const specificLocation = address.specificLocation
						const page = getCurrentPages().pop();
						if (page == undefined || page == null) return;
						// 获取地址的标题 ： C10-713
						page.onLoad({ addrId: id, destination: `${building}-${specificLocation}` });
					}
				});
			}
		},
		updateAdress(id) {
			// 跳转到add界面
			uni.navigateTo({
				// 把action和id传过去
				url: `/pages/add-address/add-address?action=update&id=${id}`
			})
			// 返回提示请求成功
			// 刷新地址信息
		},
		removeAddress(id) {
			// 发送请求删除该id对应的地址
			console.log("尝试删除地址：" + id)
			this.$request.del(`/user/address/delete/?id=${id}`).then((res) => {
				if (res.code === 1) {
					uni.showToast({
						title: '删除成功',
						duration: 2000
					});
					// 刷新地址列表
					this.loadAddressData();
				} else {
					uni.showToast({
						title: '删除失败',
						icon: 'none',
						duration: 2000
					});
				}
			})
		},
		confirmRemoveAddr(id) {
			const addressId = id;
			uni.showModal({
				title: '提示',
				content: '您确定要删除改地址吗？',
				success: (res) => {  // 使用箭头函数
					if (res.confirm) {
						console.log('用户点击确定');
						this.removeAddress(addressId);  // 此处的this仍然指向Vue实例
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		jumpAddAdress() {
			console.log("跳转新增地址页面");
			uni.navigateTo({
				url: '/pages/add-address/add-address?action=add', // 跳转页面
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
