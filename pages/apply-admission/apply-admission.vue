<template>
	<view class="box">
		<text class="text">商家入驻先联系改校区客服</text>
		<fui-divider width="800rpx" height="50"></fui-divider>

		<uni-row>
			<uni-col :span="12" :push="1">
				<text style="font-size: 32rpx;">联系客服</text>
			</uni-col>
			<uni-col :span="12" :push="5">
				<view  @click="copyWechat">
					<text style="color: #37CBE8; font-size: 32rpx;">复制客服微信</text>
				</view>
			</uni-col>
		</uni-row>
		<fui-divider width="800rpx" height="25"></fui-divider>

		<fui-input label="店铺名称" borderTop placeholder="店铺名称" textAlign="right"></fui-input>
		<fui-divider width="800rpx" height="25"></fui-divider>

		<uni-row>
			<uni-col :span="12" :push="1">
				<text  style="font-size: 32rpx; position: relative; top: 20rpx;">店铺类型</text>
			</uni-col>
			<uni-col :span="12"  :push="6">		
				<fui-dropdown-menu :isCheckbox="false" selectedColor="#7AB4FF" :splitLine="true" lineColor="#A4CC6C" :options="options"
					ref="ddmTag" direction="down" @click="tagItemClick" @close="tagClose">
					<view class="fui-select fui-flex__between" @tap="tagTap">
						<text>{{tag}}</text>
					</view>
				</fui-dropdown-menu>
			</uni-col>
		</uni-row>
		<fui-divider width="800rpx" height="25"></fui-divider>

		<view class="container">		
			<view>
				<text style="font-size: 32rpx; position: relative; left: 18rpx;">店铺简介</text>
			</view>
			<view style="padding: 25rpx;">
				<fui-textarea :textareaBorder="true" borderColor="#37CBE8" radius="60" placeholder="请输入店铺简介" style="  width: 100%;"></fui-textarea>
			</view>
		</view>
		<fui-divider width="800rpx" height="25"></fui-divider>

		<fui-input label="店铺账号" borderTop placeholder="商户登录账号" textAlign="right"></fui-input>
		<fui-divider width="800rpx" height="25"></fui-divider>

		<fui-input label="店铺密码" borderTop placeholder="商户登录密码" :password="isPassword" textAlign="right">
			<fui-icon :name="isPassword?'invisible':'visible'" color="#B2B2B2" :size="50" @click="change"></fui-icon>
		</fui-input>
		<fui-divider width="800rpx" height="25"></fui-divider>

		<view class="container">		
			<view>
				<text style="font-size: 32rpx; position: relative; left: 18rpx;">店铺LOGO</text>
			</view>
			<view style="padding: 25rpx;">
				<uni-file-picker limit="1" file-mediatype="image" :imageStyles="imageStyles"></uni-file-picker>
			</view>
		</view>
		<fui-divider width="800rpx" height="25"></fui-divider>

		<fui-button text="提交申请" background="#37CBE8" radius="500rpx" width="95%" style="position: relative; left: 20rpx; top: 10rpx;" @click="commit"></fui-button>
	</view>
</template>

<script>
import fuiDivider from "@/components/firstui/fui-divider/fui-divider.vue"
import fuiInput from "@/components/firstui/fui-input/fui-input.vue"
import fuiDropdownMenu from "@/components/firstui/fui-dropdown-menu/fui-dropdown-menu.vue"
import fuiTextarea from "@/components/firstui/fui-textarea/fui-textarea.vue"
import fuiIcon from "@/components/firstui/fui-icon/fui-icon.vue"
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"

export default {
	components: {
		fuiDivider,
		fuiInput,
		fuiDropdownMenu,
		fuiTextarea,
		fuiIcon,
		fuiButton,
	},
	data() {
		return {
			options: ['代买', '常规', '餐饮', '洗护', '小店', '打印', '团购', '实时', '定点', '专升本'],
			tag: '请选择',
			tagShow: false,
			isPassword: true,
			imageStyles: {
				width: '800rpx',
				height: '400rpx',
				border:{ // 如果为 Boolean 值，可以控制边框显示与否
					color:"#37CBE8",		// 边框颜色
					width:"1px",		// 边框宽度
					style:"solid", 	// 边框样式
					radius:"40" 		// 边框圆角，支持百分比
				},
			},
		}
	},
	methods: {
		copyWechat() {
			uni.showModal({
				title: "复制成功",
				content: "已复制校区客服微信号，您可以添加客服微信反馈问题",
				showCancel: false,
				success: (res) => {
				if (res.confirm) {
					uni.setClipboardData({
					data: "chichi120877",
					success(res) {
						uni.getClipboardData({
						success(res) {
							wx.showToast({
							title: '已复制客服微信号',
							})
							console.log(res.data); // data
						},
						});
					},
					});
				}
				},
			});
		},
		tagTap() {
			this.$refs.ddmTag.show()
			this.tagShow = true;
		},
		tagItemClick(e) {
			console.log(e)
			this.tag = e.text
			this.tagClose()
		},
		tagClose() {
			this.tagShow = false;
		},
		change() {
			this.isPassword = !this.isPassword;
		},
		commit() {
			console.log('提交申请');
		}
	}
}
</script>

<style>
.text {
	font-weight: bold; /* 加粗 */
	font-size: 35rpx; /* 字体大小 */
	margin-left: 35rpx;
}

.fui-select {
	flex: 1;
	height: 80rpx;
	padding: 32rpx;
	box-sizing: border-box;
	position: relative;
}

.fui-select::after {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 200%;
	height: 200%;
	transform: scale(.5);
	transform-origin: 0 0;
	pointer-events: none;
}

.fui-flex__between {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.container {
	display: flex;
	flex-direction: column;
	padding: 10rpx;
}
</style>
