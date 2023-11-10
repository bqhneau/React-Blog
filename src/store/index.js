import { createStore, applyMiddleware } from 'redux';
// 异步action
import thunk from 'redux-thunk';
// 浏览器 history
import { createBrowserHistory } from 'history';
// 
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducers';

export const history = createBrowserHistory()

export const store = createStore(
    createRootReducer(history),
    applyMiddleware(routerMiddleware(history),thunk)
)