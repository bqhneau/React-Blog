import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入浏览器路由 精准匹配 路由
import { Switch, Route } from 'react-router-dom'

import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import { store } from './store';
import { history } from './store';

// 退回17版本
ReactDOM.render(
    // 浏览器路由
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {/* 精准匹配 */}
            <Switch>
                {/* 配置路由规则 */}
               <Route path="/" component={App}></Route>
            </Switch>
        </ConnectedRouter>
        
    </Provider>
    ,document.getElementById('root'))
