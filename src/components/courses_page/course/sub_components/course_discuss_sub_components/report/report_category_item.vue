<template>
    <div class="report_category_div">
        <a href="javascript:;"
           class="report_category_a"
           :class="current_category === category_id ? 'active' : ''"
           @click="change_category_and_get_report({'key': 'lab_id', 'value': category_id})"
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
            current_category: state => state.course.course_report_args.lab_id,
            course_id: state => state.course.course_id,
            report_args: state => state.course.course_report_args
        })
    },

    methods: {
        ...mapActions({
            change_category: 'course/change_report_args',
            change_report_information: 'course/change_report_information'
        }),

        change_category_and_get_report: function (args) {
            this.change_category(args)
            this.change_report_information({
                'course_id': this.course_id,
                'lab_id': this.category_id,
                'page_size': this.report_args.page_size
            })
        }
    }
}

</script>
<style type="text/css" scoped>
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
