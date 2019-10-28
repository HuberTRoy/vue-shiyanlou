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
import Vue from 'vue'

export default {
  props: {
    source: {
      require: true
    },
    urls: {
      type: Array,
      default: () => new Array()
    }
  },
  data: function () {
    return {
      isLoading: true,
      _urls: () => new Array()
    }
  },
  methods: {
    translate: function (url) {
        // Remove query.
        url = url.split('?')[0]
        // Remove domain.
        if (url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1) {
            url = url.split('/').slice(3,).join('/')
        }

        if (!url) {
            return '/'
        }

        if (url[0] !== '/') {
            return `/${url}`
        }

        return url
    } 
  },
  watch: {
    source: function () {
      // If data were not empty then change isLoading to false.
      if (this.source) {
        this.isLoading = false
      }
    }
  },
  mounted: function () {
    if (this.urls) {
      this._urls = this.urls.map(this.translate)
      this.__loader_checks.push((key, value) => {
        console.log(this._urls)
        console.log(key)
        if (this._urls.indexOf(key) !== -1) {
          this.isLoading = true
        }
      })
    }

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
