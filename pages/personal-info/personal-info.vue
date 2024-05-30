<template>
	<view style="margin: 20rpx;">
		<view class="information">
			<!-- 			<fui-list>
				<fui-list-cell>
					<fui-icon name="my" :size="40"></fui-icon>
					<fui-text text="头像" style="margin-right: 450rpx;"></fui-text>
				</fui-list-cell>
				<fui-list-cell>
					<fui-icon name="bankcard" :size="40"></fui-icon>
					<fui-text text="手机" style="margin-right: 450rpx;"></fui-text>
				</fui-list-cell>
			</fui-list> -->
			<uni-list>
				<view class="">
					<view>
						<uni-list-item :show-extra-icon="true" :extra-icon="persion" title="头像" />
					</view>
					<view class="avatar">
						<uni-file-picker
							disable-preview
							:del-icon="false"
							return-type="object" 
							:list-styles="listStyles"
						><u-avatar :src="src"></u-avatar></uni-file-picker>
						
					</view>
				</view>

				<uni-list-item :show-extra-icon="true" :extra-icon="name" title="名字" :rightText=userName />
				<uni-list-item :show-extra-icon="true" :extra-icon="phone" title="电话" :rightText=phoneNumber />
			</uni-list>
		</view>


		<view class="function">
			<uni-list>
				<uni-list-item :show-extra-icon="true" :extra-icon="address" title="我的地址" clickable showArrow
					@click="toAddress" />
				<uni-list-item :show-extra-icon="true" :extra-icon="income" title="收支明细" clickable showArrow
					to="./chats" @click="onClick" />
			</uni-list>
			<uni-list>
				<uni-list-item :show-extra-icon="true" :extra-icon="apply" title="申请商户" clickable showArrow to="./chat"
					@click="onClick" />
				<uni-list-item :show-extra-icon="true" :extra-icon="campus" title="更换校区" clickable showArrow
					to="./chats" @click="onClick" />
			</uni-list>
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
				persion: {
					color: '#ffaa00',
					size: '24',
					type: 'person'
				},
				address: {
					color: '#ff5500',
					size: '24',
					type: 'location'
				},
				income: {
					color: '#00aaff',
					size: '24',
					type: 'wallet'
				},
				apply: {
					color: '#ffaaff',
					size: '24',
					type: 'shop'
				},
				campus: {
					color: '#aa00ff',
					size: '24',
					type: 'map-pin-ellipse'
				},
				phone: {
					color: '#55aaff',
					size: '24',
					type: 'phone'
				},
				name: {
					color: '#00aa00',
					size: '24',
					type: 'link'
				},
				userName: "习近平",
				phoneNumber: "178****7975"
			}
		},
		methods: {
			toAddress() {
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
		box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, .1);
		margin: 10rpx;
	}

	.function {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, .1);
		margin: 10rpx;
	}
	
</style>