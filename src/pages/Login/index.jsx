// 该组件用于铺登录页面
// 基本与注册一致
// 用到了不少bootstrap中的类

import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

// 引入错误组件
import Errors from '../../components/Errors';

let errors ={message:'邮箱地址重复'}

export default class Regist extends PureComponent {
    state = {
        email: '',
        password:''
    }
    
    onSubmit = (e) => {
        e.preventDefault()
        console.log("已提交信息");
    }

    changeEmail=(e) => {
        this.setState({email:e.target.value})
    }

    changePassword=(e) => {
        this.setState({password:e.target.value})
    }

    render() {
        return (
            <div className='container page'>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1>登录</h1>
                            <p className='text-xs-center'>
                                <Link to='/login'>
                                    没有账号去注册页面
                                </Link>
                        </p>
                        {/* 使用错误信息组件 */}
                        <Errors error={errors}> </Errors>

                            <form onSubmit={this.onSubmit}>
                                <fieldset className='form-group'>
                                    <input
                                        className='form-control form-control-lg'
                                        type="text"
                                        placeholder='请输入邮箱'
                                        value={this.state.changeEmail}
                                    />      
                                </fieldset>
                               
                                <fieldset className='form-group'>
                                    <input
                                        className='form-control form-control-lg'
                                        type="password"
                                        placeholder='请输入密码'
                                        value={this.state.changePassword}
                                    />      
                                </fieldset>
                                <button
                                    className='btn btn-lg btn-primary pull-xs-right'
                                    type='submit'
                                >
                                    登录
                            </button>
                            </form>
                    </div>
                </div> 
            </div>
        )
    }
}
