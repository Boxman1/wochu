import React from 'react'
import css from './index.module.scss'
import axios from 'axios'
class Header extends React.Component{
    state={
        number:null
    }
    componentDidMount() {
        axios.get(`http://api9.wochu.cn/client/v1/shopcart/getCartGoodsCount?parameters=%7B%22deviceNumber%22:%220%22%7D`).then(res=>{
            // console.log(res.data.data.count);
            this.setState({
                number:res.data.data.count
            })
        })
        // console.log(this.props.match.params.name);
    }
    
    render(){
        return <div className={css.header}>
            <div className={css.back} onClick={()=>this.goback()}>
                <img src="http://wmall.wochu.cn/h5/hotlist/img/back.png?v=d0c1db9a95" alt={'xxx'}/>
            </div>
            <div className={css.parent}>{this.props.match.params.name}</div>
            <div className={css.cart}>
                <img src="http://wmall.wochu.cn/h5/hotlist/img/icon-cart-60@3x.png?v=80ccbcf8e7" alt={'xxx'}/>
                <span>{this.state.number}</span>
            </div>
        </div>
    }
    goback=()=>{
        this.props.history.goBack()
    }
}
export default Header