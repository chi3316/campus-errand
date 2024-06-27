<template>
	<view class="box">
		<view>
			<uni-card title="订单附加照片">
				<image style="display: flex; width: 300px; height: 200px; background-color: #eeeeee;" :mode="aspectFit"
					:src="imageUrl" @error="imageError"></image>
			</uni-card>
		</view>
		<view>
			<uni-card title="订单详细信息">
				<text class="uni-body">{{ info }}</text>
			</uni-card>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			imageUrl: 'https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/e7dbfdd8-413f-4001-b362-420786b274b2.png',
			info: '无',
		}
	},
	onLoad(options) {
		if (options.imageUrl) {
			this.imageUrl = options.imageUrl;
		}
		if (options.info) {
			this.info = options.info;
		}
	},
	methods: {

	}
}
</script>


<style></style>
