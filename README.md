=============
## 参考文档
1. [Koa2 + React + Eslint + Webpack热加载部署方案](http://www.nekomiao.me/2017/05/23/koa2-react-webpack-deployment/)
2. [Simple Koa2 - React - Redux boilerplate](https://github.com/princeV/koa2-react-redux-webpack-boilerplate/blob/master/docs/project-setup.md)
3. [在React+Babel+Webpack环境中使用ESLint](http://le0zh.github.io/2016/06/21/eslint+in+react+babel+webpack)
4. [使用webpack、babel、react、antdesign配置单页面应用开发环境](http://www.chardlau.com/2017/04/26/config-of-webpack-babel-react-antd/)
5. [koa+react+redux+webpack+eslint+babel项目搭建详细全过程](https://cnodejs.org/topic/580871420bab808265185f7f)

6. [koa+react(1 ~ 4)](http://blog.suzper.com/2016/10/19/koa-react-%E4%B8%80/)
7. [webpack 插件拾趣 (1) —— webpack-dev-server](http://www.cnblogs.com/vajoy/p/7000522.html)
## 遇到的问题
1. 在 Koa2 + React + Eslint + Webpack热加载部署方案 文中没有安装bebal-pulgin-react 会报错
2. 引入antd的时候没有样式加载 需要安装
  ```
  npm install --save-dev css-loader  
  npm install --save-dev style-loader 
  ```
3. "Unexpected token import " 需要在代码中支持es6 的语法
```
两种方法
1. 创建一个.babelrc的文件
  {
    "presets": [
      "env",
      "react"
    ]
  }


2. 在package.json 增加
"babel": {
    "presets": [
      "env",
      "react"
    ]
  } 
```
4. 实现离线缓存 manifest





