import React from 'react'
import css from './index.module.scss'
import Messagelogin from './messagelogin'
import Passwordlogin from './passwordlogin'
class Login extends React.Component{
    state={
        current:0
    }
    render(){
    
        return <div>
            <div className={css.logintop}>
                <img src="http://wmall.wochu.cn/h5/img/vueLogin/close.png" alt="back" className={css.close} onClick={()=>{this.props.history.goBack()}}/>
                <img src="http://wmall.wochu.cn/h5/img/vueLogin/loginTop.gif" alt="login"/>
            </div>
            <div className={css.logintab}>
                <ul>
                    <li className={this.state.current===0?css.active:''} onClick={()=>{
                        this.setState({
                            current:0
                        })
                    }}>短信登录</li>
                    <li className={ 'second '+(this.state.current===1?css.active:'') } onClick={()=>{
                        this.setState({
                            current:1
                        })
                    }}>密码登录</li>
                </ul>
                    
            </div>
            {
               this.switchComponent()
            }
        </div>
    }
    switchComponent(){
        switch(this.state.current){
            case 0:
                return <Messagelogin />
            case 1:
                return <Passwordlogin />
            default:
        }
    }
}

export default Login