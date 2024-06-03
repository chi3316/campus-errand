<template>
	<view style="padding:10rpx;">
		<view style="margin-bottom: 10rpx;">
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="currentState" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
			<view class="content">
				<view v-if="currentState === 0">
					<view v-for="item in orderList" :key="item.id" class="order-box" style="margin-bottom: 10rpx;">
						<uni-card :title="item.title" :sub-title="item.orderTime" :extra="item.status"
							:thumbnail="item.avatar" @click="onClick(item.id)" is-full="true" is-shadow="true">
							<view class="order-info">备注：{{ item.remark }}</view>
							<view class="path">
								<template>
									<u-steps current="1" direction="column">
										<u-steps-item title="起点" :desc="item.departureAddress">
											<text class="departure-icon" slot="icon">起</text>
										</u-steps-item>
										<u-steps-item title="终点" :desc="item.destinationAddress">
											<text class="destination-icon" slot="icon">终</text>
										</u-steps-item>
									</u-steps>
								</template>
							</view>
							<view class="amount">
								<view class="amount-box">
									金额 ￥{{ item.amount }}
								</view>
							</view>
						</uni-card>
					</view>
				</view>
				<view class="content">
					<view v-if="currentState === 1">
						<view v-for="item in orderListStatus0" :key="item.id" class="order-box"
							style="margin-bottom: 10rpx;">
							<uni-card :title="item.title" :sub-title="item.orderTime" :extra="item.status"
								:thumbnail="item.avatar" @click="onClick(item.id)" is-full="true" is-shadow="true">
								<view class="order-info">备注：{{ item.remark }}</view>
								<view class="path">
									<template>
										<u-steps current="1" direction="column">
											<u-steps-item title="起点" :desc="item.departureAddress">
												<text class="departure-icon" slot="icon">起</text>
											</u-steps-item>
											<u-steps-item title="终点" :desc="item.destinationAddress">
												<text class="destination-icon" slot="icon">终</text>
											</u-steps-item>
										</u-steps>
									</template>
								</view>
								<view class="amount">
									<view class="amount-box">
										金额 ￥{{ item.amount }}
									</view>
								</view>
							</uni-card>
						</view>
					</view>
				</view>
				<view class="content">
					<view v-if="currentState === 2">
						<view v-for="item in orderListStatus2" :key="item.id" class="order-box"
							style="margin-bottom: 10rpx;">
							<uni-card :title="item.title" :sub-title="item.orderTime" :extra="item.status"
								:thumbnail="item.avatar" @click="onClick(item.id)" is-full="true" is-shadow="true">
								<view class="order-info">备注：{{ item.remark }}</view>
								<view class="path">
									<template>
										<u-steps current="1" direction="column">
											<u-steps-item title="起点" :desc="item.departureAddress">
												<text class="departure-icon" slot="icon">起</text>
											</u-steps-item>
											<u-steps-item title="终点" :desc="item.destinationAddress">
												<text class="destination-icon" slot="icon">终</text>
											</u-steps-item>
										</u-steps>
									</template>
								</view>
								<view class="amount">
									<view class="amount-box">
										金额 ￥{{ item.amount }}
									</view>
								</view>
							</uni-card>
						</view>
					</view>
				</view>
				<view class="content">
					<view v-if="currentState === 3">
						<view v-for="item in orderListStatus4" :key="item.id" class="order-box"
							style="margin-bottom: 10rpx;">
							<uni-card :title="item.title" :sub-title="item.orderTime" :extra="item.status"
								:thumbnail="item.avatar" @click="onClick(item.id)" is-full="true" is-shadow="true">
								<view class="order-info">备注：{{ item.remark }}</view>
								<view class="path">
									<template>
										<u-steps current="1" direction="column">
											<u-steps-item title="起点" :desc="item.departureAddress">
												<text class="departure-icon" slot="icon">起</text>
											</u-steps-item>
											<u-steps-item title="终点" :desc="item.destinationAddress">
												<text class="destination-icon" slot="icon">终</text>
											</u-steps-item>
										</u-steps>
									</template>
								</view>
								<view class="amount">
									<view class="amount-box">
										金额 ￥{{ item.amount }}
									</view>
								</view>
							</uni-card>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	onLoad() {
		this.fetchOrders();
	},
	data() {
		return {
			currentState: 0,
			items: ['全部订单', '待帮助', '已完成', '我帮助的'],
			styles: [{
				value: 'button',
				text: '按钮',
				checked: true
			},
			{
				value: 'text',
				text: '文字'
			}
			],
			colors: ['#007aff', '#4cd964', '#dd524d'],
			colorIndex: 0,
			activeColor: '#007aff',
			styleType: 'text',
			extraIcon: {
				color: '#4cd964',
				size: '22',
				type: 'gear-filled'
			},
			originalOrderList: [],
			orderList: [],
			orderListStatus0: [], // 待帮助的订单列表
			orderListStatus2: [], // 已完成的订单列表
			orderListStatus4: [], // 我帮助的订单列表
		}
	},
	methods: {
		fetchOrders() {
			// 获取订单列表
			this.$request.get("/user/order/listAll").then((res) => {
				if (res.code === 1) {
					let orders = res.data;
					this.originalOrderList = orders;
					// console.log("original data : " + JSON.stringify(orders, null, 2));
					this.orderList = this.formatData(orders);
				}
			})
		},
		onClickItem(e) {
			if (this.currentState !== e.currentIndex) {
				this.currentState = e.currentIndex
			}
		},
		// 计算时间差
		calculateTimeDifference(currentTime, orderTime) {
			const differenceInMilliseconds = currentTime - orderTime;
			const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
			const differenceInHours = Math.floor(differenceInMinutes / 60);
			const differenceInDays = Math.floor(differenceInHours / 24);

			if (differenceInDays > 0) {
				return `${differenceInDays}天前`;
			} else if (differenceInHours > 0) {
				return `${differenceInHours}小时前`;
			} else if (differenceInMinutes > 0) {
				return `${differenceInMinutes}分钟前`;
			} else {
				return '刚刚';
			}
		},
		// 设置不同状态的订单列表
		setOrderListByStatus(data) {
			this.orderListStatus0 = data.filter(order => order.status === '待帮助');
			this.orderListStatus2 = data.filter(order => order.status === '已完成');
			this.orderListStatus4 = data.filter(order => order.receiverId === uni.getStorageSync("xm-user")?.id);
		},
		// 格式化数据
		formatData(data) {
			let formattedData = [];
			for (let i = 0; i < data.length; i++) {
				let order = data[i];
				// 检查订单状态
				if (order.status === 0) {
					order.status = '待帮助';
				} else if (order.status === 1) {
					order.status = '已帮助';
				} else if (order.status === 2) {
					order.status = '已完成';
				}

				// 解析订单时间
				const orderTime = new Date(order.orderTime);
				if (isNaN(orderTime)) {
					console.error(`Invalid orderTime: ${order.orderTime}`);
					continue;
				}

				const currentTime = new Date();
				order.orderTime = this.calculateTimeDifference(currentTime, orderTime);

				// 分割地址
				if (typeof order.destinationAddress === 'string') {
					const str = order.destinationAddress.split(" ");
					order.destinationAddress = str[0];
				} else {
					console.error(`Invalid destinationAddress: ${order.destinationAddress}`);
				}

				formattedData.push(order);
			}
			this.orderList = formattedData;
			console.log("formatted data: ", this.orderList);
			this.setOrderListByStatus(formattedData)
			return formattedData;
		},
		onClick(orderId) {
			console.log("orderId: " + orderId);
			uni.navigateTo({
				url: '/pages/order-details/order-details?orderId=' + orderId, // 替换成实际的页面路径
			});
		},
		styleChange(e) {
			if (this.styleType !== e.detail.value) {
				this.styleType = e.detail.value
			}
		},
		colorChange(e) {
			if (this.styleType !== e.detail.value) {
				console.log(e.detail.value);
				this.activeColor = e.detail.value
			}
		},
	},
}
</script>

<style lang="scss">
.departure-icon {
	width: 21px;
	height: 21px;
	background-color: rgb(19, 141, 241);
	border-radius: 100px;
	font-size: 12px;
	color: #fff;
	line-height: 21px;
	text-align: center;
}

.destination-icon {
	width: 21px;
	height: 21px;
	background-color: rgb(39, 188, 39);
	border-radius: 100px;
	font-size: 12px;
	color: #fff;
	line-height: 21px;
	text-align: center;
}

.content {
	margin-top: 20rpx;

	.order-box {
		margin: 20rpx;
	}

	.order-info {
		font-size: 24rpx;
		color: #333;
		line-height: 1.5;
		margin-bottom: 25rpx;
	}

	.amount {
		display: flex;
		justify-content: flex-end;

		.amount-box {
			padding: 5rpx 10rpx;
			border: 1px solid #d1e9ff;
			border-radius: 20rpx;
			color: #42a5f5;
			font-size: 26rpx;
			/* background-color: #f0f8ff; 这个背景颜色可以给订单状态用*/
		}
	}
}
</style>