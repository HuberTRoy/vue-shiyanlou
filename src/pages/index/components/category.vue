<template>
    <div class="category-wrapper">
        <!-- 左中右 -->
        <div class="main-width category">
            <div class="menu">
                <div class="menu-item" v-for="i in 8" :key="i">
                    <span class="menu-item-title">Linux 运维：</span>
                    <span class="menu-item-rest">Linux / CentOS / Ansible / Git / Nginx / SDN</span>
                </div>
            </div>
    
            <div class="ad">
                <div class="ad-scroll-inner" :style="{
                    transform: `translateX(${adTransform})`
                }">
                    <div class="ad-item" v-for="i in 5" :key="i">
                        <img src="https://dn-simplecloud.shiyanlou.com/assets/1681381381507_adb8da12220e6ec49508dca1e9f600a1" alt="">
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
    .menu {
        background: rgba(0,0,0,.5);
        border-radius: 5px;
        height: 373px;
        padding: 17px 0 0 10px;
        width: 272px;
        z-index: 100;
        color: #fff;
        
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
    }

    .ad {
        display: flex;
        max-width: 577px;
        overflow: hidden;

        &-scroll-inner {
            display: flex;
            transition: all 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            transform: translateX(0);
        }
        &-item {
            height: 373px;
            width: 577px;
        }
    }
}
</style>