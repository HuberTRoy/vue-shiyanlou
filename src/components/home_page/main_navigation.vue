<template>
    <div id="main_navigation_background"
    :style="{background:bg_colors[current_index]}">
        <!--
            选择课程的区域 和 广告选择区域。
         -->
        <div id="main_navigation">
            <div id="course_categories">
                <ul id="course_categories_ul">
                   <li class="course_categories_li"
                       v-for="(nav,index) in index_categories"
                       :key="index"
                   >
                        <div class="course_categories_div">
                            <router-link :to="{ name: 'courses', query: {category: nav.name} }"
                                         class="main_course_button course_button">
                                {{ nav.name }}
                            </router-link>
                            <router-link v-for=" (sub, s_index) in nav.tags"
                                         v-if="s_index<2"
                                         :key="s_index"
                                         :to="{ name: 'courses', query: {category: nav.name, tag: sub.name} }"
                                         class="course_button">
                                {{ sub.name }}
                            </router-link>
                        </div>
                        <div class="sub_course_categories_div"
                             :style="{ top: index > 3 ? ((-57 * (index-4))-40)+'px' : '0px' }"
                        >
                            <p class="sub_course_categories_p">
                                {{ nav.name }}
                            </p>
                            <div class="sub_course_categories_span_div">
                                <span v-for="(sub_category, s_c_index) in nav.tags"
                                      :key="s_c_index"
                                      class="sub_course_categories_span">
                                    <router-link :to="{ name: 'courses', query: { category: nav.name, tag: sub_category.name } }"
                                                 class="sub_course_a">
                                        {{ sub_category.name }}
                                    </router-link>
                                </span>

                            </div>
                            <p class="sub_course_categories_p">课程推荐</p>
                            <p v-for="(recom, r_index) in nav.recommend_courses"
                               :key="r_index"
                               class="sub_course_p" >
                                <router-link :to="{ name: 'course', params: {id: recom.id} }"
                                             target="_blank"
                                             class="sub_recommend_course_a">
                                            {{ recom.name }}
                                </router-link>
                            </p>
                        </div>
                   </li>
                   <li class="course_categories_footer">
                       <div class="course_categories_footer_div">
                           <a href="#41" class="course_categories_footer_a">
                               训练营
                           </a>
                           <a href="#42" class="course_categories_footer_a">
                               经营专区
                           </a>
                       </div>
                   </li>
                </ul>
            </div>

            <transition-group name="ad_transition_group" tag="ul" class="ad_transition_group_ul">
                <li class="ads_li"
                    v-for="(ad,index) in index_banner"
                    :key="index"
                    v-show="current_index==index">
                    <a tag="a"
                                 class="ads_a"
                                 tagget="_blank"
                                 :href="ad['html_url']"
                                 >
                                 <!-- :to="{ name: ad.router_name, params: ad.router_params}" -->
                        <img class="ads_img" :src="ad['picture_url']">
                    </a>
                </li>
            </transition-group>
            
                <!-- 广告区域，分布在中间。 -->
             
             <div id="slide_ads_div">
                <ul class="slide_ads_ul">
                    <li class="slide_ads_li"
                        v-for="(ad,index) in index_banner"
                        :class="current_index==index ? 'slide_ads_li_adtive':''"
                        :key="index"
                        @mouseover="tab_ad(index)">
                    </li>
                </ul>
             </div>
        </div>

    </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    data () {
        return {
            current_index: 0
        }
    },
    computed: {
        ...mapState({
            index_banner: state => state.home.home_content.index_banner,
            index_categories: state => state.home.home_content.index_categories
        }),
        bg_colors: function () {
            let colors = []
            if (!this.index_banner) {
                return []
            }

            for (let ad of this.index_banner) {
                colors.push(ad['background_color'])
            }
            return colors
        }

    },
    methods: {
        tab_ad: function (_li) {
            this.current_index = _li
        }
    },
    mounted: function () {
        let _this = this
        setInterval(function () {
            if (_this.current_index + 1 < _this.bg_colors.length) {
                _this.current_index += 1
            } else {
                _this.current_index = 0
            }
        }, 3000)
    }
}

</script>

<style type="text/css">

/* 整个的背景 */
#main_navigation_background {
    width: 100%;
    /*background: rgb(35, 40, 54);*/
    transition: background 0.3s ease;
}

/* 主要承载布局区 */
#main_navigation {
    display: flex;
    justify-content: flex-start;
    height: 522px;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    position: relative;
}

/*
   课程大分类的li
   <li>
       <div1>
           <a>
           </a>
       </div1>
       <div2>
       </div2>
   </li>
 */
#course_categories {
    z-index: 5;
    background: rgba(37,37,37,.36);
    width: 260px;
}

.course_categories_li {
    /*width: 100%;*/
    height: 58px;
    padding: 18px 12px 0;
    margin-top: -1px;
    position: relative;
}

/* 大分类里 div1 的设置*/
.course_categories_div {
    /*z-index: 5;*/
    height: 100%;
    margin-top: -1px;
    border-bottom: 1px solid #bcbcbc;
}

.course_button {
    font-size: 12px;
    color: #fff;
    margin-right: 10px;
    margin-left: 5px;
}

.main_course_button {
    font-size: 16px;
}

.course_categories_li:hover {
    background: #fff;
}

.course_categories_li:hover div {
    border: none;
}

.course_categories_li:hover a {
    color: #666;
}

.course_categories_li:hover a:hover {
    color: #08bf91;
}

/* 大分类里 div2 的设置 */

.sub_course_categories_div {
    display: none;
    width: 400px;
    background: #fff;
    position: absolute;
    padding: 20px;
    top: 0;
    left: 260px;
    z-index: 5;
}

.course_categories_li:hover .sub_course_categories_div {
    display: flex;
    flex-direction: column;
}

/* div2 里的 hover 出来的二级子菜单 */

.sub_course_categories_p {
    display: inline-block;
    height: 22px;
    width: auto;
    line-height: 22px;
    padding: 0 10px;
    background: #eee;
    margin: 0 0 20px;
    margin-right: auto;
    font-size: 14px;
    text-align: center;

}

.sub_course_categories_span_div {
    display: flex;
    /*align-self: center;*/
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.sub_course_p {
    margin-bottom: 10px;
}

.sub_course_a {
    display: inline-block;
    border-left: 1px solid #666;
    border-right: 1px solid #666;
    padding: 0 10px;
    font-size: 12px;
    margin-left: -1px;
    margin-bottom: 10px;
}

.sub_recommend_course_a {
    display: inline-block;
    margin-bottom: 10px;
}

/* footer div 里的一些设置 */

.course_categories_footer {
    padding: 18px 12px 0;
}

.course_categories_footer_div {
    display: flex;
    justify-content: space-around;
    margin-right: auto;
    margin-left: auto;
}

.course_categories_footer_a {
    display: inline-block;
    color: #fff;
    width: 88px;
    height: 26px;
    border: 1px solid #fff;
    border-radius: 28px;
    text-align: center;
    font-size: 12px;
    line-height: 26px;
}

.course_categories_footer_a:hover {
    background: #fff;
    color: #666;
}

/* 推广滚动区  */

#slide_ads_div {
    display: flex;
    z-index: 5;
    align-self: flex-end;
    margin-right: auto;
    margin-left: auto;
    height: 20px;
}

.slide_ads_ul {
    display: flex;
    position: absolute;
    list-style-type: none;
    margin-left: -49px;
}

.slide_ads_li {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-right: 15px;
    background: #fff;
    opacity: 0.4;
}

.slide_ads_li_adtive {
    background: #ddd;
    opacity: 1;
}

/* 推广区 */
.ads_a {
    /*position: absolute;*/
}

.ads_img {
    width: 100%;
}

.ad_transition_group-move {
    transition: opacity 1s;
}

.ads_li {
    position: absolute;
    left: 20px;
}

.ad_transition_group-enter-active {
    transition: opacity 1s;
}

.ad_transiiton_group-leave-active {
    transition: opacity 1s;
}

.ad_transition_group-enter {
    opacity: 0;
}

.ad_transition_group-enter-to {
    opacity: 1;
}

.ad_transition_group-leave {
    opacity: 1;
}

.ad_transition_group-leave-to {
    opacity: 0;
}

</style>
