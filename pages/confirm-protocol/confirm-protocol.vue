<template>
	<view>
		<view>
			<h3 style="font-size: 18px; font-weight: bold; text-align: center;">{{ title }}</h3>
			<p style="text-indent: 2em; line-height: 1.5;">
				<strong>第一条 定义</strong><br /><br />

				本协议中的“华园跑腿”指代服务提供者，即在华园内提供代办服务的个体或团体。接单用户指代在平台上发布任务需求并期待获得服务提供者接单的个人或机构。<br /><br />

				<strong>第二条 接单用户的权利和义务</strong><br /><br />

				接单用户有权在华园跑腿平台上发布任务需求，并期待获得合适的服务提供者接单。接单用户应提供真实有效的任务信息，并按约定支付相应的服务费用。<br />
				接单用户有义务尊重服务提供者的合法权益，并遵守平台规则。<br /><br />

				<strong>第三条 华园跑腿的权利和义务</strong><br /><br />

				华园跑腿有权根据任务需求选择接单者，并保障服务质量。华园跑腿应提供安全、高效的代办服务，并及时解决用户的问题和投诉。<br />
				华园跑腿承诺保护用户的隐私信息，不会泄露给第三方。<br /><br />

				<strong>第四条 利润分配</strong><br /><br />

				华园跑腿与接单用户之间的利润分配按照平台规定执行。<br /><br />

				<strong>第五条 隐私保护</strong><br /><br />

				华园跑腿保护用户的个人隐私信息，不会擅自泄露给他人或用于非法用途。华园跑腿将采取合理的措施保护用户的个人信息安全。<br /><br />

				<strong>第六条 免责声明</strong><br /><br />

				由于不可抗力因素（包括但不限于自然灾害、战争、网络故障等）造成的服务延误或中断，华园跑腿不承担责任。<br />
				用户在使用华园跑腿服务过程中因个人原因导致的损失，由用户自行承担。<br /><br />

				<strong>第七条 协议生效</strong><br /><br />

				本协议自双方签署之日起生效，有效期至协议约定的任务完成之日。
			</p>
		</view>

		<view class="button-container">
			<fui-button radius="96rpx" @click="confirm">同意协议并保存</fui-button>
		</view>
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
			title: '申请接单电子协议书'
		}
	},
	onLoad(options) {
		this.title = options.title
	},
	methods: {
		confirm() {
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.emit('acceptDataFromOpenedPage', true);
			uni.navigateBack({
				delta: 1
			});
			// 应该加到后端数据库表示你确认过，但这里就省掉了
			console.log("用户已确认协议")
		}
	}
}
</script>

<style>
.button-container {
	margin-top: 20rpx;
}
</style>
