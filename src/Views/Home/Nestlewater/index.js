import React,{Component} from 'react'
import './index.scss'

class Nestlewater extends Component{
    render(){
        return <div className='delivery-coupon'>
            <img className='delivery-coupon__top-pic border--bottom' src={require('../../../assets/img/top-img.png')} alt=""/>
            <div className='step-container border--bottom'>
                <div className='step-container__item'>
                    <div>
                        <img src={require('../../../assets/img/code-exchange.png')}alt=""/>
                      
                        <div className='step-container__item__title'>
                            
                            <font>
                                <font>验证兑换码</font>
                            </font>
                        </div>
                    </div>

                </div>
                <div className='step-container__item'>
                    <div>
                        <img src={require('../../../assets/img/submit-order--unactive.png')} alt=""/>
                        
                        <div className='step-container__item__title'>
                            <font>
                                <font>提交订单</font>
                            </font>
                        </div>
                    </div>

                </div>
                <div className='step-container__item'>
                    <div>
                        <img src={require('../../../assets/img/home-delivery--unactive.png')} alt=""/>
                        <div className='step-container__item__title'>
                            <font>
                                <font>送货上门</font>
                            </font>
                        </div>
                    </div>

                </div>
            </div>
            <div className='exchange-form submit-form border--bottom'>
                <div className='exchange-form__input-container'>
                    <span>
                        <img src={require('../../../assets/img/phone--icon.png')} alt=""/>
                    </span>
                    <input type="text" placeholder="请输入兑换码" className="exchange-form__input"/>
                </div>
                <div className='exchange-form__input-container'>
                    <span className='left--icon-container'>
                        <img src={require('../../../assets/img/password--icon.png')} alt=""/>
                    </span>
                    <input type="text" placeholder="请输入密码" className="exchange-form__input"/>
                </div>
                <button className="submit-form__button submit-form__button--disabled">
                    <font>
                        <font>
                        验证兑换码
                        </font>
                    </font>
                </button>

            </div>
            <img src={require('../../../assets/img/exchange-rule.png')} alt=""/>
        </div>
       
    }
}

export default Nestlewater