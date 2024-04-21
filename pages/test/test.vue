<template>
	<!-- <u-subsection :list="list" :current="curNow" @change="sectionChange"></u-subsection> -->
	<view>
		<button>按钮</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['未付款', '待评价', '已付款'],
				curNow: 0
			}
		},
		onShow() {
			uni.showModal({
				title: '温馨提示',
				content: '授权微信登录之后才能使用小程序哦',
				showCancel : false,
				success: function (res) {
					if (res.confirm) {
						console.log('用户点击确定');
					}
				}
			});
		},
		methods: {
			sectionChange(index) {
				this.curNow = index;
			},
		}
	}
</script>

<style>

</style>