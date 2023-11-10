// 该文件用于顶部右侧菜单栏的书写
// 逻辑：检验 currentUser（由父组件传递给子组件） 是否存在
//              存在即展示 主页 写作 设置 头像
//              不参在即展示 主页 注册 登录
import { memo } from "react";
import { Link } from "react-router-dom";

const Menu = memo(props => {

    const { currentUser } = props

    if (currentUser) {
        return (
            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <Link to='/' className="nav-link">主页</Link>
                </li>
                <li className="nav-item">
                    <Link to='/article/new'className="nav-link" >写作</Link>
                </li>
                <li className="nav-item">
                    <Link to='/setting' className="nav-link">设置</Link>
                </li>
                <li className="nav-item">
                    <Link to='/profile' className="nav-link">
                        <img src={currentUser.avatarb || "http://localhost:8000/default.png"}
                            className="user-pic"
                            alt="" />
                    </Link>
                </li>
            </ul>
        )
    } else {
        return (
           <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <Link to='/' className="nav-link">主页</Link>
                </li>
                <li className="nav-item">
                    <Link to='/login'className="nav-link" >登录</Link>
                </li>
                <li className="nav-item">
                    <Link to='/regist' className="nav-link">注册</Link>
                </li>
            </ul> 
        )
    }
})

export default Menu