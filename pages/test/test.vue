<template>
  <view class="container">
    <view class="text-container">
      <view class="text">建议意见</view>
      <view class="input-wrapper">
        <input class="input" placeholder="请详细描述您的建议或意见" />
      </view>
    </view>
    <view class="button-container">
      <button class="submit-button">提交</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl: 'https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/chatting.png' // 初始头像的 URL
    };
  },
  methods: {
    onChooseAvatar(e) {
      const { avatarUrl } = e.detail;
      this.avatarUrl = avatarUrl;
    }
  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  /* 垂直排列子元素 */
  align-items: center;
  /* 子元素水平居中对齐 */
}

.text-container {
  display: flex;
  align-items: center;
  /* 子元素垂直居中对齐 */
}

.text {
  margin-right: 10px;
  /* 文本右侧间距 */
  line-height: 1.5;
  /* 设置文本行高 */
}

.input-wrapper {
  flex: 1;
  /* 输入框占据剩余空间 */
}

.input {
  width: 100%;
  /* 输入框宽度填满容器 */
  padding: 5px;
  /* 输入框内边距 */
  box-sizing: border-box;
  /* 设置盒子模型为边框盒 */
  border: none;
  /* 移除边框 */
  line-height: 1.5;
  /* 设置输入框行高 */
}

.button-container {
  margin-top: 20px;
  /* 提交按钮与上方盒子间距 */
}

.submit-button {
  padding: 10px 20px;
  /* 按钮内边距 */
  background-color: #007bff;
  /* 按钮背景色 */
  color: #fff;
  /* 按钮文字颜色 */
  border: none;
  /* 移除按钮边框 */
  border-radius: 5px;
  /* 按钮圆角 */
  cursor: pointer;
  /* 鼠标样式为手型 */
}
</style>
