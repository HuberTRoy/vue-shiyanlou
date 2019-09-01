<template>
    <div class="description_title_div">
        <div>
            <span class="title_span">
                {{
                    title
                }}
            </span>
            <span class="description_span">
                {{
                    description
                }}
            </span>
        </div>
        <a :href="url" class="more_course_button">
            更多>
        </a>
    </div>
</template>

<script type="text/javascript">
export default {
    props: {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: false
        },
        url: {
            type: String,
            require: true
        }
    }
}
</script>

<style type="text/css">
.description_title_div {
    display: flex;
    justify-content: space-between;
    width: 100%;

}

.title_span {
    color: #565656;
    font-size: 24px;
}

.description_span {
    color: #666;
    font-size: 14px;
    vertical-align: 2px;
}

.more_course_button {
    color: #666;
    font-size: 14px;
    padding-top: 8px;
}
</style>
