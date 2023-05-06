<template>
  <div class="category-wrapper">
    <!-- 左中右 -->
    <div class="main-width category">
      <div class="menu">
        <div
          class="menu-item"
          v-for="cate in categoryData.slice(0, 8)"
          :key="cate.name"
          @mouseenter="curCategory = cate"
        >
          <span class="menu-item-title">{{ cate.name }}：</span>
          <span class="menu-item-rest">{{
            cate.tags.map((i) => i.name).join(" / ")
          }}</span>
        </div>

        <div class="menu-detail">
          <div class="menu-detail-title">{{ curCategory?.name }}</div>

          <div class="menu-detail-wrapper">
            <div
              class="menu-detail-item"
              v-for="tag in curCategory?.tags"
              :key="tag.name"
            >
              {{ tag.name }}
            </div>
          </div>

          <div style="flex-grow: 1"></div>

          <div class="menu-detail-title">一周热门推荐</div>

          <div class="menu-detail-course">
            <div
              class="course-card"
              v-for="recommend in curCategory?.recommend_courses"
              :index="recommend.id"
            >
              <img class="course-card-img" :src="recommend.image" alt="" />

              <div class="course-card-right">
                <div class="course-card-title">{{ recommend.name }}</div>

                <div class="course-card-wrapper">
                  <div class="course-card-tag">
                    {{ FEE_TYPE_DICT[recommend.fee_type] }}
                  </div>

                  <div>{{ LEVEL_DICT[recommend.level] }}</div>
                  <div>·</div>
                  <div>{{ recommend.students_count }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ad">
        <div
          class="ad-scroll-inner"
          :style="{
            transform: `translateX(${adTransform})`,
          }"
        >
          <div class="ad-item" v-for="i in banner" :key="i.picture_url">
            <img :src="i.picture_url" alt="" />
          </div>
        </div>

        <div class="ad-operator">
          <div class="ad-indicator">
            <div
              class="ad-indicator-item"
              :class="[adScrollIndex === i - 1 ? 'active' : '']"
              v-for="i in maxAdCount"
              :key="i"
              @click="adScrollIndex = i - 1"
            ></div>
          </div>

          <div class="ad-switch">
            <div
              class="ad-switch-left"
              @click="
                () => {
                  if (adScrollIndex - 1 > 0) {
                    adScrollIndex -= 1;
                  } else {
                    adScrollIndex = maxAdCount - 1;
                  }
                }
              "
            >
              &lt;
            </div>
            <div
              class="ad-switch-right"
              @click="
                () => {
                  if (adScrollIndex + 1 <= maxAdCount - 1) {
                    adScrollIndex += 1;
                  } else {
                    adScrollIndex = 0;
                  }
                }
              "
            >
              >
            </div>
          </div>
        </div>
      </div>

      <user-card></user-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import {
  IGetIndexCategory,
  indexCategory,
  IGetIndexBanner,
  indexBanner,
} from "../../../api/home";
import { LEVEL_DICT, FEE_TYPE_DICT } from "@/const/index";
import userCard from "./user-card.vue";

const swiperTimeout = ref<ReturnType<typeof setTimeout>>();
const adScrollIndex = ref(0);
const categoryData = ref<IGetIndexCategory[]>([]);
const banner = ref<IGetIndexBanner[]>([]);
const curCategory = ref<IGetIndexCategory>();
const maxAdCount = computed(() => {
  return banner.value.length;
});

const adTransform = computed(() => {
  return `${-577 * adScrollIndex.value}px`;
});

const getCategory = async () => {
  const res = await indexCategory();

  if (res.status === 200) {
    categoryData.value = res.data;
  }
};

const getBanner = async () => {
  const res = await indexBanner();
  if (res.status === 200) {
    banner.value = res.data;
  }
};

onMounted(() => {
  getCategory();
  getBanner();
  const sto = () => {
    if (!maxAdCount.value) return;

    if (adScrollIndex.value === maxAdCount.value - 1) {
      adScrollIndex.value = 0;
    } else {
      adScrollIndex.value += 1;
    }

    setTimeout(sto, 3000);
  };
  swiperTimeout.value = setTimeout(sto, 3000);
});

onUnmounted(() => {
  clearTimeout(swiperTimeout.value);
});
</script>

<style scoped lang="less">
.category-wrapper {
  background: #3959ec;
}
.category {
  display: flex;
  align-items: center;
  padding: 10px 0;
  .menu {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    height: 373px;
    padding: 17px 0 0 10px;
    width: 272px;
    color: #fff;
    z-index: 2;
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
        transition: all 0.3s;

        &:hover {
          color: #2e7eee;
        }
      }

      &:hover {
        background: hsla(0, 0%, 100%, 0.08);
        border-radius: 5px 0 0 5px;
      }
    }

    &-detail {
      display: none;
      width: 587px;
      height: 373px;
      background: linear-gradient(
        226deg,
        hsla(0, 0%, 100%, 0.9),
        hsla(0, 0%, 100%, 0.9)
      );
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
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
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
    margin: 0 5px;
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

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
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
        background: hsla(0, 0%, 100%, 0.5);
        border-radius: 4px;
        transition: all 0.5s;

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
        color: hsla(0, 0%, 100%, 0.5);

        & + div {
          margin-left: 12px;
        }
      }
    }

    &:hover {
      .ad-indicator {
        background: rgba(0, 0, 0, 0.3);
      }

      .ad-switch {
        background: rgba(0, 0, 0, 0.3);

        div {
          color: #fff;
        }
      }
    }
  }
}
</style>
