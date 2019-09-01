<template>
    <a class="order_button" href="javascript:;">
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
.order_button {
    display: block;
    color: #999;
    border: 1px solid #c9c9c9;
    padding: 3px 5px;
    font-size: 14px;
}

.order_button:hover, .order_button_selected {
    border: 1px solid #08bf91;
    color: #39cca7;
}

</style>
