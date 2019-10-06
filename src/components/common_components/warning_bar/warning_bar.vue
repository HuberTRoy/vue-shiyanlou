<template>
    <div class="warning_bar"
         :class="[warning_bar_style_class, show_message ? 'show_warning_bar' : '']"
    >
        {{ message }}
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    data: function () {
        return {
            show_message: false
        }
    },
    computed: {
        ...mapState({
            message: state => state.warningBar.message,
            warning_bar_style_class: state => state.warningBar.warning_bar_style_class
        })
    },
    methods: {
        ...mapActions({
            change_message: 'warningBar/change_message'
        })
    },
    watch: {
        message: function () {
            if (this.message) {
                this.show_message = true
                setTimeout(()=>{ 
                    this.change_message('')
                    this.show_message = false 
                }, 3000)
            }
        }
    }
}

</script>
<style type="text/css" scoped>
.warning_bar {
    position: fixed;
    opacity: 0;
    width: 170px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    transition: opacity 1s ease;
    z-index: 9999;
    word-break: break-all;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
}

.show_warning_bar {
    opacity: 1;
}

/*
几个默认样式
*/

.alert {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}

.success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
}
</style>
