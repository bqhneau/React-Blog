import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入浏览器路由 精准匹配 路由
import { BrowserRouter,Switch,Route  } from 'react-router-dom'
// 退回17版本
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
