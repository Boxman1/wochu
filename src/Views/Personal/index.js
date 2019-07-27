import React from 'react'
import css from './index.module.scss'
class Personal extends React.Component{
    render(){
        return <div>
            <div className={css.personal}>
                <div className={css.contain}>
                    <img src="http://wmall.wochu.cn/h5/personal/img/header_bg@3x.png" alt="headerimg"/>
                    <div className={css.icon}>
                        <img src="http://wmall.wochu.cn/h5/personal/img/cust-icon-nologin.png" alt="icon"/>
                        <p>未登录</p>
                    </div>
                    <div className={css.containnav}>
                        <div className={css.balancecoupon}>
                            <div className={css.balance}>
                                <div>0</div>
                                <p className={css.count}>账户余额</p>
                            </div>
                            <div className={css.coupon}>
                                <div>0</div>
                                    <p className={css.count}>优惠券</p>
                                </div>
                        </div>
                        <div className={css.recharge}>
                            <img src="http://wmall.wochu.cn/h5/personal/img/profile-arrow@3x.png" alt="xianjinquan" className={css.yhq}/>
                            <div className={css.gift}>
                                <img src="http://wmall.wochu.cn/h5/personal/img/g-recharge@3x.png" alt="recharge"/>
                                充值立送现金券哦~
                            </div>
                            <div className={css.go}>
                                 马上充值 
                                <img src="http://wmall.wochu.cn/h5/personal/img/recharge@3x.png" alt="cz"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.ordertap}>
                    <ul>
                    <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/needtopay@3x.png" alt="dfk"/>
                            <p>待付款</p>
                        </li>
                        <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/no-receive@3x.png" alt="dsh"/>
                            <p>待收货</p>
                        </li>
                        <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/no-comment@3x.png" alt="dpj"/>
                            <p>待评价</p>
                        </li>
                        <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/historyget@3x.png" alt="sh"/>
                            <p>退货/售后</p>
                        </li>
                        <li className={css.order}>
                            <img src="http://wmall.wochu.cn/h5/personal/img/myorders@3x.png" alt="order"/>
                            <p>我的订单</p>
                        </li>
                    </ul>
                </div>
                <div className={css.centernav}>
                    <ul className={css.borderline}>
                        <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/mytg@3x.png" alt="tg"/>
                            <p>我的团购</p>
                        </li>
                        <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/location@3x.png" alt="addres"/>
                            <p>收货地址</p>
                        </li>
                        <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/favorite@3x.png" alt="sc"/>
                            <p>我的收藏</p>
                        </li>
                        <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/aboutus@3x.png" alt="gy"/>
                            <p>关于我厨</p>
                        </li>

                    </ul>
                    <ul>
                        <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/help@3x.png" alt="tg"/>
                            <p>帮助中心</p>
                        </li>
                        <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/yjfk@3x.png" alt="addres"/>
                            <p>意见反馈</p>
                        </li>
                        <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/setup@3x.png" alt="sc"/>
                            <p>设置中心</p>
                        </li>
                        <li>
                            <img src="http://wmall.wochu.cn/h5/personal/img/kefu@3x.png" alt="gy"/>
                            <p>客服电话</p>
                        </li>

                    </ul>
                </div>
                <div className={css.ad}>
                    <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b51022d5-c9d1-4e11-ae35-328aa7f551e8.gif" alt="yaoqing"/>
                </div>
            </div>
        </div>
    }
}
export default Personal