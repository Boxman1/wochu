import React from 'react'
import axios from 'axios'
import SwiperFood from '../../components/Swiper/swiper'
import css from'./index.module.scss'
import SmallSwiper from '../../components/smallSwiper/smallSwiper'
import AddRoCart from './addToCart'
class Hotlist extends React.Component{
    state={
        foodlist :null,
        swiperlist:null,
        smallSwiper:null,
        isShow:false
    }
    componentWillMount(){
                // http://api9.wochu.cn/client/v1/goods/imgLoopList?parameters=%7B%22goodsGuid%22:%22acba71ef-9d4e-4372-abc2-2b0329b16f30%22%7D
        axios.get(`http://api9.wochu.cn/api/goods/goods/detail?goodsGuid=${this.props.match.params.id}`).then(res=>{
            this.setState(
                {
                    foodlist:res.data.data
                }
            )
        })                                  
        axios.get(`http://api9.wochu.cn/client/v1/goods/imgLoopList?parameters=%7B%22goodsGuid%22:%22${this.props.match.params.id}%22%7D`).then(res=>{
            this.setState(
                {
                    swiperlist:res.data.data
                }
            )
            // console.log(res.data.data)
        })
        axios.get(`http://api9.wochu.cn/client/v1/goods/getGoodsRelevantList?parameters=%7B%22goodsGuid%22:%22${this.props.match.params.id}%22%7D`).then(res=>{
            this.setState(
                {
                    smallSwiper:res.data.data.userloving
                }
            )
            // console.log(this.state.smallSwiper)
        })
    }
    render(){
        // console.log(this.state.foodlist)
        return <div>
        <div className={css.top}>

       
            <div className={css.foodswiper}>  
                <SwiperFood>
                <div className="swiper-container1">
                    <div className='swiper-wrapper'>
                        {
                            this.state.swiperlist?
                            this.state.swiperlist.map(item=>
                            <div className={'swiper-slide ' + css.foodswiperslide}key={item.picUrl}><img src={item.picUrl} alt=""/>
                               
                            </div>
                            )
                            :null
                            
                        }
                        </div>
                    </div>
                    <div className={"swiper-pagination " + css.toppagination}></div>
                </SwiperFood>
            </div>
            <div className={css.drefer} onClick={this.handleBackClick}><img src={require('./imgs/refer.png')} alt=""/></div>
        </div>
        <div className={css.dmain}>
                <div className={css.sign}></div>
                <h1 className={css.ellipsis}>
                    <span></span>
                    {this.state.foodlist?this.state.foodlist.goodsName:null}
                </h1>
                <h2>
                {this.state.foodlist?this.state.foodlist.description:null}
                </h2>
                <div className={css.price}>
                    <div className={css.oprice}>
                    {this.state.foodlist?this.state.foodlist.price:null}
                    </div>
                    <div className={css.mprice}>
                    {this.state.foodlist?this.state.foodlist.marketPrice:null}
                    </div>
                </div>
                <div className={css.dicon}>
                    <div className={css.icon1}>免切</div>
                </div>
        </div>

        <div className={css.navigation}>
                        <img src={require('./imgs/navigation.png')} alt=""/>
        </div>

        <div className={css.info}>
            <div className={css.condition}>
                <span>产地：</span>
                {this.state.foodlist?this.state.foodlist.origin1:null}
            </div>
            <div className={css.condition}>
                <span>保质期：</span>
                {this.state.foodlist?this.state.foodlist.shelfLife:null}
            </div>
            <div className={css.condition +" "+( css.conditiontop)}>
                <span>规格：</span>
                {this.state.foodlist?this.state.foodlist.specification:null}
            </div>
            <div className={css.condition +" "+ (css.conditiontop)}>
                <span>储存条件：</span>
                {this.state.foodlist?this.state.foodlist.storageCondition:null}
                
            </div>
        </div>


                
                <div className={css.rate} onClick={()=>{this.evaluate(this.state.foodlist.goodsSn)}}>
                        <span>商品评价</span>
                        <img src={require("./imgs/next.png")} alt=""/>
                </div>

                <div className={css.advicetext}>
                        <i></i>
                        <p>猜你喜欢</p>
                </div>
                    
                <SmallSwiper>
                    {/* {
                        console.log(this.state.smallSwiper,'q')
                    } */}
                <div className={'swiper-container2 '+ (css.adviceinfo)}>
                        <div className="swiper-wrapper">
                            {
                                this.state.smallSwiper?this.state.smallSwiper.map(item=>
                                    <div key={item.goodsGuid} className={'swiper-slide ' + css.advicegroup}>
                                        <img src={item.picUrl} alt={item.goodsName} onClick={()=>{this.handleDetial(item.goodsGuid)}}/>
                                        <div className={css.groupname+" "+css.ellipsis}>{item.goodsName}</div>
                                        <div className={css.mprice}>{item.marketPrice}</div>
                                        <div className={css.oprice}>{item.price}</div>
                                        <div className={css.addcart}>
                                            <img src={require('./imgs/add.png')} alt=""/>
                                        </div>
                                        </div>
                                    ):null
                            }

                        </div>
                </div>
                </SmallSwiper>
                
                <div className={css.detialMain}>
                            {
                                this.state.foodlist?
                                <div dangerouslySetInnerHTML={{ __html:this.state.foodlist.descriptionDetail }}>
                                    
                                </div>  
                                
                                :null
                            }
                </div>

                
                <div className={css.cart}>
                        <div className={css.cartl} onClick={this.handleCartClick}>
                            <img src={require('./imgs/catr.png')} alt=""/>
                            <span>0</span>
                        </div>
                        <div className={css.cartr} onClick={()=>{this.addTocart()}}>加入购物车</div>
                </div>

               {this.state.isShow?<AddRoCart item={this.state.foodlist} mxw={()=>{this.setState({
                   isShow : !this.state.isShow
               })}}></AddRoCart>:null}
                
            </div>
            
           
    }   
    handleBackClick=()=>{
        this.props.history.push(`/cart`)
    }
    handleCartClick=()=>{
        this.props.history.push(`/cart`)
        
    }

    componentWillReceiveProps(data){
        document.documentElement.scrollTop = document.body.scrollTop =0;
        axios.get(`http://api9.wochu.cn/client/v1/goods/getGoodsRelevantList?parameters=%7B%22goodsGuid%22:%22${data.match.params.id}%22%7D`).then(res=>{
            this.setState(
                {
                    smallSwiper:res.data.data.userloving
                }
            )
            // console.log(res.data.data)
        })
        axios.get(`http://api9.wochu.cn/api/goods/goods/detail?goodsGuid=${data.match.params.id}`).then(res=>{
            this.setState(
                {
                    foodlist:res.data.data
                }
            )
        })     
        axios.get(`http://api9.wochu.cn/client/v1/goods/imgLoopList?parameters=%7B%22goodsGuid%22:%22${data.match.params.id}%22%7D`).then(res=>{
            this.setState(
                {
                    swiperlist:res.data.data
                }
            )
            // console.log(res.data.data)
        })
       
    }
    handleDetial=(id)=>{
        this.props.history.push(`/goodsdetail/${id}`)
        
    }
    addTocart=()=>{
        this.setState({
            isShow:true
        })
    }
    evaluate=(id)=>{
        this.props.history.push(`/evaluate/${id}`)
        localStorage.setItem('id',id)
    }
    
}
export default Hotlist