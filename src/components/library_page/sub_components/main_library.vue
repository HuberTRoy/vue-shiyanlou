<template>
    <div class="libary_main_libray_div">
        <div class="libary_main_libray_content_header">
            <h5>前端开发</h5>
            <h6>更多</h6>
        </div>
        <div class="libary_main_libray_content_cards">
            <LibraryCard class="libray_main_library_content_card"
                         v-for="library in test_data"
                         :key="library.name"
                         :data="library"
            >
            </LibraryCard>
        </div>
    </div>
</template>
<script type="text/javascript">
import LibraryCard from '@/components/common_components/cards/library_card.vue'

export default {
    components: {
        LibraryCard
    },
    data: function () {
        return {
            test_data: [{
                chapters_count: 11,
                description: "CSS3 Tutorial 是一本关于 CSS3 的开源书。利用业余时间写了本书，图文并茂，用大量实例带你一步一步走进 CSS3 的世界。如有疏漏欢迎指正，欢迎提问。感谢您的参与",
                html_url: "/library/css3-tutorial",
                issue_url: "https://github.com/waylau/css3-tutorial/issues",
                name: "CSS3教程",
                repo_url: "https://github.com/waylau/,css3-tutorial",
                seo_keywords: [],
                slug: "css3-tutorial",
                tags: [{name: "CSS",
                        picture_url: "https://dn-simplecloud.shiyanlou.com/tech-icon/CSS.png"}]
            }]
        }
    }
}
</script>
<style type="text/css">
.libary_main_libray_div {
    width: 74%;
    margin-left: 15px;
    background: #fff;
    border: 1px solid #eee;
    padding: 30px;
}

.libary_main_libray_content_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.libray_main_library_content_card {
    width: 33%;
}

</style>