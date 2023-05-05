<template>
    <div class="courses main-width">
        <!-- 这里面是具体的课程卡片 -->
        <div class="course-card" v-for="i in 5" :key="i">
            <img src="@/assets/1.png" alt="">

            <div class="course-card-title">
                新手测试蓝桥
            </div>

            <div class="course-card-tags">
                <div class="course-card-tag">
                    新手入门
                </div>
            </div>

            <div class="course-card-info">
                <span>初级</span>
                <span> · </span>
                <span>999人学过</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.courses {
    display: grid;
    margin-top: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
    row-gap: 20px;
    .course-card {
        background: #fff;
        border-radius: 10px;
        display: inline-block;
        padding: 15px 15px 19px;
        width: 270px;

        img {
            border-radius: 10px;
            height: 136px;
            width: 240px;
        }

        &-title {
            color: #000;
            font-size: 14px;
            font-weight: 500;
            height: 20px;
            line-height: 20px;
            margin: 12px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        
        &-tags {
            color: #999;
            display: flex;
            flex-wrap: wrap;
            font-size: 12px;
            font-weight: 400;
            height: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 30px;
        }

        &-tag {
            background: #fafafa;
            border-radius: 12px;
            padding: 0 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-info {
            color: #999;
            display: flex;
            font-size: 14px;
            font-weight: 400;
        }
    }
}
</style>