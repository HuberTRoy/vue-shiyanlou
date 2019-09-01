<template>
    <div class="hot_path">
        <ul class="hot_path_nav_ul">
            <li class="hot_path_nav_li">
                <a class="hot_path_nav_a">
                    最热路径
                </a>
            </li>
        </ul>
        <ul class="hot_path_ul">
            <li v-for="(_path, index) in hot_path"
                :key="index"
                class="hot_path_li"
            >
                <router-link tag="a"
                             class="hot_path_a"
                             target="_blank"
                             :to="{ name: 'coursePath', params: {id: _path.id} }"
                >
                   <img :src="_path.icon">
                   <span>{{ _path.title }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            hot_path: state => state.path.course_path_information.hot_path
        })
    }
}

</script>
<style type="text/css">
.hot_path {
    background: #fff;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 15px;
}

.hot_path_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.hot_path_nav_li {

}

.hot_path_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}

.hot_path_li {
    font-size: 14px;
}

.hot_path_li:hover {
    background: #f5f5f5;
}

.hot_path_a {
    display: block;
    padding: 12px;
    width: 100%;
    height: 100%;
    color: #4c5157;
}

.hot_path_a:hover {
    color: #4c5157;
    background: #f5f5f5;
}
</style>
