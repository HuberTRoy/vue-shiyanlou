<template>
    <div class="category-wrapper">
        <!-- 左中右 -->
        <div class="main-width category">
            <div class="menu">
                <div class="menu-item" v-for="i in 8" :key="i">
                    <span class="menu-item-title">Linux 运维：</span>
                    <span class="menu-item-rest">Linux / CentOS / Ansible / Git / Nginx / SDN</span>
                </div>

                <div class="menu-detail">
                    <div class="menu-detail-title">
                        Linux 运维
                    </div>

                    <div class="menu-detail-wrapper">
                        <div class="menu-detail-item">
                            Linux
                        </div>
                        <div class="menu-detail-item">
                            CentOS
                        </div>
                        <div class="menu-detail-item">
                            Ansible
                        </div>
                        <div class="menu-detail-item">
                            Git
                        </div>
                        <div class="menu-detail-item" v-for="i in 5" :index="i">
                            Nginx
                        </div>
                    </div>

                    <div style="flex-grow:1"></div>

                    <div class="menu-detail-title">
                        一周热门推荐
                    </div>

                    <div class="menu-detail-course">
                        <div class="course-card" v-for="i in 4" :index="i">
                            <img  class="course-card-img" src="https://dn-simplecloud.shiyanlou.com/assets/1681381381507_adb8da12220e6ec49508dca1e9f600a1" alt="">
    
                            <div class="course-card-right">
                                <div class="course-card-title">LAMP 部署及配置</div>
    
                                <div class="course-card-wrapper">
                                    <div class="course-card-tag">会员</div>
    
                                    <div>中级</div>
                                    <div> · </div>
                                    <div>9999</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="ad">
                <div class="ad-scroll-inner" :style="{
                    transform: `translateX(${adTransform})`
                }">
                    <div class="ad-item" v-for="i in maxAdCount" :key="i">
                        <img src="https://dn-simplecloud.shiyanlou.com/assets/1681381381507_adb8da12220e6ec49508dca1e9f600a1" alt="">
                    </div>
                </div>

                <div class="ad-operator">
                    <div class="ad-indicator">
                        <div class="ad-indicator-item" :class="[adScrollIndex === i - 1 ? 'active' : '']" v-for="i in maxAdCount" :key="i" @click="adScrollIndex = i - 1"></div>
                    </div>
    
                    <div class="ad-switch">
                        <div class="ad-switch-left" @click="() => {
                            if (adScrollIndex - 1 > 0) {
                                adScrollIndex -= 1
                            } else {
                                adScrollIndex = maxAdCount - 1
                            }
                        }">&lt;</div>
                        <div class="ad-switch-right" @click="() => {
                            if (adScrollIndex + 1 <= 4) {
                                adScrollIndex += 1
                            } else {
                                adScrollIndex = 0
                            }
                        }">></div>
                    </div>
                </div>
            </div>
    
            <div class="user-card">
    
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const swiperTimeout = ref<ReturnType<typeof setTimeout>>()
const adScrollIndex = ref(0)
const maxAdCount = computed(() => {
    return 5
})

const adTransform = computed(() => {
    return `${-577 * adScrollIndex.value}px`
})

onMounted(() => {
    const sto = () => {
        if (adScrollIndex.value === 4) {
            adScrollIndex.value = 0
        } else {
            adScrollIndex.value += 1
        }

        setTimeout(sto, 2000)
    }
    swiperTimeout.value = setTimeout(sto, 2000)
})

onUnmounted(() => {
    clearTimeout(swiperTimeout.value)
})
</script>

<style scoped lang="less">
.category-wrapper {
    background: #3959ec;

}
.category {
    display: flex;
    align-items: center;
    padding: 10px;
    .menu {
        background: rgba(0,0,0,.5);
        border-radius: 5px;
        height: 373px;
        padding: 17px 0 0 10px;
        width: 272px;
        z-index: 100;
        color: #fff;
        position: relative;
        &-item {
            height: 42px;
            padding: 10px;
            color: #d8dceb;
            overflow: hidden;
            padding-right: 5px;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            cursor: pointer;


            &-title {
                color: #fff;
                font-size: 14px;
                font-weight: 500;
                margin-right: 6px;
                transition: all .3s;

                &:hover {
                    color: #2e7eee;
                }
            }


            &:hover {
                background: hsla(0,0%,100%,.08);
                border-radius: 5px 0 0 5px;
            }
        }

        &-detail {
            display: none;
            width: 587px;
            height: 373px;
            background: linear-gradient(226deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9));
            position: absolute;
            left: 272px;
            top: 0;
            border-radius: 0 5px 5px 0;
            padding: 19px 21px;
            flex-direction: column;
            color: #333;

            &-title {
                font-size: 16px;
                margin-bottom: 10px;
                cursor: pointer;
                &:hover {
                    color: #2e7eee;
                }
            }

            &-wrapper {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
            }

            &-item {
                color: #565656;
                margin-right: 29px;
                margin-bottom: 12px;
                cursor: pointer;

            }

            &-course {
                display: grid;
                grid-template-columns: 1fr 1fr;
                row-gap: 20px;
                gap: 10px;
            }

            .course-card {
                display: flex;

                &-img {
                    width: 84px;
                    height: 48px;
                    object-fit: cover;
                    border-radius: 5px;
                    box-shadow: 0 5px 10px 0 rgba(0,0,0,.08);
                    margin-right: 10px;
                }

                &-right {
                    display: flex;
                    flex-direction: column;
                }

                &-title {
                    font-size: 12px;
                    margin-bottom: 10px;
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    &:hover {
                        color: #2e7eee;
                    }
                }

                &-wrapper {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                }

                &-tag {
                    background: #f57e14;
                    color: #fff;
                    padding: 0 7px 1px;
                    border-radius: 17px;
                    margin-right: 12px;
                }
            }
        }

        &:hover {
            .menu-detail {
                display: flex;
            }
        }
    }

    .ad {
        display: flex;
        max-width: 577px;
        overflow: hidden;
        margin-left: 10px;
        border-radius: 5px;
        position: relative;
        &-scroll-inner {
            display: flex;
            transition: all 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            transform: translateX(0);
        }
        &-item {
            height: 373px;
            width: 577px;
        }

        &-operator {
            position: absolute;
            bottom: 30px;
            display: flex;
            cursor: pointer;
        }

        &-indicator {
            padding: 5px 21px;
            display: flex;
            align-items: center;
            border-radius: 30px;
            margin: 0 10px;
            &-item {
                width: 20px;
                height: 5px;
                background: hsla(0,0%,100%,.5);
                border-radius: 4px;
                transition: all .5s;

                & + .ad-indicator-item {
                    margin-left: 5px;
                }
            }

            &-item.active {
                width: 30px;
                background: #fff;
            }


        }

        &-switch {
            padding: 5px 21px;
            display: flex;
            align-items: center;
            border-radius: 30px;

            
            div {
                color: hsla(0,0%,100%,.5);

                & + div {
                    margin-left: 12px;
                }
            }

        }

        &:hover {

            .ad-indicator {
                background: rgba(0,0,0,.3);
            }

            .ad-switch {
                background: rgba(0,0,0,.3);

                div {
                    color: #fff;
                }

            }
        }
    }
}
</style>