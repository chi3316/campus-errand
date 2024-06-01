<template>
	<view style="margin: 20rpx">
		<uni-list>
			<view class="container">
				<view class="item">
					<uni-list-item :show-extra-icon="true" :extra-icon="name" title="名字" />
				</view>
				<view class="input-container">
					<input v-model="user.nickName" placeholder="请输入姓名" class="nickname-input"
						@change="updateNickname" />
				</view>
			</view>

			<view class="container">
				<view class="item">
					<uni-list-item :show-extra-icon="true" :extra-icon="number" title="学号" />
				</view>
				<view class="input-container">
					<input v-model="user.nickName" placeholder="请输入学号" class="nickname-input"
						@change="updateNickname" />
				</view>
			</view>

			<view class="file-container">
				<view class="item">
					<uni-list-item :show-extra-icon="true" :extra-icon="card" title="学生证" />
				</view>
				<view style="margin-left: 120rpx;">
					<u-upload :fileList="fileList6" @afterRead="afterRead" @delete="deletePic" name="6" multiple
						:maxCount="1" width="250" height="150">
						<image src="https://cdn.uviewui.com/uview/demo/upload/positive.png" mode="widthFix"
							style="width: 250px;height: 150px;"></image>
					</u-upload>
				</view>
			</view>


			<view class="container">
				<view class="item">
					<uni-list-item :show-extra-icon="true" :extra-icon="protocol" title="电子协议" />
				</view>
				<view class="input-container">
					<label>
						<text style="margin-right: 10rpx;">勾选表示同意协议</text>
						<checkbox value="cb" checked="true" />
					</label>
				</view>
			</view>

			<view class="container">
				<view class="item">
					<uni-list-item :show-extra-icon="true" :extra-icon="weixin" title="加急审核" />
				</view>
				<view class="input-container">
					<a>联系校区管理员</a>
				</view>
			</view>

			<view class="button-container">
				<fui-button radius="96rpx" @click="submit">提交申请</fui-button>
			</view>
		</uni-list>
	</view>
</template>

<script>
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
export default {
	components: {
		fuiButton
	},
	data() {
		return {
			// icons
			name: {
				color: "#ffaa7f",
				size: "24",
				type: "person",
			},
			number: {
				color: "#00aaff",
				size: "24",
				type: "info",
			},
			card: {
				color: "#aaaaff",
				size: "24",
				type: "image",
			},
			weixin: {
				color: "#00aa00",
				size: "24",
				type: "weixin",
			},
			protocol: {
				color: "#ff5500",
				size: "24",
				type: "list",
			},
			user: {
				nickName: ''
			},
		};
	},
	methods: {
	}
};
</script>


<style scoped>
.container {
	display: flex;
	align-items: center;
	/* 垂直居中对齐 */
	justify-content: space-between;
	/* 使内容在两端对齐 */
	width: 100%;
	/* 确保容器占据可用宽度 */
}

.item {
	flex-grow: 1;
	/* 使列表项占据尽可能多的空间 */
}

.avatar {
	margin-left: 10px;
	/* 给头像一些左边距，以防与列表项重叠 */
}

.input-container {
	margin-left: 20rpx;
	margin-right: 20rpx;
	/* 给输入框一些左边距，以防与列表项重叠 */

}

.file-container {
	display: flex;
	flex-direction: column;
	margin-bottom: 20rpx;
	justify-content: center;
	/* 水平居中 */
}

.nickname-input {
	text-align: right;
	/* 使输入框中的文字左对齐 */
}
</style>