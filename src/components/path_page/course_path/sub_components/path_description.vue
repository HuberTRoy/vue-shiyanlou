<template>
    <div class="path_description_div">
        <div class="path_description_background" :style="{ 'background': 'url('+path_info.background_image+')' + 'no-repeat' }">
            <h4 class="path_name">
                {{ path_info.name }}
            </h4>
            <span class="path_description">
                {{ path_info.description }}
            </span>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            path_info: state => state.path.course_path_information
        })
    }
}

</script>
<style type="text/css" scoped>
.path_description_background {
    height: 250px;
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 0 15px;
    /*background-size: contain;*/
}

.path_name {
    padding: 0 15px;
    margin-top: 60px;
    margin-bottom: 50px;
    font-size: 30px;
}

.path_description {
    font-size: 14px;
    padding: 0 15px;
    overflow: hidden;
    width: 100%;
}

</style>
