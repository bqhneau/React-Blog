# 项目笔记
## 阶段一(对`react`进行降级)：
    1、处理脚手架：清除不必要文件，并把index.js改成17版本
    2、卸载不需要的包：npm uninstall
            "@testing-library/jest-dom": "^5.17.0",
            "@testing-library/react": "^13.4.0",
            "@testing-library/user-event": "^13.5.0"
    3、下载17版本：
        npm install react@17 react-dom@17 react-router-dom@5

## 阶段二（创建目录结构）：
    |-public
    |-src
    |--actions 存放redux 
    |--componemts 一般组件
    |--pages 路由组件
    |--request
    |--store 存放redux
    |--utils
    |---App.js
    |---constant.js redux 常量
    |---index.js

## 阶段三（配置路由）：
    1、memo 用于优化函数组件
    2、app下：
        <Route path='/' component={Home} exact></Route>
        <Route path='/login' component={Login}></Route>
    3、index.js下：
        ReactDOM.render(
        // 浏览器路由
        <BrowserRouter>
            {/* 精准匹配 */}
            <Switch>
                {/* 配置路由规则 */}
                <Route path="/" component={App}></Route>
            </Switch>
        </BrowserRouter>
        ,document.getElementById('root'))

### 优化:
    1、PureComponent 优化 类式组件
    2、lazy与Suspense 实现懒加载

### 样式引入：Bootstrap + 阿里图标
    <link rel="stylesheet" href="http://localhost:8000/main.css">
    <link rel="stylesheet" href="/icon/iconfont.css">