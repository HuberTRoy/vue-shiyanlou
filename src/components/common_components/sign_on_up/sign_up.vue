<template>
    <div class="sign_up_dialog">
        <InputBar></InputBar>
        <a class="enter_button" href="javascript:;">注册</a>
    </div>
</template>

<script type="text/javascript">
import InputBar from './sub_components/input_bar.vue'

export default {
    components: {
        InputBar
    }
}
</script>

<style type="text/css">

.enter_button {
    display: block;
    width: 100%;
    color: #fff;
    background: #0c9;
    padding: 6px 12px;
    font-size: 14px;
    text-align: center;
}

.enter_button:hover {
    background: #007558;
    color: #fff;
}

</style>
