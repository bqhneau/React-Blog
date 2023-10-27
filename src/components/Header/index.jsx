// PureComponent 与 memo 作用一致
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends PureComponent {
    render() {
        return (
            <nav className="navbar navbar-light">
                 <div className='container'>
                    {/* 左侧 */}
                    <Link to='/' className='navbar-light'>个人博客</Link>
                    {/* 右侧 */}
                    欢迎
                    <div className="iconfont icon-all"></div>
                </div>
            </nav>
           
        )
    }
}
