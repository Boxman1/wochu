import React from 'react'
<<<<<<< HEAD
// import axios from 'axios'
// import {NavLink} from 'react-router-dom'
// import css from './index.module.scss'
class Cart extends React.Component{
    state={
        datalist:[]
    }
    render(){
        return (
        <div>    
        </div>
    )
=======
import './index'
import axios from 'axios'
import css from './index.module.scss'
class Cart extends React.Component{
    state = {
        datalist:null,
        timelist:null,
        moneylist:null
    }
    componentDidMount(){
        axios.get('http://api9.wochu.cn/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+1%2C%22type%22%3A%221%22%7D').then(
            res=>{
                this.setState({
                    datalist:res.data.data.items
            }) 
            }   
        )

        axios.get('http://api9.wochu.cn/client/v1/sameday/getLoadHomeSameDayInfo').then(res=>{
            this.setState({
                timelist:res.data.data
            })
        })
        axios.get('http://api9.wochu.cn/client/v1/shopcart/ListCartInfo?parameters=%7B%22deliveryTime%22%3A%222019-07-28%22%2C%22deviceNumber%22%3A%220%22%2C%22source%22%3A%22H%22%7D').then(
            res=>{
                this.setState({
                    moneylist:res.data.data
                })
            }
        )
    }
    render(){
        // console.log(this.state.datalist)
        // console.log(this.state.timelist)
        return <div>
                    <header>
                        <div className={css.back}>
                            <img src={require('./imgs/back.png')} alt=""/>
                        </div>
                        <div className={css.addr}>
                            <span className={css.location}>
                                <img src={require('./imgs/location.png')} alt=""/>
                            </span>
                            <p className={css.addrdetail}>请填写地址</p>
                            <span className={css.downarr}>
                                <img src={require('./imgs/down-arr.png')} alt=""/>
                            </span>
                        </div>
                        <div className={css.edit}>编辑</div>
                    </header>
                    <section className={css.timenav}>
                    <div className={css.timenavtitle}>
                        <img src={require('./imgs/timeicon.png')} alt="" className={css.timenavicon}/ >
                            <span>配送时间:</span>
                            <div className={css.timenavdate}>
                            {
                                this.state.timelist?
                                <div>
                                    {this.state.timelist.shippingDateMsg}
                                    {this.state.timelist.shippingTime}
                                </div>
                                :null
                            }
                            </div>
                    </div>
                    <div className={css.timenavinfo}>去修改 ></div>
                    </section>


                    {/* 这是购物列表。换购列表 */}
                    <section className={css.cartlist}>
                        <div className={css.cartlistitem}>
                            <div className={css.promotionmsg}>
                                <span>换购</span>
                                <span className={css.promotioninfo}>满79元，可换购千禧圣女果500g，还差62.50元</span>
                                <span className={css.promotionmodify}>立即换购</span>
                            </div>
                        </div>
                        <div className={css.cartlistitem}>
                            <ul className={css.shopli}>
                                <li>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </li>
                            </ul>
                        </div>
                    </section>





                        <div className={css.datanone}>
                            <div className={css.datanoneimg}>

                            </div>
                            <div className={css.datanonetext}>
                            您的购物车为空
                            </div>
                            <div className={css.datanonetip}>
                            可以看看哪些想买的
                            </div>
                            <div className={css.datanonebtn} onClick={()=>{this.clickback()}}>
                            随便逛逛
                            </div>
                        </div>
                
                    <div className={css.recommendlistcontainer}>

                        <div className={css.recommendlisttitle}></div>
                        <div className={css.recommendlist}>
                       
                        {
                            this.state.datalist?
                            this.state.datalist.map(item=>
                                <div key={item.goodsGuid} className={css.recommenditem}>
                                        <img src={item.picUrl} alt={item.goodsName} className={css.recommenditemimg} onClick={()=>{this.handleclick(item.goodsGuid)}}/>
                                        <div className={css.recommenditeminfo}>
                                            <p className={css.recommenditemtitle}>{item.goodsName}</p>
                                            <div className={css.recommenditempricecontainer}>
                                                <div className={css.recommenditemprice}>
                                                    <div className={css.recommenditemoldprice}>{item.marketPrice}</div>
                                                    <div className={css.recommenditemcurrentprice}>{item.price}</div>
                                                </div>
                                                <div className={css.newaddcart}>
                                                
                                                </div>
                                            </div>
                                           
                                        </div>
                                   
                                </div>
                                
                            ):null
                        }
                         </div>
                    <div className={css.loadmore}>
                    没有更多了~
                    </div>
                </div>
        </div>
    }
    handleclick(id){
        // console.log(this.props)
        this.props.history.push(`/goodsdetail/${id}`)
    }
    clickback(){
        this.props.history.push(`/`)   
        // console.log(this.props) 
>>>>>>> ec63635face74084a3df8234c74a6f8438c6464f
    }
}



export default Cart