# G_Lab inspire

> G_Lab 

## 前端使用的到的技术
> Vue2.0
> Vue-router
> Vuex
> sass


# inspire

### css复用组建样式命名

各个独立组件样式放置 --lib-- 文件夹下的theme-default
css命名 各个复用组件需要使用 "gl-'xxx'"来命名  如:  gl-checkbox
===


Css初始化文件放置在 --lib-- 文件夹下的init-css
===


使用Vue内部动画机制时 Css样式存放在 --lib-- 文件夹下的theme-default中的 animationsStyle.css
在使用的头部标明有哪一些组件中使用 
 如：
 ```
    /*
      *
      *  Use place :
      *  -->
      *     updataPage-from
      *     "组件名称"
      *     
     */
```

===
