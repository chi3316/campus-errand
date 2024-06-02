<template>
  <view style="margin: 20rpx">
    <view class="box" style="justify-content: space-between; margin-bottom: 20rpx">
      <view class="user-info-box" style="margin: 20rpx" @click="personalInfo">
        <fui-avatar size="large" :src="user.avatarUrl"></fui-avatar>
        <fui-text :text="user.nickName" :size="40" class="username-text"></fui-text>
      </view>
    </view>

    <view style="margin-bottom: 20rpx">
      <view class="box">
        <uni-list>
          <uni-list-item :show-extra-icon="true" :extra-icon="apply" title="申请接单" clickable showArrow
            to="../apply-order/apply-order" />
          <uni-list-item :show-extra-icon="true" :extra-icon="list" title="接单排行" clickable showArrow :to="`./chat`"
            @click="rank" />
        </uni-list>
      </view>
    </view>

    <!-- list -->
    <view style="margin-bottom: 20rpx">
      <view class="box">
        <uni-list>
          <uni-list-item :show-extra-icon="true" :extra-icon="gift" title="我的优惠卷" clickable showArrow
            @click="myDiscountCoupon" />
          <uni-list-item :show-extra-icon="true" :extra-icon="invite" title="邀请新人" clickable showArrow :to="`./chat`"
            @click="inviteNewPerson" />
        </uni-list>
      </view>
    </view>
    <view>
      <!-- 邀请新人 -->
      <uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
        <uni-popup-share></uni-popup-share>
      </uni-popup>
    </view>

    <view style="margin-top: 20rpx">
      <view class="box">
        <uni-list>
          <uni-list-item :show-extra-icon="true" :extra-icon="customerService" title="校区客服" clickable showArrow
            @click="campusService" />
          <uni-list-item :show-extra-icon="true" :extra-icon="feedback" title="反馈建议" clickable showArrow to="./chats"
            @click="feedBack" />
          <uni-list-item :show-extra-icon="true" :extra-icon="cooperate" title="合作投诉" clickable showArrow to="./chats"
            @click="cooperativeComplaint" />
          <uni-list-item :show-extra-icon="true" :extra-icon="about" title="关于我们" clickable showArrow to="./chats"
            @click="aboutUs" />
        </uni-list>
      </view>
    </view>
  </view>
</template>

<script>
import fuiAvatar from "@/components/firstui/fui-avatar/fui-avatar.vue";
import fuiIcon from "@/components/firstui/fui-icon/fui-icon.vue";
import fuiText from "@/components/firstui/fui-text/fui-text.vue";
export default {
  components: {
    fuiAvatar,
    fuiIcon,
    fuiText,
  },
  data() {
    return {
      about: {
        color: "#ff5500",
        size: "22",
        type: "gear-filled",
      },
      cooperate: {
        color: "#55f36f",
        size: "22",
        type: "chatboxes-filled",
      },
      customerService: {
        color: "#4cd964",
        size: "22",
        type: "weixin",
      },
      feedback: {
        color: "#0055ff",
        size: "22",
        type: "compose",
      },
      invite: {
        color: "#55aaff",
        size: "22",
        type: "staff",
      },
      apply: {
        color: "#ff557f",
        size: "22",
        type: "personadd",
      },
      list: {
        color: "#ff557f",
        size: "22",
        type: "list~",
      },
      gift: {
        color: "#ff557f",
        size: "22",
        type: "gift",
      },
      user: {
        nickName: "华园代跑用户",
        phoneNumber: "178****7975",
        avatarUrl:
          "https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/chatting.png", // 初始头像的 URL
      },
    };
  },
  onShow() {
    // 获取本地存储中的用户信息
    const storedUser = uni.getStorageSync("xm-user");
    if (storedUser) {
      // 如果有存储的用户信息，则更新 user 对象
      this.user = {
        nickName: storedUser.name || this.user.nickName,
        phoneNumber: storedUser.phone || this.user.phoneNumber,
        avatarUrl: storedUser.avatar || this.user.avatarUrl,
      };
    }
  },

  methods: {
    onClick(e) {
      console.log("执行click事件", e.data);
    },
    personalInfo() {
      console.log("跳转到个人信息");
      uni.navigateTo({
        url: "/pages/personal-info/personal-info",
      });
    },
    aboutUs() {
      console.log("跳转到关于我们");
      uni.navigateTo({
        url: "/pages/about-us/about-us",
      });
    },
    cooperativeComplaint() {
      console.log("跳转到合作投诉");
      uni.navigateTo({
        url: "/pages/cooperative-complaint/cooperative-complaint",
      });
    },
    campusService() {
      uni.showModal({
        title: "复制成功",
        content: "已复制校区客服微信号，您可以添加客服微信反馈问题",
        showCancel: false,
        success: (res) => {
          if (res.confirm) {
            uni.setClipboardData({
              data: "chichi120877",
              success(res) {
                uni.getClipboardData({
                  success(res) {
                    wx.showToast({
                      title: '已复制客服微信号',
                    })
                    console.log(res.data); // data
                  },
                });
              },
            });
          }
        },
      });
    },
    feedBack() {
      console.log("跳转到反馈建议");
      uni.navigateTo({
        url: "/pages/feedback/feedback",
      });
    },
    requestForOrder() {
      console.log("跳转到申请接单");
      uni.navigateTo({
        url: "/pages/request-for-order/request-for-order",
      });
    },
    myDiscountCoupon() {
      console.log("跳转到我的优惠券");
      uni.navigateTo({
        url: "/pages/my-discount-coupon/my-discount-coupon",
      });
    },
    rank() {
      console.log("跳转到接单排行");
      uni.navigateTo({
        url: "/pages/rank/rank",
      });
    },
    inviteNewPerson() {
      console.log("邀请新人");
      this.$refs.share.open()
    }
  },
};
</script>

<style>
.grid-item-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}

.text {
  font-size: 14px;
  margin-top: 5px;
}

.title {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 10rpx;
}

.user-info-box {
  display: flex;
  align-items: center;
}

.username-text {
  margin-left: 12px;
  margin-top: -30rpx;
}
</style>