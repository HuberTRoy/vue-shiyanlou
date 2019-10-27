<template>
    <div class="tab_page_div">
        <button class="tab_page_button tab_page_button_prev"
        @click="prev()">«上一页</button>
        <button class="tab_page_button tab_page_button_next"
        @click="next()">下一页»</button>
    </div>    
</template>
<script type="text/javascript">
export default {
    props: {
        next: {
            require: true,
            type: Function
        },
        prev: {
            require: true,
            type: Function
        }
    }
}
</script>
<style type="text/css" scoped>
.tab_page_div {
    display: flex;
    justify-content: center;
}

.tab_page_button {
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #08bf91;
    background-color: #fff;
    border: 1px solid #dee2e6;
}

.tab_page_button_next {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
}

.tab_page_button_prev {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}

.tab_page_button:hover {
    z-index: 2;
    color: #057659;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
}
</style>