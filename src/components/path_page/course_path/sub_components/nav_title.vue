<template>
    <div class="path_title">
        <router-link tag="a" to="/path"
        class="nav_title_a"
        >
            学习路径
        </router-link>
        <span class="separator_span">
        </span>
        <router-link tag="a"
        class="nav_title_a"
        :to="{ name: 'coursePath', params: { id: this.$route.params.id } }"
        >
             {{ course_path_title }}
        </router-link>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            course_path_title: state => state.path.course_path_information.name
        })
    }
}
</script>
<style type="text/css" scoped>
.path_title {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
}

.nav_title_a {
    color: #666;
    font-size: 13px;
}

.separator_span {
    padding: 0 6px;
}

.separator_span::before {
    content: "/\00a0";
    color: #ccc;
}

.nav_title_a:hover {
    color: #0c9;
}
</style>
