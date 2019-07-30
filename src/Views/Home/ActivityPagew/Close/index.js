import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'

class Close extends Component{
    state = {
        datalist:[]
    }
        componentDidMount() {
            
             axios.get('https://tg.wochu.cn/client/v1/groupBuy/HotSaleList?parameters=%7B%22pageSize%22%3A5%2C%22pageIndex%22%3A1%2C%22order%22%3A3%7D').then(res=>{
                 console.log(res.data.data.items);
                 
                  this.setState({
                       datalist:res.data.data.items
                  })
                  
                 
              })
              
              
        } 
    render(){
        
        
        return <div>
            {
                this.state.datalist.map((item,index)=>
                    <div className='grup-img' key={index}>
                        <img src={item.hotSaleImage[0].URL} alt=""/>
                       
                        <div className='group-title'>
                            <p className='title'>{item.product_title}</p>
                            <p className='desc'>{item.sell_point}</p>
                        </div>
                        <div className='price-ctl'>
                            <div className='price'>
                                <span className='rmb'>￥</span>
                                <span className='price-rmb'>{item.discount_price}</span>
                                <span>/</span>
                                <i>￥{item.market_price}</i>
                                <span className='mem-limit'>
                                    {item.parter_number}人团
                                </span>
                            </div>
                            <div className='discount-rate'>
                                <div className='open-group'>
                                    去开团
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                  
            }
           
            
        </div>
    }
}

export default Close