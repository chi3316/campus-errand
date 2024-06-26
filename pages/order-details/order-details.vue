<template>
	<view>
		<view>
			<view style="margin-bottom: 20rpx; margin:20rpx; border: 20rpx;">
				<uni-notice-bar v-if="content" show-icon speed="50" scrollable :text="content" />
			</view>

			<view style="margin:20rpx;">
				<view class="title">发起人</view>
				<view>
					<uni-card :title="title" :sub-title="orderTime" :extra="status" :thumbnail="avatar" @click="onClick"
						is-full="true">
						<view>
							<view style="margin:20rpx;">
								<text>备注：{{ remark }}</text>
							</view>
							<view>
								<fui-tag text="订单详情" type="primary" theme="light"
									style="position: relative; top: 20rpx;"></fui-tag>
							</view>
							<view style="position: relative; top: 20rpx;">
								<template>
									<u-steps current="1" direction="column">
										<u-steps-item title="起点" :desc="departureAddress">
											<text class="departure-icon" slot="icon">起</text>
										</u-steps-item>
										<u-steps-item title="终点" :desc="destinationAddress">
											<text class="destination-icon" slot="icon">终</text>
										</u-steps-item>
									</u-steps>
								</template>
							</view>
							<!-- <u-tag text="money" plain size="mini" shape="circle"></u-tag> -->
							<view class="rounded-box">
								金额￥{{ amount }}
							</view>
							<!-- 右下角按钮容器 -->
							<view class="button-container">
								<view class="circle-button">
									<uni-icons class="icon" type="chat" size="20" color="white"></uni-icons>
									<text class="button-text">私信</text>
								</view>
								<view class="circle-button">
									<uni-icons class="icon" type="phone" size="20" color="white"></uni-icons>
									<text class="button-text">电话</text>
								</view>
							</view>

						</view>
					</uni-card>
				</view>
			</view>

			<view style="margin:20rpx;">
				<view class="title" v-if="showHireling">接单人</view>
				<view class="title" v-else>暂无接单人</view>
				<view v-if="showHireling">
					<uni-card :title="receiverName":thumbnail="receiverAvatar" @click="onClick" is-full="true">
						<!-- 左上角按钮容器 -->
						<view class="right-up-button-container">
							<view class="circle-button">
								<uni-icons class="icon" type="chat" size="20" color="white"></uni-icons>
								<text class="button-text">私信</text>
							</view>
							<view class="circle-button">
								<uni-icons class="icon" type="phone" size="20" color="white"></uni-icons>
								<text class="button-text">电话</text>
							</view>
						</view>
					</uni-card>
				</view>
				<view class="box">
					<!-- 订单号 -->
					<view class="order-info">
						<text class="info-label">订单号：</text>
						<text class="info-value" style="position: relative; left: 160rpx;">{{ orderNumber }}</text>
						<fui-icon name="order" size="32" @click="copy"></fui-icon>
					</view>
					<view class="divider"></view>
					<!-- 联系管理员 -->
					<view class="order-info">
						<text class="info-label">联系管理员：</text>
						<text class="info-value">联系管理员</text>
					</view>
					<view class="divider"></view>
					<!-- 支付时间 -->
					<view class="order-info">
						<text class="info-label">支付时间：</text>
						<text class="info-value">{{ paymentTime === null ? '暂未支付' : paymentTime }}</text>
					</view>
					<!-- 横线分隔 -->
					<view class="divider"></view>
					<!-- 接单时间 -->
					<view class="order-info">
						<text class="info-label">接单时间：</text>
						<text class="info-value">{{ takeTime === null ? '暂未接单' : takeTime }}</text>
					</view>
					<view class="divider"></view>
					<!-- 完成时间 -->
					<view class="order-info">
						<text class="info-label">完成时间：</text>
						<text class="info-value">{{ finishTime === null ? '暂未完成' : finishTime }}</text>
					</view>
					<view class="divider"></view>
				</view>
			</view>

			<view v-if="!showHireling">
				<fui-button text="接单" background="#37CBE8" radius="500rpx" width="95%"
					style="position: relative; left: 20rpx; top: 10rpx;" @click="commit"></fui-button>
			</view>
		</view>
	</view>
</template>

<script>
import fuiTag from "@/components/firstui/fui-tag/fui-tag.vue"
import fuiIcon from "@/components/firstui/fui-icon/fui-icon.vue"
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"

export default {
	components: {
		fuiTag,
		fuiIcon,
		fuiButton,
	},
	data() {
		return {
			content: '太阳天或下雨天，人挤人的咖啡店，找一个能想你舒服的角落...',
			showHireling: false, // 是否显示接单人
			avatar: '', // 头像
			status: '', // 订单状态
			orderNumber: '', // 订单号
			orderTime: '', // 下单时间
			takeTime: '', // 接单时间
			paymentTime: '', // 支付时间
			finishTime: '', // 完成时间
			// 其他订单信息，根据需要添加更多数据
			title: '', // 订单标题
			remark: '', // 订单备注
			departureAddress: '', // 起点
			destinationAddress: '', // 终点
			amount: '', // 金额
			orderId: '', // 订单ID
			receiverId: '', // 接单人ID
			receiverAvatar: '', // 接单人头像
			receiverPhone: '', // 接单人电话号码
			receiverName: '', // 接单人姓名
		}
	},
	methods: {
		onClick() {
			console.log('点击查看地址信息')
		},
		// 复制订单号
		copy() {
			uni.showModal({
				title: "复制成功",
				content: "已复订单号",
				showCancel: false,
				success: (res) => {
					if (res.confirm) {
						uni.setClipboardData({
							data: this.orderNumber,
							success(res) {
								uni.getClipboardData({
									success(res) {
										wx.showToast({
											title: '已复制订单号',
										})
									},
								});
							},
						});
					}
				},
			});
		},
		commit() {
			console.log('点击接单');
			console.log("orderId: " + this.orderId);
			this.$request.put(`/user/order/acceptOrder/${this.orderId}`).then((res) => {
				if (res.code === 1) {
					uni.showToast({
						title: '接单成功',
						icon: 'success'
					});
					this.showHireling = true;
					this.fetchOrder();
				}
			});
		},
		// 获取订单详情
		fetchOrder() {
			this.$request.get(`/user/order/orderDetail/${this.orderId}`).then((res) => {
				if (res.code === 1) {
					let order = res.data;
					console.log("order data : " + JSON.stringify(order, null, 2));
					this.title = order.title;
					this.orderTime = order.orderTime;
					this.takeTime = order.takeTime;
					this.paymentTime = order.payTime;
					this.finishTime = order.finishTime;
					this.remark = order.remark;
					this.departureAddress = order.departureAddress;
					this.destinationAddress = order.destinationAddress;
					this.amount = order.amount;
					this.avatar = order.avatar;
					this.orderNumber = order.number;
					this.receiverId = order.receiverId;
					if (order.status === 0) {
						this.status = '待帮助';
						this.showHireling = false;
					} else if (order.status === 1) {
						this.status = '已帮助';
						this.showHireling = true;
					} else if (order.status === 2) {
						this.status = '已完成';
						this.showHireling = true;
					}
				}
				if (this.receiverId) {
					console.log("receiverId: " + this.receiverId);
					this.$request.get(`/user/user/getReceiverInfo/${this.receiverId}`).then((res) => {
						if (res.code === 1) {
							console.log("receiverInfo data: " + JSON.stringify(res.data, null, 2));
							this.receiverAvatar = res.data.avatar;
							this.receiverPhone = res.data.phone;
							this.receiverName = res.data.name;
						}
					});
				}
			});
		}
	},
	onLoad(options) {
		this.orderId = options.orderId;
		this.fetchOrder();
	}
}
</script>

<style>
.title {
	font-size: 30rpx;
	font-weight: 400;
	margin-bottom: 10rpx;
}

.button-container {
	position: absolute;
	bottom: 10px;
	/* 距离底部 10 像素 */
	right: 10px;
	/* 距离右侧 10 像素 */
	display: flex;
	flex-direction: row;
	/* 横向排列按钮 */
}

.right-up-button-container {
	position: absolute;
	top: 10px;
	/* 距离底部 10 像素 */
	right: 10px;
	/* 距离右侧 10 像素 */
	display: flex;
	flex-direction: row;
	/* 横向排列按钮 */
}

.circle-button {
	display: flex;
	width: 40px;
	/* 调整按钮宽度 */
	height: 40px;
	/* 调整按钮高度 */
	background-color: #0291ff;
	/* 蓝色背景 */
	border-radius: 50%;
	/* 圆形按钮 */
	margin-right: 10px;
	/* 按钮间距 */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}


.icon {
	width: 20px;
	/* 调整图标大小 */
	height: 8rpx;

}

.button-text {
	position: relative;
	top: 14rpx;
	color: #fff;
	/* 文字颜色为白色 */
	font-size: 15rpx;
}

.rounded-box {
	position: relative;
	top: 20rpx;

	display: flex;
	align-items: center;
	justify-content: center;
	width: 150rpx;

	bottom: 0;
	/* 调整底部位置 */
	left: 0;
	/* 调整左侧位置 */
	padding: 5rpx;
	/* 调整内边距 */
	color: #00aaff;
	/* 文字颜色为白色 */
	border-radius: 40rpx;
	/* 圆角半径 */

	border: 1rpx solid #fff;
	/* 添加边框 */
	border-color: #55aaff;
}

.order-info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0;
}

.info-label {
	font-size: 14px;
	color: #333;
}

.info-value {
	font-size: 14px;
	color: #999999;
}

.divider {
	height: 1px;
	background-color: #ddd;
	margin: 10px 0;
}

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
</style>