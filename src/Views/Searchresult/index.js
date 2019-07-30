import React from 'react'
import css from './index.module.scss'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Emptyerror from '../Components/Emptyerror'
class Searchresult extends React.Component{
    state={
        datalist:[],
        length:0
    }
    timer = null
    componentDidMount() {
        var id = this.props.match.params.id
        id = encodeURI(id)
        axios.get(`http://api9.wochu.cn/api/goods/searchbykeyword?orderId=0&pageIndex=1&pageSize=20&keyword=${id}`).then(res=>{
            this.setState({
                datalist:res.data.data.items,
                length:res.data.data.items.length
            })
            // console.log(this.state.datalist)
        })
    }
    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render(){
        return <div>
             <div className={css.header}>
                <div className={css.view}>
                    <div className={css.back}>
                        <NavLink to="/search" replace>
                            <img src="http://wmall.wochu.cn/h5/classify/img/back.png?v=7c8bfcd628" alt="back" />
                        </NavLink>
                        
                    </div>
                    <div className={css.ctl}>
                        <img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png" alt="search"/>
                        <input type="text" className={css.key} ref="keyword" onKeyDown={e=> {if(e.keyCode===13){this.searchclick(this.refs.keyword.value)}}}/>
                    </div>
                    <div className={css.btn}>
                        <NavLink to="/cart" replace>
                            <img src="http://wmall.wochu.cn/h5/classify/img/cart.png?v=1a30f75f80" alt="shopcart"/>
                        </NavLink>
                    </div>
                </div>
             </div>
        
            <div className={css.searchresult}>
                    <div className={css.resultcount}>我厨为您找到“{this.props.match.params.id}”的相关结果{this.state.length}个</div>
                 <ul className={css.goodlist}>
                 {
                     this.state.datalist.map(item=>
                        <li key={item.guid}>
                            <div className={css.fl}>
                                <img src={item.icon} alt="imgs" onClick={()=>{this.pagechange(item.goodsGuid)}}/>
                                <div className={css.mark}></div>
                            </div>
                            <div className={css.fr}>
                                <p className={css.name} onClick={()=>{this.pagechange(item.goodsGuid)}}>{item.goodsName}</p>
                                <div className={css.intro}>
                                    {item.description}  
                                </div>
                                <div className={css.mark}></div>
                                <div className={css.price}>
                                    <div className={css.wrap}>
                                        <span className={css.realprice}>￥{item.price}</span>
                                        {
                                            (item.price===item.marketPrice)?
                                            null:
                                            <span className={css.oldprice}>￥{item.marketPrice}</span>
                                        }
                                    </div>
                                    <div className={css.addcart}>
                                        <img src="http://wmall.wochu.cn/h5/classify/img/icon-listcart-75@3x.png" alt="cart"/>
                                    </div>
                                </div>
                            </div>
                        </li>
                     )
                 }
                 </ul>
                 <div className={css.nogoods}>没有更多商品！</div>
            </div>
            {
                this.state.isShow?
                <Emptyerror/>
                :null
            }
        </div>
    }
    pagechange(id){
        console.log(id)
        // this.props.history.push(`/goodsdetail/${id}`)
    }
    searchclick=(keyword)=>{
        var id = encodeURIComponent(keyword)
        if(this.refs.keyword.value){
            this.props.history.push(`/searchResult/${keyword}`)
            keyword = keyword.trim()
            if(localStorage.getItem("searchkeywords")){
                var a = localStorage.getItem('searchkeywords')
                if(a.indexOf(keyword) === -1){
                    var arr = a.split(',')
                    arr.push(keyword)
                    localStorage.setItem('searchkeywords',arr)
                }
            }else{
                localStorage.setItem('searchkeywords',keyword)
            }
            axios.get(`http://api9.wochu.cn/api/goods/searchbykeyword?orderId=0&pageIndex=1&pageSize=20&keyword=${id}`).then(res=>{
                this.setState({
                    datalist:res.data.data.items,
                    length:res.data.data.items.length
                })
                console.log(this.state.datalist)
            })
            }else{
            // console.log("kong")
            this.setState({
                isShow:true
            })
            this.timer = setTimeout(() => {
                this.setState({
                    isShow:false
                })
            }, 1500);
        }
    }
}

export default Searchresult