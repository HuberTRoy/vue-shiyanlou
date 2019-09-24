<template>
    <div class="report_content_item">
        <div class="report_content_item_div">
            <router-link tag="a"
                         :to="{ name: 'report', params: { id:data.id } }"
                         class="report_content_item_a"
            >
                <div class="report_content_name">
                    <p class="report_content_item_p course_name">
                        {{ data.course_name }}
                    </p>
                    <p class="report_content_item_p lab_name">
                        {{ data.lab_name }}
                    </p>
                </div>

                <div class="report_content_length">
                    <p class="report_content_item_p length">
                        {{ data.word_count }}
                    </p>
                    <div class="label">
                    </div>
                </div>
            </router-link>
        </div>
        <div class="report_author_item_div">
            <div class="avatar_and_level">
                <img :src="data.author.avatar_url" class="report_author_avatar" />
                <span class="author_name">
                    <span class="author_name_span_for_hide">
                        {{ data.author.name }}
                    </span>
                    <span class="level">
                        L{{ data.author.level }}
                    </span>
                </span>
            </div>
            <div class="report_comments">
                <i class="far fa-comments comments_icon"></i>
                {{ data.comments_count }}
            </div>
        </div>
        <div class="report_update_time_div">
            {{ data.updated_at }}
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    props: {
        data: {
            type: Object,
            require: true
        }
    }
}
</script>
<style type="text/css">
.report_content_item {
    display: flex;
    flex-direction: column;
    padding: 6px 20px 20px;
    border-radius: 3px;
}

/**/

.report_content_item_a {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    color: #565a61;
    background: #f7f8fa;
    height: 220px;
    padding: 25px 15px;
    margin: 15px 0;
    border: 1px solid #eee;
}

.report_content_item_a:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    right: -1px;
    top: -1px;
    border-width: 0 16px 16px 0;
    border-color: #fff #fff #e3e8eb #e3e8eb;
    border-style: solid;
}

.course_name {
    margin-bottom: 10px;
    overflow: hidden;
    font-size: 14px;
    font-weight: 700;
    color: #4c5157;
}

.lab_name {
    color: #565a61;
    font-size: 13px;
    overflow: hidden;
}

.report_content_length {
    display: flex;
    width: 81px;
    background: #fff;
    margin-left: -20px;
    height: 24px;
    font-size: 12px;
    line-height: 22px;
    padding: 0 24px 0 12px;
    border: 1px solid #e3e8eb;
}

.label {
    margin-left: 16px;
    height: 0;
    border: 12px solid transparent;
    /*border-right: 12px solid ;*/
    border-right: 12px solid #f7f8fa;
}

/*  */
.report_author_item_div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.report_comments {
    font-size: 13px;
    color: #9b9da2;
}

.comments_icon {
    font-size: 16px;
}

.report_author_avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}

.avatar_and_level {
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    align-items: center;
    width: 80%;
}

.author_name {
    width: 70%;
    display: flex;
    color: #9b9da2;
    overflow: hidden;
}

.author_name_span_for_hide {
    width: 70%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.level {
    color: #ffc500;
    font-size: 12px;
    font-weight: 700;
}

/**/
.report_update_time_div {
    color: #9b9da2;
    align-self: flex-end;
}
</style>
