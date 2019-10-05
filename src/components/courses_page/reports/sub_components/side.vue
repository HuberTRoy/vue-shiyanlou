<template>
    <div class="reports_home_side">
        <div class="reports_home_side_tags">
            <p class="reports_home_side_tags_header">
                标签
            </p>
            <div class="reports_home_side_tags_container">
                <span class="reports_home_side_tag"
                      v-for="tag in tags"
                      :key="tag"
                      :class="[current_tag==tag ? 'reports_home_side_tag_active' : '']"
                      @click="_change_tag(tag)"
                >
                    {{ tag }}
                </span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            tags: state => state.reports.categories,
            current_tag: state => state.reports.reports_args.tag
        })
    },
    methods: {
        ...mapActions({
            get_categories: 'reports/change_categories',
            change_tag: 'reports/change_reports_args'
        }),
        _change_tag: function (tag) {
            this.change_tag({'tag': tag})
            this.$router.push({name: 'reports', query: {
                ...this.$route.query,
                'tag': tag
            }})
        }
    },
    created: async function () {
        await this.get_categories()
    }
}

</script>
<style type="text/css" scoped>
.reports_home_side {
    display: flex;
    flex-direction: column;
    width: 25%;
}

.reports_home_side_tags {
    background: #fff;
    padding: 30px;
}

.reports_home_side_tags_header {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.reports_home_side_tags_container {
    display: flex;
    flex-wrap: wrap;
}

.reports_home_side_tag {
    cursor: pointer;
    font-size: 12px;
    transition: background .6s ease;
    border-radius: 2px;
    margin-right: 4px;
    margin-bottom: 4px;
    padding: 4px 8px;
}

.reports_home_side_tag:hover {
    background: #0c9;
    color: #fff;
}

.reports_home_side_tag_active {
    background: #0c9;
    color: #fff;   
}

</style>
