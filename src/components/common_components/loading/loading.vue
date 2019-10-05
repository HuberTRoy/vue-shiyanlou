<template>
    <div class="loading_div">
        <i class="fas fa-spinner loading_animation"></i>
        <span class="loading_text">
            数据加载中，请稍后...
        </span>
    </div>
</template>

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
