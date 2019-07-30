import React from 'react'
import css from './index.module.scss'
class Messagelogin extends React.Component{
    render(){
        return <div>
        
            <div className = {css.clearfix}>
                   
                    <div className={css.input1}>
                        <input type="text" placeholder="输入手机号" />
                    </div>
                    <div className={css.input2}>
                        <div className={css.button}>获取验证码</div>
                        <input type="text" placeholder="输入验证码"/>
                    </div>
                    <button className={css.dl}>登录</button>
                    <div className={css.footer}>
                        <div className={css.ck}>
                            <p className={css.ck2}>查看</p> 
                            <div className={css.href}>《我厨服务协议及隐私政策》</div>
                        </div>
                        <p className={css.register}>免费注册</p>
                    </div>
                </div>
        </div> 
    }
}


export default Messagelogin