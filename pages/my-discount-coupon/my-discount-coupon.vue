<template>
	<view class="container">
		<view class="segmented-control-wrap">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType"
				:active-color="activeColor" />
		</view>
		<view class="empty-wrap">
			<u-empty mode="coupon" icon="http://cdn.uviewui.com/uview/empty/coupon.png">
			</u-empty>
		</view>
	</view>
</template>

<script>
import fuiEmpty from "@/components/firstui/fui-empty/fui-empty.vue"

export default {
	components: {
		fuiEmpty,
	},
	data() {
		return {
			items: ['待使用', '已使用', '已过期'],
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
			current: 0,
			colorIndex: 0,
			activeColor: '#007aff',
			styleType: 'text',
		}
	},
	methods: {

	}
}
</script>

<style>
.container {
	background-color: #f8f8f8;
	display: flex;
	flex-direction: column;
	height: 100vh;
}

.segmented-control-wrap {
	flex-shrink: 0;
}

.empty-wrap {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
