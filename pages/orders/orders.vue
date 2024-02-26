<template>
	<view style="padding:10rpx;">
		<view style="margin-bottom: 10rpx;">
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
			<view class="content">
				<view v-if="current === 0">
					<view v-for="item in orderList" :key="item.id" class="box" style="margin-bottom: 10rpx;">
						<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" :thumbnail="avatar" @click="onClick"
							is-full="true">
							<text class="uni-body">这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
						</uni-card>
					</view>
				</view>
				<view v-if="current === 1"><text class="content-text">选项卡2的内容</text></view>
				<view v-if="current === 2"><text class="content-text">选项卡3的内容</text></view>
				<view v-if="current === 3"><text class="content-text">选项卡4的内容</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: ['全部订单', '待接单', '已完成', '我帮助的'],
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
				current: 0,
				colorIndex: 0,
				activeColor: '#007aff',
				styleType: 'text',
				cover: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				},
				orderList: [{
						id: 1,
						name: '代取快递1',
					},
					{
						id: 2,
						name: '代取快递2',
					},
					{
						id: 3,
						name: '代取快递3',
					},
					{
						id: 3,
						name: '代取快递4',
					},
					{
						id: 3,
						name: '代取快递5',
					}
				]
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
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
			onClick() {
				uni.navigateTo({
					url: '/pages/order-details/order-details', // 替换成实际的页面路径
				});
			}
		}
	}
</script>

<style>

</style>