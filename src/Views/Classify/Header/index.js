import React,{Component} from 'react'
import css from './index.module.scss'

class Header extends Component{
    render(){
        return(
                <header>
                    <div className={css.searchct1}>
                        <img src="http://wmall.wochu.cn/h5/classify/img/icon-search-40@2x.png"  alt={'xxx'}/>
                        <div className={css.searchkey}>支持首字母搜索</div>
                    </div>
                </header>
        )
    }
}

export default Header