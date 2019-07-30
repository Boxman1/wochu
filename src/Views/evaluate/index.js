import React from 'react'
import axios from 'axios'
import css from './index.module.scss'
import Qp from './pjc/all'
import Hp from './pjc/好评'
import Zp from './pjc/中评'
import Cp from './pjc/差评'
import Yt from './pjc/有图'
class Evaluate extends React.Component{
    state={
        evaluatelist:null,
        current:0
    }
    componentDidMount(){
        axios.get(`http://api9.wochu.cn/client/v1/satisfaction/goods/list?parameters=%7B%22goodsSn%22%3A%22${localStorage.getItem('id')}%22%2C%22pageSize%22%3A10%2C%22pageIndex%22%3A1%2C%22memberId%22%3A%22%22%2C%22commentFlag%22%3A%22%22%7D`).then(res=>{
            this.setState({
                evaluatelist:res.data.data
            })
            // console.log(this.state.evaluatelist)
        })
    }
    render(){
        return(
            <div>
                <header>
                    <div className={css.back}>
                        <img src={require('./imgs/back.gif')} alt=""/>
                    </div>
                    <p>评价</p>
                </header>
                <div className={css.evaluate_top}>
                  
                       <li className={ this.state.current===0 ? css.active:''} onClick={()=>{this.setState({current:0})}}><span>全部评价 <b>{this.state.evaluatelist?((this.state.evaluatelist.commentCounts.commentsCount)):null}</b></span></li>
                       <li className={ this.state.current===1 ? css.active:''} onClick={()=>this.setState({current:1})}><span>好评 <b>{this.state.evaluatelist?((this.state.evaluatelist.commentCounts.positiveCount)):null}</b></span></li>
                       <li className={ this.state.current===2 ? css.active:''} onClick={()=>this.setState({current:2})}><span>中评 <b>{this.state.evaluatelist?((this.state.evaluatelist.commentCounts.moderateCount)):null}</b></span></li>
                       <li className={ this.state.current===3 ? css.active:''} onClick={()=>this.setState({current:3})}><span>差评 <b>{this.state.evaluatelist?((this.state.evaluatelist.commentCounts.negativeCount)):null}</b></span></li>
                       <li className={ this.state.current===4 ? css.active:''} onClick={()=>this.setState({current:4})}><span>带图 <b>{this.state.evaluatelist?(this.state.evaluatelist.commentCounts.picCount):null}</b></span></li>

                </div>    
                <div className={css.evaluate_list}>
                {
                    this.switchComponent()
                }
                </div>
                <div className={css.shopcar}>
                    <span className={css.carimg}>
                        <img src={require('./imgs/cart-icon.png')} alt=""/>
                        <span class={css.shopnum}>0</span>
                    </span>
                    <span className={css.gocheck}>立即结算吧>></span>
                    <span className={css.carbtn}>加入购物车</span>
                </div>
            </div>
        )
        
    }
    switchComponent(){
        // console.log(this.state.current)
        switch(this.state.current){
            case 0:
                return <Qp item={this.props.match.params.id}/>
            case 1:
                return <Hp/>
            case 2:
                return <Zp/>
             case 3:
                return <Cp/>
            case 4:
                return <Yt/>
            default:
        }
        
    }
}
export default Evaluate