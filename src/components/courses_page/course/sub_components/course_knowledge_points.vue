<template>
    <div class="course_knowledge_points_div">
        <ul class="course_nav_ul">
            <li class="course_nav_li">
                你将会学到
            </li>
        </ul>
        <div class="knowledge_points_div">
            <div class="points_div"
                 v-for="points in course_knowledge_points"
                 :key="points"
            >
                {{ points }}
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            course_knowledge_points: state => state.course.course_information.points
        })
    }
}
</script>
<style type="text/css" scoped>
.course_knowledge_points_div {
    background: #fff;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 10px;
}

.course_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.course_nav_li {
    color: #565656;
    font-weight: 500;
    font-size: 20px;
    padding-bottom: 5px;
}

.knowledge_points_div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 0;
    background: #f7f7f7;
    font-size: 16px;
    font-weight: 500;
    color: #565656;
}

.points_div {
    width: 50%;
    padding-left: 15px;
    padding-right: 15px;
    /* 这里之后有正确数据时再修改为 v-if index >= 2 的会加一个class这样 */
    margin-bottom: 15px;

}

.points_div:before {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAAAAXNSR0IArs4c6QAAAPdJREFUKBVjYCATcO2fbMJ7eIoaSDsjOWaADPjP+G83UPs39v+82kykGgIz4P9/BgGG///7PzgmfiDJJcgGADWWfnfM7wE5gplYl3Adnmj8////PSAXIBsA0k+Ud8AG/GXcjc0AsCEyx1Zxch6YXAi0BavXuA5NMfoPNuC/ILoLYL5gevPzRf/////6OA9OnoNuENiAf/+AXsBtANglTKyMTQyMjLeAIZ2EbBCxBoAMAXuB68hkqX9//u8HGqQGNHAeE/P/af//MuwChoEQLi/AvAI3BMRANYjhD8N/BhZiDEAxBN0gYg0A6cMAIBdxHZycjCGBRwAAC7SWSWFuSDoAAAAASUVORK5CYII=);
    margin-right: 15px;
}
</style>
