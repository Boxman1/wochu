import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'


class ActivityTemplate extends Component{
   state = {
        datalist:[],
        
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        var id = this.props.match.params.id
        id = id.slice(id.indexOf("=")+1)
        console.log(id)
        axios.get( `https://api9.wochu.cn/client/v1/goods/newactivityTemplate?aTId=${id}`).then(res=>{
           
            
            this.setState({
                datalist:res.data.data.areaList,
            })
        })
    }
    render(){       
        return <div className='all'>
            <div  className='position'>
            <ul>
            {
                this.state.datalist.map((item,index)=>
                item.areaType===1?  
            item.shelveList.map(index=>
                    
                        <li key={index.goodsGuid} >
                            <img src={index.icon} alt=""/>
                            <div className='goods-info'>
                                <p className='goods-title'>{index.goodsName}</p>
                                <div className='goods-price-container'>
                                    <div className='goods-price'>
                                        <div className='current-price'>
                                            ￥{index.marketPrice}
                                        </div>
                                        <div className='old-price'>
                                            ￥{index.price}
                                        </div>
                                    </div>
                                    <div className='new-add-cart'>

                                    </div>
                                </div>
                            </div>
                        </li>
              
            )
            :<div key={index} className='activity-main2'>
                    <img src={item.imageUrl} alt={item.id}/>
                    </div>
                )
            }
      
        </ul>
        </div>
        </div>
    }
}

export default ActivityTemplate