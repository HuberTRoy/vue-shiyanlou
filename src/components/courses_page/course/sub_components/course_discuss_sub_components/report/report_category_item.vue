<template>
    <div class="report_category_div">
        <a href="javascript:;"
           class="report_category_a"
           :class="current_category === category_id ? 'active' : ''"
           @click="change_category({'key': 'category_id', 'value': category_id})"
        >
            {{ category }}
        </a>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    props: {
        category: {
            type: String,
            require: true
        },

        category_id: {
            type: Number,
            require: true
        }
    },

    computed: {
        ...mapState({
            current_category: state => state.course.course_report_args.category_id
        })
    },

    methods: {
        ...mapActions({
            change_category: 'course/change_report_args'
        })
    }
}

</script>
<style type="text/css">
.report_category_a {
    display: block;
    padding: 8px 24px;
    background: #e6ecf3;
    color: #55667c;
    margin: 4px 2px;
}

.report_category_a:hover {
    color: #55667c;
}

.active {
    background-color: #55667c;
    color: #fff;
}

.active:hover {
    color: #fff;
}
</style>
