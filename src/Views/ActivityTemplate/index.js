import React from 'react'
import axios from 'axios'
import css from './index.module.scss'
class ActivityTemplate extends React.Component{
    state={
        data:null,
        areaList:[],
        array:''
    }
    componentDidMount() {
        var index1=''
        var index= this.props.history.location.pathname
        var index2 = index.indexOf('=')
        // console.log(index2);
        index1=index.slice(index2+1)
        // console.log(index1);
        this.setState({
            array:index1
        })
       
        axios.get(`http://wmall.wochu.cn/client/v1/goods/activityTemplate?parameters=%7B%22aTId%22%3A${index1}%7D`).then(res=>{
            // console.log(res.data.data.areaList);
            this.setState({
                data:res.data.data,
                areaList:res.data.data.areaList
            })
        })
    }
    
    render(){ 
        return (
        <div>
            <div className={css.header}>
                <div className={css.acback} onClick={()=>this.handlback()}>
                        <img src="http://wmall.wochu.cn/h5/activityTemplate/img/ac-back.png"  alt={'xxx'}/>
                </div>
            </div>
                {
                    this.state.array==='469'?
                    this.state.areaList.map((res,index)=>
                    <div key={res.aId}>
                    {
                            index===1||index===0?
                            <img key={res.aId} src={res.imageUrl} alt={res.aId} className={css.banner}/>
                            :null
                        }
                    <ul>
                        {
                            index===2?
                            res.shelveList.map(ss=>
                            <li key={ss.id} className={css.li}>
                                <div className={css.init}>
                                    <img src={ss.icon} alt={ss.id}/>
                                    <div className={css.textarea}>
                                        <p>{ss.goodsName}</p>
                                        <div className={css.txt}>
                                            <div className={css.num}>
                                                <span>
                                                    ￥{ss.price}
                                                    <i>￥{ss.marketPrice}</i>
                                                </span>
                                            </div>
                                        </div> 
                                        <div className={css.addcart}>加入购物车</div>   
                                    </div>
                                </div>
                            </li>
                        )
                        :null
                        }
                    </ul>
                    </div>
                    )
                    :
                    this.state.areaList.map((res,index)=>
                    <div key={res.aId} className={css.main}>
                        <img src={res.imageUrl} alt={res.aId}/>
                        <ul className={css.list2}>
                        {
                            index===4||index===6||index===8?
                            res.shelveList.map(list=>
                            <li key={list.id} className={css.li}>
                                <div className={css.init}>
                                    <img src={list.icon} alt={list.id}/>
                                    <div className={css.textarea}>
                                        <p className={css.pp}>{list.goodsName}</p>
                                        <div className={css.txt}>
                                            <div className={css.num}>
                                                <span>
                                                    ￥{list.price}
                                                    <i>￥{list.marketPrice}</i>
                                                </span>
                                            </div>
                                        </div> 
                                        <div className={css.addcart}>加入购物车</div>   
                                    </div>
                                </div>
                            </li>                      
                            )
                             :null
                        }
                        </ul>
                     </div>
                    )
            }    
        </div>
        )
    }
    handlback=()=>{
        this.props.history.push('/classify')
    }
}
export default ActivityTemplate





// http://wmall.wochu.cn/client/v1/goods/activityTemplate?parameters=%7B%22aTId%22%3A30%7D
// http://wmall.wochu.cn/client/v1/goods/activityTemplate?parameters=%7B%22aTId%22%3A469%7D