<template>
  <view class="container">
    <view class="item">
      <uni-list-item :show-extra-icon="true" :extra-icon="name" title="名字" />
    </view>
    <view class="avatar-wrapper">
      <button class="avatar-button" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
        <image class="avatar" :src="avatarUrl"></image>
      </button>
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
  align-items: center; /* 垂直居中对齐 */
  justify-content: space-between; /* 使内容在两端对齐 */
  width: 100%; /* 确保容器占据可用宽度 */
}
.item {
  flex-grow: 1; /* 使列表项占据尽可能多的空间 */
}
.avatar-wrapper {
  margin-left: 10px; /* 给头像按钮一些左边距 */
}
.avatar-button {
  border: none;
  background: none;
  padding: 0;
}
.avatar {
  width: 40px; /* 头像宽度，可以根据需要调整 */
  height: 40px; /* 头像高度，可以根据需要调整 */
  border-radius: 50%; /* 使头像变成圆形 */
}
</style>
