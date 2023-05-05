<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const toCourses = () => {
  router.push("/courses");
};
</script>

<template>
  <div class="main">
    <div class="main-header">
      <div class="logo">蓝桥云课</div>
      <div class="nav">
        <div class="nav-item active">学习</div>
        <div class="nav-item">蓝桥杯</div>
        <div class="nav-item">讨论区</div>
        <div class="nav-search">
          <input type="text" placeholder="搜索 课程/书籍/问答" />
        </div>
      </div>

      <div class="main-login">
        <span>登录</span>
        <div class="main-login-register">注册</div>
      </div>
    </div>
    <div class="main-subheader">
      <div
        class="main-subheader-item"
        :class="[route.name === 'courses' ? 'active' : '']"
        @click="toCourses"
      >
        课程
      </div>
      <div class="main-subheader-item">蓝桥杯训练赛</div>
      <div class="main-subheader-item">实训营</div>
      <div class="main-subheader-item">竞赛</div>
      <div class="main-subheader-item">题库</div>
      <div class="main-subheader-item">考证</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.main {
  display: flex;
  flex-direction: column;

  &-header {
    display: flex;
    background: #2e7eee;
    padding: 0 30px;
    justify-content: space-between;
    height: 70px;
    align-items: center;
    color: #fff;

    .nav {
      display: flex;
      align-items: center;
      height: 100%;
      &-item {
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
        & + .nav-item {
          margin-left: 30px;
        }

        &.active {
          border-bottom: 2px solid #fff;
        }
      }

      &-search {
        margin-left: 31px;
        input {
          background: #0f65df;
          border: none;
          border-radius: 18px;
          box-shadow: none;
          box-sizing: border-box;
          color: #fff;
          font-size: 14px;
          font-weight: 400;
          height: 34px;
          outline: none;
          padding: 7px 25px 7px 18px;

          &::placeholder {
            color: #fff;
          }
        }
      }
    }
  }

  &-login {
    display: flex;
    align-items: center;
    cursor: pointer;

    &-register {
      margin-left: 22px;
      background: linear-gradient(318deg, #0933d4, #297df3);
      border-radius: 17px;
      padding: 6px 16px;
    }
  }

  &-subheader {
    background: hsla(0, 0%, 100%, 0.9);
    box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.102);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 100%;
      & + .main-subheader-item {
        margin-left: 20px;
      }

      &.active {
        color: #2e7eee;
        border-bottom: 2px solid #2e7eee;
      }
    }
  }
}
</style>
