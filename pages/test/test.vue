<template>
  <view>
    <view class="input-container">
      <label>
        <text style="margin-right: 10rpx; color: #00aaff">勾选表示同意协议</text>
        <checkbox :checked="confirmed" @change="handleCheckboxChange" />
      </label>
    </view>
    <button @click="checkCheckbox">勾选协议</button>
    <button @click="uncheckCheckbox">取消勾选协议</button>
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
.input-container {
  display: flex;
  align-items: center;
}
</style>
