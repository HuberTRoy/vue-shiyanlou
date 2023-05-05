<script setup lang="ts">
import Header from "./components/header.vue";
import Footer from "@/components/footer.vue";
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style scoped lang="less"></style>
