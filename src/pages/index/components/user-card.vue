<template>
  <div class="user-card">
    <div class="user-card-info">
      <img src="@/assets/default-avatar.png" alt="" />
      <div style="display: flex; flex-direction: column">
        <span style="color: #000; font-size: 16px; margin-bottom: 2px"
          >你好，小伙伴~</span
        >
        <span
          style="
            color: #999;
            font-size: 14px;
            font-weight: 400;
            white-space: nowrap;
          "
          >首次登录拿100元优惠券</span
        >
      </div>
    </div>

    <div style="position: relative">
      <img
        src="@/assets/new-user-card.png"
        alt=""
        style="
          height: 109px;
          margin: 16px 0 0 0;
          width: 193px;
          object-fit: cover;
        "
      />
      <span
        style="
          color: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
          font-size: 20px;
          margin-top: 10px;
        "
        >新人福利￥100</span
      >
    </div>

    <div class="line"></div>

    <img src="@/assets/hundred-icon.png" alt="" style="width: 123px" />

    <div class="receive-button">立即领取</div>

    <span
      style="
        color: #999;
        font-size: 14px;
        font-weight: 400;
        white-space: nowrap;
      "
      >实训营课程·刷题会员·高级会员通用</span
    >
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.user-card {
  border-radius: 0 10px 0 0;
  height: 373px;
  width: 233px;
  background: url("@/assets/user-status.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &-info {
    display: flex;
    img {
      margin-right: 9px;
      width: 42px;
      height: 42px;
      object-fit: cover;
    }
  }
  .line {
    background: #e6e6e6;
    display: block;
    height: 1px;
    margin: 13px auto;
    width: 190px;
  }

  .receive-button {
    background: linear-gradient(1turn, #ff5905, #ff8e55);
    border-radius: 20px;
    box-shadow: 0 10px 20px 0 rgba(255, 89, 5, 0.15);
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    height: 40px;
    line-height: 40px;
    margin: 20px 15px 10px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>
