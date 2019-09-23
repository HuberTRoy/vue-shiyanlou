<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions({
        monitingScroll: 'scrollBar/updateScrollValue',
        get_user_info: 'loginState/change_user_info',
        get_studied_courses: 'loggedInfo/change_user_studied_courses'
    })
  },
  
  computed: {
    ...mapState({
      isLogin: state => state.loginState.sign_on
    })
  },

  created () {
    if (this.isLogin) {
      this.get_user_info()
      this.get_studied_courses()
    }
  },

  mounted () {
    window.addEventListener('scroll', this.monitingScroll)
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  border: 0;
  height: 100%;
  background: #f9f9f9;
  font-size: 13px;
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
}

* {
    margin: 0;
    padding: 0;
}

body {
    line-height: 1.4285;
}

img {
    height: 100%;
    border: 0;
    vertical-align: middle;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

a {
  text-decoration: none !important;
}

</style>
