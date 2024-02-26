<template>
	<view style="padding: 20rpx;">
		<view class="box" style="padding: 60rpx 20rpx;">
			<view style="font-size: 40rpx;">欢迎登录</view>
			<view style="margin: 60rpx 0 ;">
				<uni-forms ref="formRef" :modelValue="formData" :rules="rules" validateTrigger="blur">
					<uni-forms-item required name="name">
						<uni-easyinput prefixIcon="person" type="text" v-model="formData.name" placeholder="请输入账号" />
					</uni-forms-item>
					<uni-forms-item required name="pwd">
						<uni-easyinput prefixIcon="locked" type="password" v-model="formData.pwd" placeholder="请输入账号" />
					</uni-forms-item>

					<uni-forms-item>
						<!-- 按钮组件 -->
						<button @click="login"
							style="width: 100%; background-color: #37cbe8; border-color:#37cbe8; height: 70rpx; line-height: 70rpx;"
							type="primary">登录</button>
					</uni-forms-item>

				</uni-forms>

			</view>

			<view style="text-align: right;">
				还没有账号？请<navigator url="/pages/register/register" style="display: inline;margin-left: 5rpx; color: #37cbe8;">注册</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					name: '',
					pwd: ''
				},
				rules: {
					// 对name字段进行必填验证
					name: {
						// name 字段的校验规则
						rules: [
							// 校验 name 不能为空
							{
								required: true,
								errorMessage: '请填写账号',
							},

						]
					},
					pwd: {
						// pwd 字段的校验规则
						rules: [
							// 校验 pwd 不能为空
							{
								required: true,
								errorMessage: '请填写密码',
							},

						]
					},
				}
			}
		},
		methods: {
			login() {
				//登录校验
				this.$refs.formRef.validate().then(res => {
								this.$request.post('/login',this.formData).then(res => {
									if(res.code === '200') {
										//登录成功，缓存用户数据
										uni.setStorageSync('xm-user', res.data)
										uni.showToast({
											icon: 'success',
											title: '登录成功'
										})
										//跳转到主页
										setTimeout(() => {
											uni.switchTab({
												url:'/pages/index/index'
											})
										},500)
										
									} else{
										uni.showToast({
											icon: 'none',
											title: res.msg
										})
									}
								})
								}).catch(err => {
									console.log('err', err);
								})
			}
		}
	}
</script>

<style>

</style>