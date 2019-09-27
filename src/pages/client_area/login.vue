<template>
    <div class="client_area_div">
        <LoginPage></LoginPage>
    </div>
</template>
<script type="text/javascript">
import LoginPage from '@/components/client_area_page/login.vue'

import { mapState } from 'vuex'

export default {
    components: {
        LoginPage
    },

    computed: {
        ...mapState({
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

</style>
