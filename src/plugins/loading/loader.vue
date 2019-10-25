<template>
  <div>
    <!-- 
      这里有个BUG： 注意下：
        https://github.com/vuejs/vue/issues/10416
     -->
    <div class="loading_div" v-if="isLoading" :key="'loading'">
        <i class="fas fa-spinner loading_animation"></i>
        <span class="loading_text">
            数据加载中，请稍后...
        </span>
    </div>
    <slot v-else>
    </slot>
  </div>
</template>

<script>

export default {
  props: {
    source: {
      require: true
    },
    funcs: {
      type: Array,
      default: () => new Array()
    }
  },
  data () {
    return {
      isLoading: true, // default is true
    }
  },
  methods: {
    hookFuncs: function () {
      // Add a hook that will set isLoading true before all funcs call.
      for (let func of this.funcs) {
        let oldFunc = this.$parent[func]
        this.$parent[func] = () => {
          this.isLoading = true
          oldFunc()
        }
      }
    }
  },
  watch: {
    source: function () {
      // If data were not empty then change isLoading to false.
      console.log(this.source)
      if (this.source) {
        this.isLoading = false
      }
    }
  },
  mounted: function () {
    this.hookFuncs()
  }
}
</script>

<style type="text/css" scoped>
.loading_div {
    text-align: center;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
}

.loading_animation {
    font-size: 2em;
    animation: loading 1s infinite steps(8);
}

.loading_text {
    display: block;
}

@keyframes loading {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(359deg);}
}
</style>
