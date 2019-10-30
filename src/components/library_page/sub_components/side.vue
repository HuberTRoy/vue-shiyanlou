<template>
    <!-- 
        布局
        all
        ----
        kind  -> | k
        ----     | i
        kind     | n
        ----     | d

        类似主页中的布局

     -->
    <div class="library_side_div" v-if="index_content">
        <div class="library_side_category_header_div">
            <router-link tag="a" :to="{name:'library'}" class="without_default_css_a">
                <i class="fa fa-th"></i>
                全部教程
            </router-link>
        </div>
        <div class="library_side_category_sub_header_div" 
             v-for="nav in index_content.nav"
             :key="nav.topic"
             @mouseover="enter_sub_header(nav.topic)"
             @mouseout="out_sub_header()"
        >
            <div class="library_side_category_sub_header_categories_div"
            >
                <router-link class="library_side_category_topic bling_a"
                             :to="{ name:'library', query: {'topic': nav.topic} }"
                >
                    {{ nav.topic }}
                </router-link>
                <router-link class="library_side_category_item bling_a"
                             v-for="(tag,index) in nav.tags.slice(0, 2)"
                             :key="tag.name"
                             :to="{ name:'library', query: {'topic': nav.topic, 'tag': tag.name} }"
                   >
                    {{ tag.name }}
                </router-link>

            </div>
            <div class="library_side_category_sub_header_extends_div"
                 :class="[show_sub_header == nav.topic ? 'show_self' : '']"
            >
                <router-link class="sub_header_extends_a without_default_css_a"
                             v-for="(tag,index) in nav.tags"
                             :to="{ name:'library', query: {'topic': nav.topic, 'tag': tag.name} }"
                             :key="tag.name"
                >
                    <img class="sub_header_extends_img" 
                         :src="tag.picture_url">
                    <span class="sub_header_extends_span">{{ tag.name }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    data: function () {
        return {
            show_sub_header: -1
        }
    },
    computed: {
        ...mapState({
            index_content: state => state.library.index_content
        })
    },
    methods: {
        enter_sub_header: function (index) {
            this.show_sub_header = index
        },
        out_sub_header: function () {
            this.show_sub_header = -1
        }
    }
}
</script>
<style type="text/css" scoped>
.library_side_div {
    width: 23%;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
}

.library_side_category_header_div {
    /**/
    padding: 20px 15px;
    color: #fff;
    height: 60px;
    width: 260px;
    background: #08bf91;
    font-size: 16px;
}

.without_default_css_a {
    color: #fff;
}

.without_default_css_a:hover {
    color: #fff;
}

.library_side_category_sub_header_div {
    width: 260px;
    font-size: 16px;
    height: 60px;
    padding: 0 14px;
    background: #fff;
    color: #666;
    position: relative;
}

.library_side_category_sub_header_div:hover {
    background: #fbfbfb;
}

.library_side_category_sub_header_categories_div {
    padding: 16px 0;
    border-bottom: 1px solid hsla(0,0%,74.1%,.2);
    display: flex;
    align-items: flex-end;
    height: 100%;
    flex-wrap: wrap;
}

.library_side_category_topic {
    font-size: 16px;
    margin-right: 15px;
}

.library_side_category_item {
    font-size: 12px;
    margin-right: 15px;
}

.bling_a {
    color: #666;
}

.bling_a:hover {
    color: #08bf91;
}


.library_side_category_sub_header_extends_div {
    position: absolute;
    top: 0;
    left: 260px;
    width: 300px;
    padding: 20px 30px 0;
    background-color: #fbfbfb;
    box-shadow: 0 1px 10px 0 hsla(0,0%,61.2%,.5);
    word-spacing: -4px;
    transition: all .1s ease-out;
    opacity: 0;
    visibility: hidden;
    display: flex;
    flex-wrap: wrap;
}

.library_side_category_sub_header_categories_div:hover:after {
    content: "";
    width: 13px;
    background: #fbfbfb;
    position: absolute;
    height: 100%;
    right: -3px;
    top: 0;
    z-index: 1;
}

.show_self {
    visibility: visible;
    opacity: 1;
}

.sub_header_extends_a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    margin-bottom: 20px;
}

.sub_header_extends_img {
    width: 35px;
    height: 35px;
    margin-bottom: 5px;
    border-radius: 50%;
}

.sub_header_extends_span {
    color: #666;
    font-size: 12px;
}
/*.library_side_category_sub_header_div:hover {*/

/*}*/

</style>
