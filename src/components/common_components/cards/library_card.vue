<template>
    <!-- 

        {name: "C++并发编程", slug: "Cpp-Concurrency-In-Action", html_url: "/library/Cpp-Concurrency-In-Action",…}
        chapters_count: 18
        description: "本书是并发和多线程机制指导书籍(基于C++11标准)。从最基本的std::thread std::mutex和std::async的使用，到复杂的原子操作和内存模型。↵前4章，介绍了标准库提供的各种库工具，展示了使用方法。↵第5章，涵盖了底层内存模型和原子操作的实际情况，包括原子操作如何对执行顺序进行限制(这章标志着介绍部分的结束)。↵第6、7章，开始讨论高级主题，如何使用基本工具去构建复杂的数据结构——第6章是基于锁的数据结构，第7章是无锁数据结构。↵第8章，对设计多线程代码给了一些指导意见，覆盖了性能问题和并行算法。↵第9章，线程管理——线程池，工作队列和中断操作。↵第10章，测试和调试——Bug类型，定位Bug的技巧，以及如何进行测试等等。↵"
        html_url: "/library/Cpp-Concurrency-In-Action"
        issue_url: "https://github.com/xiaoweiChen/Cpp_Concurrency_In_Action/issues"
        name: "C++并发编程"
        repo_url: "https://github.com/xiaoweiChen/Cpp_Concurrency_In_Action"
        seo_keywords: []
        slug: "Cpp-Concurrency-In-Action"
        tags: [{name: "C++", picture_url: "https://dn-simplecloud.shiyanlou.com/tech-icon/C++.png"}]
     -->
    <a :href="'https://www.shiyanlou.com' + data.html_url" class="library_card_a">

        <div class="library_card_img_layout_div">
            <img :src="data.tags[0].picture_url" class="library_card_img">
        </div>
        <div class="library_card_layout_div">
            <p class="library_card_title_p no_margin">{{ data.name }}</p>
            <p class="library_card_chapter_p no_margin">共{{ data.chapters_count }}章节</p>
        </div>
    </a>    
</template>
<script type="text/javascript">
export default {
    props: {
        data: {
            type: Object,
            require: true
        }
    }
}
</script>
<style type="text/css" scoped>
.library_card_a {
    display: flex;
    border: 1px solid #eee;
    box-shadow: 0 1px 2px 0 #d2d2d2;
    padding: 11px 13px;
    margin-bottom: 32px;
}

.library_card_a:hover {
    box-shadow: 0 2px 8px 0 #d2d2d2;
}

.library_card_img_layout_div {
    padding: 10px 13px 10px 0;
}

.library_card_img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
}

.library_card_layout_div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.library_card_title_p {
    font-size: 16px;
    color: #565656;
    max-height: 45px;
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;
}

.library_card_chapter_p {
    font-size: 14px;
    color: #666;
}

.no_margin {
    margin: 0;
}

</style>
