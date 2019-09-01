<template>
    <div class="course_title">
        <router-link tag="a" to="/courses"
        class="nav_title_a"
        >
            全部课程
        </router-link>
        <span class="separator_span">
        </span>
        <div class="course_tags_div"
            v-for="(c_tag, index) in course_tags"
            :key="c_tag"
        >
            <router-link tag="a"
            class="nav_title_a"
            :to="{ name: 'courses', query: { tag: c_tag } }">
                {{ c_tag }}
            </router-link>
            <span v-if="index!=course_tags.length - 1">,  &nbsp;&nbsp;</span>
        </div>
        <span class="separator_span">
        </span>
        <router-link tag="a"
        class="nav_title_a"
        :to="{ name: 'course', params: { id: this.$route.params.id } }"
        >
             {{ course_title }}
        </router-link>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            course_title: state => state.course.course_information.course_title,
            course_tags: state => state.course.course_information.course_tags
        })
    }
}
</script>
<style type="text/css">
.course_title {
    display: flex;
}
.nav_title_a {
    color: #666;
    font-size: 13px;
}

.separator_span {
    padding: 0 5px;
}

.separator_span::before {
    content: "/\00a0";
    color: #ccc;
}

.nav_title_a:hover {
    color: #0c9;
}
</style>
