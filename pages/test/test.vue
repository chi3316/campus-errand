<template>
	<view>
		<button class="custom-button">Button 1</button>
		<button class="custom-button">Button 2</button>
		<button class="custom-button">Button 3</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				confirmed: false // 初始值为 false
			};
		},
		methods: {
			handleCheckboxChange(event) {
				this.confirmed = event.detail.value.length > 0;
			},
			checkCheckbox() {
				this.confirmed = true; // 将 confirmed 设为 true，checkbox 会被勾选上
			},
			uncheckCheckbox() {
				this.confirmed = false; // 将 confirmed 设为 false，checkbox 会取消勾选
			}
		}
	};
</script>

<style scoped>
	.custom-button {
		padding: 10px 20px;
		background-color: #f0f0f0;
		border: 1px solid #ccc;
		border-radius: 5px;
		cursor: pointer;
	}

	.custom-button:focus {
		border-color: #0074d9;
		/* Change to your desired focus color */
		outline: none;
		/* Remove default browser outline */
	}
</style>