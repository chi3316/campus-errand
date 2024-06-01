<template>
  <view style="margin: 20rpx">
    <view @click=copy()>{{ con }}</view>
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
      con: '要复制的文字',
    };
  },
  methods: {
    copy() {
      //复制文字示例代码：
      wx.setClipboardData({
        data: 'data',
        success(res) {
          wx.getClipboardData({
            success(res) {
              wx.showToast({
                title: '内容已复制',
                icon: 'none'
              })
              console.log(res.data) // data
            }
          })
        }
      })
    }
  }
};
</script>


<style scoped></style>