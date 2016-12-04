## G_Lab inspire `G_Labs`

### 前端使用的技术
- Vue2.0
- Vue-router
- Vuex
- sass

### css复用组建样式命名

各个独立组件样式放置 **lib/theme-default/**  
css初始化文件放置在 **lib/init-css/reset.css**  
主题颜色统一放置在 **lib/theme-default/theme-color.css** ,通过Vuex中`switchTheme`来改变_主题颜色_  
使用Vue内部动画机制时,样式存放在 **lib/theme-default/animationsStyle.css**  
在使用的头部标明有哪一些组件中使用,如：
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

css命名 各个全局组件需要使用 `gl-` 来命名,如:`gl-checkbox`


### position 层级关系
输入框     1000
顶部       999
侧边栏     998
底部       997
弹出框     99
浮层       98



