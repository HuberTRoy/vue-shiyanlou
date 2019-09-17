<template>
    <div class="client_area_div">
        <Login></Login>
        <ScrollBar class="client_area_scroll_bar"
        :class="scrolled ? 'scroll_bar_scrolled' : ''"
        ></ScrollBar>
        <LoginPage></LoginPage>
        <Footer></Footer>
    </div>
</template>
<script type="text/javascript">
import ScrollBar from '@/components/common_components/scroll_bar/scroll_bar.vue'
import Login from '@/components/common_components/sign_on_up/login.vue'
import Footer from '@/components/common_components/footer/footer.vue'
import LoginPage from '@/components/client_area_page/login.vue'

import { mapState } from 'vuex'

export default {
    components: {
        ScrollBar,
        Login,
        Footer,
        LoginPage
    },

    computed: {
        ...mapState({
            scrolled: state => state.scrollBar.currentScrolledValue > 50,
            logged: state => state.loginState.sign_on
        })
    },
    watch: {
        logged: function (n, o) {
            if (n) {
                this.$router.push({name: 'Home'})
            }            
        }
    },
    created: function () {
        if (this.logged) {
            this.$router.push({name: 'Home'})
        }
    }
}
</script>
<style type="text/css">
.client_area_scroll_bar {
    position: relative;
    box-shadow: 0 0 16px 0 rgba(0,0,0,.18);
    margin-bottom: 20px;
}

.scroll_bar_scrolled {
    position: fixed;
}

</style>
