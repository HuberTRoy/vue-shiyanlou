<template>
    <a href="javascript:;" class="selection_button_a">
        {{ text }}
    </a>
</template>
<script type="text/javascript">
export default {
    props: {
        text: {
            type: String,
            require: true
        }
    }
}
</script>
<style type="text/css">
.selection_button_a {
    display: inline-block;
    margin: 0 8px 10px 0;
    padding: 4px 10px;
    font-size: 15px;
    color: #666;
    border-radius: 15px;
    cursor: pointer;
    transition: color 1s ease;
    transition: background .5s ease;
}

.selection_button_a:hover {
    color: #fff;
    background: #08bf91;
}

.selected {
    color: #fff;
    background: #08bf91;
}

</style>
