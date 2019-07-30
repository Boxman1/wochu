import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'

class Dishes extends Component{
    state = {
        datalist:[],
    }
    componentDidMount() {
        var id = this.props.match.params.id
        id = id.slice(id.indexOf("=")+1)
        axios.get( `https://wmall.wochu.cn/client/v1/goods/activityTemplate?parameters=%7B%22aTId%22%3A${id}%7D`).then(res=>{
           
            console.log(res.data.data.areaList);
            
            this.setState({
                datalist:res.data.data.areaList
            })
        })
    }
    
    render(){
        return <div className='activity-main'>
               {
                this.state.datalist.map((item,index)=>
                    item.areaType===3?  
                item.shelveList.map(index=>
                    <div key={index.goodsGuid} className='newactivity-position-item'>
                        <ul>
                            <li>
                                <img src={index.icon} alt=""/>
                                <div className='text-area'>
                                    <p>{index.goodsName}</p>
                                    <div className='txt'>
                                        <div className='num'>
                                            <span>￥{index.marketPrice}</span>
                                        </div>
                                    </div>
                                    <div className='add-cart'>
                                        加入购物车
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                              
                    
               
                )
                :<div key={index} className='activity-main1'>
                 <img src={item.imageUrl} alt={item.id}/>
                 </div>
                )
            }
           
        </div>
    }
}

export default Dishes