<template>
	<view style="padding: 20rpx;">
		<view class="box" style="padding: 60rpx 20rpx;">
			<view style="font-size: 40rpx;">欢迎注册</view>
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
						<button @click="register"
							style="width: 100%; background-color: #37cbe8; border-color:#37cbe8; height: 70rpx; line-height: 70rpx;"
							type="primary">注册</button>
					</uni-forms-item>

				</uni-forms>

			</view>
			<view style="text-align: right;">
				<!-- 跳转，可以返回原来页面 -->
				已有账号？请<navigator url="/pages/login/login" style="display: inline;margin-left: 5rpx; color: #37cbe8;">登录</navigator>
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
			register() {
				
				this.$refs.formRef.validate().then(res => {
					this.$request.post('/register', this.formData).then(res => {
						if (res.code === '200') {
							
							uni.showToast({
								icon: 'success',
								title: '注册成功'
							})
							
							//TODO : 因为没写后台，返回的数据格式不太对，调试会报错
							uni.switchTab({
								url: '/pages/index/index'
							})
							//跳转到登录页面
							setTimeout(() => {
								uni.navigateTo({
									url:'/pages/login/login'
								})
							},500)
						} else {
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