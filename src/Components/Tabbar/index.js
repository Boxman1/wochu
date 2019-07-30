import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'

class Tabbar extends Component{
    render(){
        return <div className={css.alls}>
            <div className={css.footer}>
                <ul>
                    <li><NavLink to="/Home" replace activeClassName={css.active}><i></i>首页</NavLink></li>
                    <li><NavLink to="/Classify" replace activeClassName={css.active}><i></i>分类</NavLink></li>
                    <li><NavLink to="/Cart" replace activeClassName={css.active}><i></i>购物车</NavLink></li>
                    <li><NavLink to="/personal"replace activeClassName={css.active}><i></i>我的</NavLink></li>

                </ul>
            </div>
        </div>
    }
}

export default Tabbar