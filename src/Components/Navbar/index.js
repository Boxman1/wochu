import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'


class Navbar extends Component{
    render(){
        return(
        <nav>
            <ul>
                <li><NavLink to="/home" replace activeClassName={css.myactive}><i className={css.i1}></i>首页</NavLink></li>
                <li><NavLink to="/classify" replace activeClassName={css.myactive}><i className={css.i2}></i>分类</NavLink></li>
                <li><NavLink to="/cart" replace activeClassName={css.myactive}><i className={css.i3}></i>购物车</NavLink></li>
                <li><NavLink to="/personal" replace activeClassName={css.myactive}><i className={css.i4}></i>我的</NavLink></li>
            </ul>
        </nav>
        )
    }
}

export default Navbar