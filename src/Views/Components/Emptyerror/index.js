import React from 'react'
import css from './index.module.scss'
class Emptyerror extends React.Component{
    render(){
        return <div>
                <div className={css.erroralert}>
                    <p>搜索内容不能为空</p>
                </div>
        </div>
    }
}

export default Emptyerror