<template>
	<view class="container">
		<view class="segmented-control-wrap">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType"
				:active-color="activeColor"/>
		</view>
		<view class="empty-wrap">
			<fui-empty src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240601113716.png" isFixed="true" width="733"></fui-empty>
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
