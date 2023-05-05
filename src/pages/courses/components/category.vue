<template>
  <div class="category main-width">
    <!-- 这个板有四个维度的筛选条件 -->
    <div class="filter">
      <span class="filter-title">方向：</span>

      <div class="filter-inner">
        <div class="filter-item active">全部</div>
        <div class="filter-item">计算机专业课</div>
      </div>
    </div>

    <div class="filter">
      <span class="filter-title">标签：</span>
    </div>

    <div class="filter">
      <span class="filter-title">类型：</span>
    </div>

    <div class="filter">
      <span class="filter-title">难度：</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.category {
  margin-top: 10px;
  background: #fff;
  border-radius: 10px;
  padding: 20px 20px 8px;
  display: flex;
  flex-direction: column;

  .filter {
    display: flex;
    margin-bottom: 10px;

    &-title {
      color: #000;
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      padding: 4px 0;
      flex-shrink: 0;
    }

    &-inner {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      cursor: pointer;
      display: inline-block;
      line-height: 14px;
      margin: 0 0 12px 8px;
      padding: 4px 12px;

      &.active {
        background: #eaf2fd;
        border-radius: 11px;
        color: #2e7eee;
        font-weight: 500;
      }
    }
  }
}
</style>
