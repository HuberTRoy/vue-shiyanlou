<template>
  <div id="app">
    <Login></Login>
    <transition name="scroll_bar_transition">
        <ScrollBar v-show="show_index_scroll_bar"
                   :class="[route_name != 'Home' ? 'app_scroll_bar' : '',
                            route_name != 'Home' && route_name != 'course' && scrolled ? 'app_scroll_bar_scrolled' : '']"
        >
        </ScrollBar>
    </transition>
    <transition name="tab_router_view">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/common_components/footer/footer.vue'
import ScrollBar from '@/components/common_components/scroll_bar/scroll_bar.vue'
import Login from '@/components/common_components/sign_on_up/login.vue'

import { mapState, mapActions } from 'vuex'


export default {
  name: 'App',
  components: {
    Footer,
    ScrollBar,
    Login
  },
  methods: {
    ...mapActions({
        monitingScroll: 'scrollBar/updateScrollValue',
        get_user_info: 'loginState/change_user_info',
        get_studied_courses: 'loggedInfo/change_user_studied_courses'
    })
  },
  
  computed: {
    ...mapState({
      isLogin: state => state.loginState.sign_on,
      scrolled: state => state.scrollBar.currentScrolledValue > 50,
      show_index_scroll_bar: function (state) {
        if (this.$route.name == 'Home') {
            return state.scrollBar.show_scroll_bar
        } else {
            return true
        }
      },
      route_name: function () {
        console.log(this.$route.name)
        return this.$route.name
      }
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
  line-height: 1.4285;
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
}

* {
    margin: 0;
    padding: 0;
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

#app {
    height: calc(100vh - 263px);
}

.tab_router_view-enter-active, .tab_router_view-leave_active {
    opacity: 0;
    transition: all .5s;
}

.tab_router_view-enter {
    opacity: 1;
}

.tab_router_view-leave {
    opacity: 1;
}

.scroll_bar {
    position: fixed;
}

/* 滚动条的过渡设置 */
.scroll_bar_transition-enter-active, .scroll_bar_transition-leave-active {
    transition: opacity 0.3s;
}

.scroll_bar_transition-enter {
    opacity: 0;
}

.scroll_bar_transition_enter-to {
    opacity: 1;
}

.scroll_bar_transition-leave {
    opacity: 1;
}

.scroll_bar_transition-leave-to {
    opacity: 0;
}

.app_scroll_bar {
    position: relative;
    box-shadow: 0 0 16px 0 rgba(0,0,0,.18);
    margin-bottom: 20px;
}

.app_scroll_bar_scrolled {
    position: fixed;
}

</style>
