# vue-shiyanlou

啊哈！ (〃'▽'〃)

用Vue实现的非官方实验楼整站，用于学习交流。

选择实验楼原因也很简单：实验楼的设计个人很喜欢，简单鲜明一目了然，但实际用`CSS`实现起来又不乏一些“高级”用法，动画，过渡，纯`CSS`小箭头等等都可以从实验楼的源码中学习到。前后端分离通过一步步分析API慢慢搭建出整个页面的过程仿佛真的参与其中，抓取API分析HTTP，处理登录逻辑，筛选课程，购买课程，发帖回帖参与讨论等等都可以慢慢从中抽丝剥茧般的熟悉起来。

[线上展示 (Github Page)](http://www.cyrbuzz.xyz)

# 技术栈
	vue2 + vuex + vue-router + axios + webpack + ES6/7 + flex

# 项目运行(本地)
    git clone git@github.com:HuberTRoy/vue-shiyanlou.git

    cd vue-shiyanlou

    npm install

    npm run dev

# 关于接口数据
    实验楼API不能跨域,需要再写一个代理。
    用Django写了个简单的后端转发。
    没有API的话是没有数据可以展示的呦~。

[代理请求API后端](https://github.com/HuberTRoy/vue-shiyanlou-backend)

# 说明
> 如果对您有帮助，希望可以得到一枚您的Star\~。(〃'▽'〃)

> 有任何可以改进的地方希望您可以花费一些时间开启一个Issue或者直接PR\~。φ(>ω<\*) 

# 总结

1. 自己想要学习前端，看到Vue框架比较火热，上手简单功能也很强大于是学习了起来，无奈的是搜索到的项目大部分都比较简单，不是TODO就是音乐播放器，逻辑没有想象中的复杂。(；´д｀)ゞ
2. 在 Github 搜索时看到大佬用 Vue 写的饿了么应用，于是自己也想试试实现一个这样的应用。(o°ω°o)
3. 实验楼的编程课在初学时很友好，界面自己也很喜欢。慢慢模仿下来如在里面学习一样，页面逻辑刚开始会简单些，学习`HTML,CSS`基础就可以摸索着写出来，随着越来越多的内容，动画，过渡也慢慢浮现出来，同时处理登录，查看状态，绑定邮箱，发布内容，参与讨论等等一系列逻辑复杂的东西也进入眼帘。╮(￣▽￣)╭
4. 整个项目从`vue-cli`自动生成开始，未配置任何东西，直接上手就开始写了，跟随`commit`的话可以找到各种初学时可能会犯的错误以及未注意到的地方，比如一开始没有用`CSS`框架，也没有统一的`CSS`文件归类，导致每个组件里越写重复的越多，之后才恍然大悟，喔...`class`和框架的作用原来是这样用的，但同时也通过这样全部都写的原生`CSS`得以一窥`CSS`真容。｡◕ᴗ◕｡
5. 项目初步已经完成，包括子页面在内有20+个页面，完全独立的页面有16个，可以抓取到的API有46个，配合后端的API转发可以得到实验楼真实数据，进行真实交互。ヽ(•ω•ゞ)
6. 项目还有大量可以优化的地方，并未完全完成。(￣▽￣)／

# 部分截图

## 首页
![首页1](https://github.com/HuberTRoy/vue-shiyanlou/blob/master/screenshots/index/index2.png)
![首页2](https://github.com/HuberTRoy/vue-shiyanlou/blob/master/screenshots/index/transition.gif)

## 路径
![路径1](https://github.com/HuberTRoy/vue-shiyanlou/blob/master/screenshots/path/1.png)

## 课程
![课程1](https://github.com/HuberTRoy/vue-shiyanlou/blob/master/screenshots/courses/1.png)
![课程2](https://github.com/HuberTRoy/vue-shiyanlou/blob/master/screenshots/courses/2.png)

## 社区讨论
![社区1](https://github.com/HuberTRoy/vue-shiyanlou/blob/master/screenshots/questions/1.png)
![社区2](https://github.com/HuberTRoy/vue-shiyanlou/blob/master/screenshots/questions/2.png)
![社区3](https://github.com/HuberTRoy/vue-shiyanlou/blob/master/screenshots/questions/3.png)


# 目标

TODO 前端部分

- [x] 主页
- [x] 课程挑选页
- [x] 具体课程页
- [x] 路径页
- [x] 具体路径页
- [x] 社区讨论页
- [x] 社区具体问题页
- [x] 帖子编辑页。
- [ ] 用户页面
    - [x] 登录栏
    - [x] 导航栏
    - [x] 课程与路径页编辑框
    - [x] question出现编辑框
    - [X] 继续实验
    - [x] user/id
        self 标志为仅自己可见
        - [x] user/id (总览)
          - [x] 基础信息
          - [x] 学习卡片 (self)
          - [x] 学习记录(热点图)
          - [x] 下列子应用
          - [x] 最近来访
        - [ ] user/id/courses
          - [x] 历史学习
          - [x] 关注的
          - [ ] 发布的
        - [x] user/id/learning_path 
        - [x] user/id/reports
        - [x] user/id/discuss
        - [ ] user/id/contest ( self )
        - [ ] user/id/tutorial ( self )
        - [ ] user/id/software ( self )
        - [ ] user/id/messages ( self )
- [x] 用户信息设置页
  - [x] 基础信息设置
  - [x] 账号密码设置
  - [x] 邮件通知设置
  - [x] 兑换码
- [x] 搜索页
- [x] 404页
- [x] 教程页
- [x] 独立的登录注册页
- [x] 报告总览页
- [x] 报告详情页
- [x] Markdown 编辑器。
  - [x] 基础功能(加粗,斜线,链接...)
  - [x] 编辑后预览
  - [x] 上传图片
- [x] 挑战页
- [x] 直播页

TODO 后端(代理)配合部分
- [x] 对接登陆.
- [x] 对接主页API.
  - [x] 轮播图。
  - [x] 课程分类/推荐。
  - [x] 楼+推荐。
  - [x] 路径。
- [ ] 对接课程页API.
  - [x] 课程挑选。
  - [x] 课程信息。
  - [x] 课程状态。
  - [x] 课程评论/报告/问答。
  - [x] 关注/取消关注。
  - [x] 加入课程/继续学习。
  - [ ] 相关课程推荐(暂时找不到相关API)
- [x] 对接路径页API.
  - [x] 路径总览。
  - [x] 路径信息。
  - [x] 路径评论。
  - [x] 加入路径。
- [x] 对接问答区API.
  - [x] 发帖。
  - [x] 回帖。
  - [x] 签到。 
- [x] 各区域回复.
- [x] 各区域删除.
- [x] 对接用户主页API.
  - [x] 基础信息。
  - [x] 课程信息。
  - [x] 路径信息。
  - [x] 报告信息。
  - [x] 问答信息。
- [x] 修改个人信息。
  - [x] 修改基础信息。
  - [x] 上传头像(上传到实验楼)。
  - [x] 修改邮件通知。
  - [x] 修改/绑定手机/邮箱/密码。
- [x] 搜索API。
- [x] 教程区API。
- [x] 报告总览API。
- [x] 报告详情API。
- [x] 挑战区API。
- [x] 直播区API。

细节优化:
- [ ] 多分辨率支持。
- [ ] `CSS`优化。
  - [x] `CSS`分块隔离。
  - [ ] 抽离公共样式。
  - [ ] 使用框架简化。
- [x] `route`优化, 加入切换动画使其更加平滑切换。
- [ ] 细微处1px优化。

# 目录结构
```   
api                           存放各类需要与后端交互获取数据的api   
    courses   
        course_information    获取某一个课程的信息。   
        courses_content       获取出合适的所有课程，适用于courses_selections中的大分类获取。 
        course_comment        课程评论
        course_qa             课程问答
        course_report         课程报告
    home
        home                  主页内容
    logged_info
        logged_info           登录后才会解锁的内容(用户课程信息获取) 
    login
        login                 登录和获取登录成功后的用户信息。
    path                      
        course_path           某个路径的具体信息
        course_path_comment   路径评论
        path                  所有路径的简介
    questions
        questions             请求所有问题的api
        question              请求查看具体问题的api
    related_stuff
        related_stuff         获取近期活动/楼+信息。
    user
        user                  获取用户主页下的各类用户信息。
    base.js                   配置api域名等基础信息。

store                         vuex进行数据流控制的仓库  
   modules  
      course                  具体课程的信息仓库。  
      courses_category        课程主页的分类仓库  
          courses_category    里面包含各个query的state设置，更改与变化后的路由导向与触发数据请求。
      home                    主页信息仓库。
      logged_info             用户学习过的课程的信息仓库。
      login_state             包含所有与登录有关信息。
      path                    包含路径部分的状态信息。
      questions               包含所有与社区问题讨论有关的状态信息。
      scroll_bar  
          scroll_bar          包含是否正在向下滚动，是否不处于顶层，是否在向上滚动。  
      tab_page                暂时无用。
      user                    用户主页信息仓库。

components  
    common_components          项目中会在多个页面中用到的公共子组件
       footer
           footer              版权导航信息
       scroll_bar              一个会随着滚动的顶部导航，包括注册，搜索，跳转到主要的分类区。
           scroll_bar
       cards                   不同的小的选项卡，提供多种不同的效果。
           card                普通的card，盛放一个可设置跳转链接的img。
           card_plus           普通card的加强版，放置有一个可设置跳转链接的img和text。
           lou_plus_card       楼+部分的card。
           float_card          一个带有鼠标悬停时会向上略微浮动动画的card_plus
           courses_card        课程card分为：背景img，标题，介绍和 参与人数与课程类型(免费，训练营，会员和无)，课程介绍会在无访问时隐藏，访问时由下至上出现，一个动画实现。
           traning_card        算是上面课程card的扩展实现，取消动画，取而代之的是由更大的占地面积直接铺出来。
           ...
       sign_on_up              触发登陆和注册页面的组件。
            login              包含登陆和注册组件
            sign_on            登陆组件
            sign_up            注册组件  
       qa_item                 问答组件。
       report_item             报告组件。
       loading                 loading组件。

    home_page  
       // 查阅pages中的信息   
       ...   
    
    courses_page   
       // 查阅pages中的信息   
       ...   
    
    path_page
       // 查阅pages中的信息
       ...

    questions
       // 查阅pages中的信息
       ...

    user_page
       // 查阅pages中的信息
       ...

pages       
    home                                   实验楼主页
       navigation                          顶部导航栏
           -- other                           子组件
       main_course                         依然是导航栏，分布的是主要的课程分类和广告
           -- other   
       luoplus                             楼+的课程推广
       kindsOfCourses                      其他各类课程的推广 基础/精选/大数据 等等
       footer                              最后的底部导航版权信息等   
    courses                                课程页面
        sub_components
          order_button
          selection_button
          tab_page
        course
          sub_components
            course_discuss_sub_components/ 课程讨论部分的子组件

            course_content                 课程主内容
            course_description             课程长简介
            course_discuss                 课程讨论部分 包括评论/报告/问答。
            course_header_bar              下拉时出现的课程基础信息导航。
            course_knowledge_point         课程主要学习点
            course_related                 相关课程
            course_side_content            课程区右侧会出现的内容
            course_teacher                 课程教师信息
            nav_title                      课程基础信息+导航
    path
        path                               所有路径页面
        sub_components/
          paths                                                 
          title                            所有路径页面下的子组件。
        course_path/
          course_path                      某个路径的信息页。
          sub_components/
            nav_title                      基础信息+导航
            path_course_detail             路径详情。
            path_description               路径简介。
            path_operation                 路径操作面板(加入路径)。
            related_items                  相关的一些信息
    questions                              讨论页面
      questions                            所有问题的主页
      sub_compoents/
        main_questions                     问答区。
        side                               其他的一些工具(发帖签到相关内容等)。
        main_questions_sub_components/
          nav_bar                          基础信息+导航
          question_list                    问题列表盒子。
          tab_page                         翻页组件。
        side_sub_components/               
          ...
      question/
        question                           具体问答页。
        sub_components/
          main_question                    具体问答页主体。
          side                             其他的一些工具(相关帖子等)
          main_question_sub_components/
            nav_bar                        基础信息+导航
            question_content               问题的主体。
            question_reply                 问题的回复(包括回帖/翻页)。
    user                       
        user                               用户界面总页面
        sub_components/
          base_info                        基础信息
          learning_card                    学习卡
          learning_record                  学习记录热点图
          stuff_board                      各类信息包括课程/讨论/报告/教程...
          visited_user                     访问过的用户

```