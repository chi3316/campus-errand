<template>
	<view>
		<view class="box">
			<uni-row>
				<uni-col :span="12">
					<text>开始日期</text>
				</uni-col>
				<uni-col :span="12">
					<uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" />
				</uni-col>
			</uni-row>
			<uni-row>
				<uni-col :span="12">
					<text>结束日期</text>
				</uni-col>
				<uni-col :span="12" style="margin-top: 25rpx;">
					<uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" />
				</uni-col>
			</uni-row>
			<text>
				总数：{{ count }}位
			</text>
		</view>
		<view>
			<uni-card title="用户名" :isFull="true" sub-title="完成单数: 1" extra="金额: 1000" :thumbnail="avatar"></uni-card>
			<uni-card title="用户名" :isFull="true" sub-title="完成单数: 1" extra="金额: 1000" :thumbnail="avatar"></uni-card>

		</view>
	</view>

</template>

<script>
import fuiAvatar from "@/components/firstui/fui-avatar/fui-avatar.vue"
export default {
	components: {
		fuiAvatar,
	},
	data() {
		return {
			count: 2,
			avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
		}
	},
	methods: {

	}
}
</script>

<style></style>
