<template>
    <div class="recently_lou_plus">
        <ul class="recently_lou_plus_nav_ul">
            <li class="recently_lou_plus_nav_li">
                <a class="recently_lou_plus_nav_a">
                    近期楼 +
                </a>
            </li>
        </ul>
        <ul class="recently_lou_plus_ul">
            <li v-for="(louPlus, index) in recently_louplus"
                :key="index"
                class="recently_lou_plus_li"
            >
                <router-link tag="a"
                             class="recently_lou_plus_a"
                             target="_blank"
                             :to=" { name: 'louPlus', params: {'name': louPlus.name} } "
                >
                    <span class="lou_plus_title">
                        {{ louPlus.name }}
                    </span>
                    <span class="lou_plus_date">
                        {{ trans_date(louPlus.open_time) }}
                    </span>
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
            recently_louplus: state => state.path.course_path_information.recently_louplus
        })
    },
    methods: {
        trans_date: function (time) {
            let date = new Date(time)
            let m = date.getMonth() + 1
            let d = date.getDate()
            m = m.toString()
            d = d.toString()
            m = m.padStart(2, '0')
            d = d.padStart(2, '0')

            return `${m}月${d}日`
        }
    }
}

</script>
<style type="text/css">
.recently_lou_plus {
    background: #fff;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 15px;
}

.recently_lou_plus_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.recently_lou_plus_nav_li {

}

.recently_lou_plus_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}

.recently_lou_plus_li {
    font-size: 14px;
}

/*.recently_lou_plus_li:hover {
    background: #f5f5f5;
}*/

.recently_lou_plus_a {

    display: flex;
    padding: 10px 0;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    color: #4c5157;
}

.lou_plus_title {
    width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.lou_plus_date {
    color: orange;
}

/*.recently_lou_plus_a:hover {
    color: #4c5157;
    background: #f5f5f5;
}*/
</style>
