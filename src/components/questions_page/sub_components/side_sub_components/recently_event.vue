<template>
    <div class="recently_event">
        <ul class="recently_event_nav_ul">
            <li class="recently_event_nav_li">
                <a class="recently_event_nav_a">
                    近期活动
                </a>
            </li>
        </ul>
        <ul class="recently_event_ul">
            <li v-for="(event, index) in recently_event"
                :key="index"
                class="recently_event_li"
            >
                <a href="javascript:;"
                   class="recently_event_a"
                >
                    {{ event.title }}
                </a>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            recently_event: state => state.questions.related_stuff_information.recently_event
        })
    }
}

</script>
<style type="text/css" scoped>
.recently_event {
    background: #fff;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 15px;
}

.recently_event_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.recently_event_nav_li {

}

.recently_event_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}

.recently_event_li {
    font-size: 14px;
}

.recently_event_li:hover {
    background: #f5f5f5;
}

.recently_event_a {
    display: block;
    padding: 12px;
    width: 100%;
    height: 100%;
    color: #4c5157;
}

.recently_event_a:hover {
    color: #4c5157;
    background: #f5f5f5;
}
</style>
