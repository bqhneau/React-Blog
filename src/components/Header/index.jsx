// PureComponent 与 memo 作用一致
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
// 引入子组件
import Menu from './menu'
// 声明 currentUser 由后端传值
let currentUser = { avatar: null }

currentUser=null
export default class Header extends PureComponent {
    render() {
        return (
            <nav className="navbar navbar-light">
                 <div className='container'>
                    {/* 左侧 */}
                    <Link to='/' className='navbar-brand'>个人博客</Link>
                    {/* 右侧菜单栏 */}
                    <Menu currentUser={currentUser}> </Menu>
                </div>
            </nav>
           
        )
    }
}
