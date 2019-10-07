<template>
    <!--
        项目布局
        nav_title
        path_description
        courses    others
     -->
    <div class="course_path">
        <NavTitle></NavTitle>
        <PathDescription></PathDescription>
        <PathOperation></PathOperation>
        <div class="path_courses_detail_and_related_items_div">
            <PathCoursesDetail class="path_courses_detail"></PathCoursesDetail>
            <RelatedItems class="related_items"></RelatedItems>
        </div>
    </div>
</template>
<script type="text/javascript">
import NavTitle from './sub_components/nav_title.vue'
import PathDescription from './sub_components/path_description.vue'
import PathOperation from './sub_components/path_operation.vue'
import PathCoursesDetail from './sub_components/path_courses_detail.vue'
import RelatedItems from './sub_components/related_items.vue'

export default {
    components: {
        NavTitle,
        PathDescription,
        PathOperation,
        PathCoursesDetail,
        RelatedItems
    }

}

</script>
<style type="text/css" scoped>
.course_path {
    margin-right: auto;
    margin-left: auto;
    width: 1170px;
    padding: 5px;
}

.path_courses_detail_and_related_items_div {
    display: flex;
}

.path_courses_detail {
    width: 75%;
}

.related_items {
    width: 25%;
    margin-right: -15px;
}

</style>
