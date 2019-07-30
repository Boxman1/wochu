import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'

class PagewHeader extends Component{
    render(){
        // console.log(this.props.isFixed)
        return <div>
            <div className={css.PagewHeader+" "+(this.props.isFixed?css.PagewHeader_active:"")}>

            <ul>
                <li><NavLink to="/Home/ActivityPagew/Newest"  activeClassName={css.active}>最新</NavLink></li>
                <li><NavLink to="/Home/ActivityPagew/Choiceness"  activeClassName={css.active}>精选</NavLink></li>
                <li><NavLink to="/Home/ActivityPagew/Close"  activeClassName={css.active}>即将结束</NavLink></li>

            </ul>
       

        </div>
        </div>
    }
}

export default PagewHeader        
