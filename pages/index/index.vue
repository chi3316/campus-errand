<template>
  <view style="padding: 20rpx">
    <view style="margin-bottom: 20rpx">
      <swiper circular indicator-dots autoplay :interval="interval" :duration="duration" style="height: 350rpx"
        indicator-color="rgba(255,255,255,0.6)" indicator-active-color="#3CB371" @click="toTakeOrder">
        <swiper-item v-for="item in imgs" :key="item">
          <image :src="item" alt="" style="width: 100%; height: 350rpx"></image>
        </swiper-item>
      </swiper>
    </view>
    <view style="margin-bottom: 20rpx">
      <uni-notice-bar v-if="content" show-icon speed="50" scrollable :text="content" />
    </view>
    <view style="display: flex" class="box" @click="toCourierPickup">
      <view class="category-item">
        <image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/box.png" style="width: 50%" mode="widthFix">
        </image>
        <view>代取快递</view>
      </view>

      <view class="category-item" @click="toMealPickup">
        <image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/fast-food.png" style="width: 50%" mode="widthFix">
        </image>
        <view>代取餐品</view>
      </view>

      <view class="category-item" @click="toErrand">
        <image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/run.png" style="width: 50%" mode="widthFix">
        </image>
        <view>校园跑腿</view>
      </view>

      <view class="category-item" @click="toOtherService">
        <image src="https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/other-1.png" style="width: 50%" mode="widthFix">
        </image>
        <view>其他服务</view>
      </view>
    </view>
  </view>
</template>

<script>
import request from "../../utils/request";
export default {
  data() {
    return {
      imgs: [
        "https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/banner1.png",
        "https://web-cjpdemo.oss-cn-guangzhou.aliyuncs.com/static/banner2.png",
      ],
      interval: 3000,
      duration: 500,
      content: "这是测试版本~~~",
      noticeList: [],
      inter: null,
    };
  },

  onShow() {
    uni.login({
      provider: "weixin",
      onlyAuthorize: true,
      success: function (event) {
        const { code } = event;
        const userLoginDTO = { code };
        console.log(userLoginDTO)
      }
    })
    console.log(process.env.NODE_ENV)
    this.load();
    // 检查本地存储中是否有用户信息
    const userData = uni.getStorageSync("xm-user");
    if (userData) {
      const currentTime = new Date().getTime();
      const tokenExpiration = userData.expiration;
      if (currentTime < tokenExpiration) {
        // Token 有效，不需要重新登录
        console.log("Token 有效:", userData);
        return;
      }
    }

    // Token 无效或不存在，提示用户登录
    uni.showModal({
      title: "温馨提示",
      content: "授权微信登录之后才能使用小程序哦",
      showCancel: false,
      success: (res) => {
        if (res.confirm) {
          this.performLogin();
        }
      },
    });

  },
  onHide() {
    clearInterval(this.inter);
    this.inter = null;
  },
  methods: {
    toMealPickup() {
      uni.navigateTo({ url: "../meal-pickup/meal-pickup" })
    },
    toOtherService() {
      uni.navigateTo({ url: "../other-service/other-service" })
    },
    toErrand() {
      uni.navigateTo({ url: "../errand/errand" })
    },
    toTakeOrder() {
      uni.navigateTo({ url: "../apply-order/apply-order" })
    },
    toCourierPickup() {
      uni.navigateTo({ url: "../courier-pickup/courier-pickup" })
    },
    isTokenExpired(expiration) {
      const currentTime = new Date().getTime();
      return currentTime > expiration;
    },
    load() {
      this.$request.get('/user/notice/selectAll').then(res => {
        this.noticeList = res.data.notices || []
        let i = 0
        this.content = this.noticeList.length ? this.noticeList[i].content : ''
        //切换公告内容
        if (this.noticeList.length > 1) {
          this.inter = setInterval(() => {
            i++
            if (i === this.noticeList.length) {
              i = 0
            }
            this.content = this.noticeList[i].content
          }, 6500)
        }
      })
    },
    performLogin() {
      uni.login({
        provider: "weixin",
        onlyAuthorize: true,
        success: function (event) {
          const { code } = event;
          const userLoginDTO = { code };
          request.post("/user/user/login", userLoginDTO).then((res) => {
            const userData = res.data;
            if (userData) {
              uni.setStorageSync("xm-user", userData);
              console.log("用户已登录:", userData);
            }
          });
        },
        fail: function (err) {
          console.log("登录失败：无法请求微信接口！" + err.code); // 一般是网络问题
        },
      });
    },
  }
};
</script>

<style>
.category-item {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  grid-gap: 20rpx;
}
</style>