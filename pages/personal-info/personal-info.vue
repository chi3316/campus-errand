<template>
	<view style="margin: 20rpx;">
		<view class="information">
			<fui-list>
				<fui-list-cell>
					<fui-icon name="my" :size="50"></fui-icon>
					<fui-text text="头像" style="margin-right: 450rpx;"></fui-text>
				</fui-list-cell>
				<fui-list-cell>
					<fui-icon name="bankcard" :size="50"></fui-icon>
					<fui-text text="名字" style="margin-right: 450rpx;"></fui-text>
					
				</fui-list-cell>
			</fui-list>
		</view>
		<view class="function">
			<fui-list>
				<fui-list-cell @click="address" arrow>
					<fui-icon name="location" :size="50"></fui-icon>
					<fui-text text="我的地址" style="margin-right: 390rpx;"></fui-text>
				</fui-list-cell>
				<fui-list-cell arrow>
					<fui-icon name="wallet" :size="50"></fui-icon>
					<fui-text text="收支明细" style="margin-right: 390rpx;"></fui-text>
				</fui-list-cell>
				<fui-list-cell arrow>
					<fui-icon name="order-fill" :size="50"></fui-icon>
					<fui-text text="申请商户" style="margin-right: 390rpx;"></fui-text>
				</fui-list-cell>
				<fui-list-cell arrow>
					<fui-icon name="find" :size="50"></fui-icon>
					<fui-text text="更换校区" style="margin-right: 390rpx;"></fui-text>
				</fui-list-cell>
			</fui-list>
		</view>
	</view>

</template>

<script>
	import fuiIcon from "@/components/firstui/fui-icon/fui-icon.vue"
	import fuiList from "@/components/firstui/fui-list/fui-list.vue"
	import fuiListCell from "@/components/firstui/fui-list-cell/fui-list-cell.vue"
	import fuiText from "@/components/firstui/fui-text/fui-text.vue"

	export default {
		components: {
			fuiIcon,
			fuiList,
			fuiListCell,
			fuiText,
		},
		data() {
			return {
				
			}
		},
		methods: {
			address() {
				console.log('跳转到地址页面')
				uni.navigateTo({
					url: '/pages/address/address', // 跳转页面
				})
				// 发送 GET 请求
				const response = request.get('/user/address/list').then(res => {
					console.log('请求成功，数据:', res.data);
				})
			},
		}
	}
</script>

<style>
	.information {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 20rpx rgba(0,0,0,.1);
		margin: 10rpx;
	}
	.function {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 20rpx rgba(0,0,0,.1);
		margin: 10rpx;
	}
</style>
