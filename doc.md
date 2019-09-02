##

前端部分。   

Vue 全家桶。   

重写实验楼首页，   


从上至下分成多部分来写，然后汇总到一个。   


目录结构
```   
api                           存放各类需要与后端交互获取数据的api   
    courses   
        course_information    获取某一个课程的信息。   
        courses_content       获取出合适的所有课程，适用于courses_selections中的大分类获取。 
        course_comment
        course_qa
        course_report
    path                      
        course_path           某个路径的具体信息
        course_path_comment
        path                  所有路径的简介
    questions
        questions             请求所有问题的api
        question              请求查看具体问题的api

sotre                         vuex进行数据流控制的仓库  
   modules  
      courses_category        课程主页的分类仓库  
          courses_category    里面包含各个query的state设置，更改与变化后的路由导向与触发数据请求。  
      login_dialog  
          login               只包含是否会显示登陆注册框，显示的是登陆还是注册框。  
          sign_on             具体的登陆逻辑会在这里触发  
      login_state
                              是否已经登录的状态
      scroll_bar  
          scroll_bar          包含是否正在向下滚动，是否不处于顶层，是否在向上滚动。  
      
      path                    包含路径部分的状态信息
      
      questions               包含所有与社区问题讨论有关的状态信息

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
        sign_on_up             触发登陆和注册页面的组件。
            login              包含登陆和注册组件
            sign_on            登陆组件
            sign_up            注册组件  
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

pages       
    home.vue                   实验楼主页
       // 这些包含在 components 里
       navigation.vue          顶部导航栏
           -- other.vue           子组件
       main_course.vue         依然是导航栏，分布的是主要的课程分类和广告
           -- other.vue   
       luoplus.vue             楼+的课程推广
       kindsOfCourses.vue      其他各类课程的推广 基础/精选/大数据 等等
       footer.vue              最后的底部导航版权信息等   
    courses                    课程页面
        // 这里的组件应用在 course_selection.vue 中
        sub_components
          order_button.vue
          selection_button.vue
          tab_page.vue

        courses_home.vue           挑选课程的主要区域。
            // 这些包含在 components 里
            courses_selection.vue   
        course.vue
            // 这些包含在 components 里
    path
        // 这里的组件应用在 path.vue 里
        sub_components
            paths.vue
            title.vue
        path.vue

        course_path // 选中某路径后跳转到这个目录下
            course_path.vue 
            sub_compoents
              // 这里将页面层层分块编写。

              
              nav_title.vue
              path_courses.detail.vue
                path_courses_detail_sub_components
              path_description.vue
              path_operation.vue
              related_items.vue
                related_items_sub_components
    questions                  讨论页面
      questions_home           所有问题的页面
      question                 查看某一个问题的页面
    user                       关于用户界面


用户界面是一个难点：

UI方面：

  非user页的UI变化
    1. 登陆后首先是 login bar 的UI要改变。
    2. 具体课程页和路径页的 评论 不再提示登录，变为可输入一段话并发送的区域（编辑框）。
    3. 讨论页里question的回复也会变成一个编辑框。
    4. 课程页里如果有该实验的记录需要变成继续实验。
    5. 其他待发掘。

  user页的UI：
    /user/id(type:number)   用户简介。

    这些都是子路由下的模块。
        /user/id/courses        用户课程。
        /user/id/learning_path  用户收藏。
        /user/id/reports        用户报告。
        /user/id/discuss        用户讨论。
        /user/id/contest        用户竞赛。
        /user/id/tutorial       用户教程。
        /user/id/software       用户软化。

API方面：

1. 登陆时与后端交互的API，信息格式未完全确定，
   当前格式{id, avatar, learned_courses, level, remind_information}。
2. 发帖，回复，评论API。
3. 其他信息待添加。

```


TODO 前端部分

- [x] 主页
- [x] 课程挑选页
- [x] 具体课程页
- [x] 路径页
- [x] 社区讨论页
- [ ] 用户页面
    - [x] 先用明文与后端进行通信。（模拟，目前并无后端，且无cookies）
       - [x] 基础信息包括 (不断完善) {id,
        avatar, 
        learned_courses(history),
        level, 
        message_count,
        // 用来交代是否登陆成功。
        state,
        state_message
        }

    - [x] login bar
    - [x] navigation bar
    - [x] 课程与路径页变编辑框
    - [x] question出现编辑框 (Markdown未完成)
    - [ ] 继续实验
    - [ ] user/id
        self 标志为仅自己可见
        - [ ] user/id (总览)
          - [x] base_info
          - [x] learning_card (self)
          - [x] learning_record
          - [x] 下列子应用
          - [x] 最近来访
          - [ ] 邀请链接  ( self )
        - [ ] user/id/courses
          - [x] 历史学习
          - [x] 关注的
          - [ ] 发布的
        // 未做翻页
        - [x] user/id/learning_path 
        - [x] user/id/reports
        - [x] user/id/discuss
        // 除了消息都是同类型的，延后。
        - [ ] user/id/contest ( self )
        - [ ] user/id/tutorial ( self )
        - [ ] user/id/software ( self )
        - [ ] user/id/messages ( self )
- [ ] 楼+页
- [ ] 会员页 

- [ ] 细节方向优化，主要是对之前的组件进行细节打磨。
  - [ ] router-link的变化。
- [ ] Markdown 编辑器。

TODO 后端配合部分

- [ ] 实现用户系统，首先是自己搭建简单用户体系，之后尝试对接实验楼的用户体系。
- [ ] 完整实现社区的讨论，小论坛。


因为一些原因项目耽搁了，现在重新开始，争取一个月内完成剩余部分。

现在重新开始看实验楼的话，布局没有太大的变化，但是之前首次请求部分是直接返回的，现在好像是做了前后端彻底分离，
可以直接抓取实验楼的API使用了。

已知Api:
获得所有课程分类：
    https://www.shiyanlou.com/api/v2/courses/categories/
获得所有的课程，参数
    http://www.shiyanlou.com/api/v2/courses/
获取主页中的内容:
    index/paths 获取路径
    index/bootcamps 获取推荐的训练营
    index/classfication-courses 获取推荐的各类课程
    index/louplus 获取楼+
    index/banner-pictures 获取滚动的推广课程
    index/categories 获取主页的课程分类信息

另外，单一课程仍然没有直接可用的API，而且已经更新了布局。


