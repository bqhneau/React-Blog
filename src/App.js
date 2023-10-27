import Header from "./components/Header";
import Home from "./pages/Home";


// login 后面用懒加载方式导入 这里注释
// import Login from "./pages/Login";

// memo 套在函数组件外使用 用于提高函数组件性能
// lazy与Suspense配合使用
import { memo,lazy,Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

// 懒加载
const Login = lazy(() => import('./pages/Login'))
const Regist = lazy(() => import('./pages/Regist'))


function App() {
  return (
    <div>
      {/* 头部组件 公共 */}
      <Header></Header>

      {/* 主体 */}
      <Suspense fallback={<p>loading...</p>}> {/*此处设置懒加载效果*/}
        <Switch>
        {/* 配置路由 */}
        <Route path='/' component={Home} exact></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/regist' component={Regist}></Route>
      </Switch>
      </Suspense>
    </div>
  );
}

export default memo(App);
