import React from 'react'
import axios from 'axios'
import  css from'./index.module.scss'
import moment from 'moment'; 
import InfiniteScroll from 'react-infinite-scroller';
import { Spin } from 'antd';

class Qp extends React.Component{
    
    state={
        alllist:null,
        dataList:[],
        food:true,
        oldlist:0,
        newlist:[]
    }
   
  aaa=1
 newDate = (data)=>{
return new Date(data)
 };
    componentWillMount(){
        
        axios.get(`http://api9.wochu.cn/client/v1/satisfaction/goods/list?parameters=%7B%22goodsSn%22%3A%22${this.props.item}%22%2C%22pageSize%22%3A10%2C%22pageIndex%22%3A1%2C%22memberId%22%3A%22%22%2C%22commentFlag%22%3A%22%22%7D`).then(
            res=>{
                this.setState({
                    alllist:res.data.data.items

                })
                // console.log(res.data.data.items)
                var Array=[];
               
                for(let i=0;i<res.data.data.items.length;i++){
                    var str=''
                    for(var b=0;b<res.data.data.items[i].goodsSatisfyLevel;b++){
                             str+=`<img src='./star_r.png'/>`
                                // console.log(str.innerHTML)
                            Array[i]=str

                    }
                }
                // console.log(Array)
                this.setState({
                    dataList:[...Array]
                },()=>{
                    // console.log(this.state.dataList)
                })
            }
        )
        
    }
    render(){
        
        return <div>
            
            <div style={{height:'700px',overflow:'auto'}}>
                
                {
                    this.state.alllist? 
                    <InfiniteScroll
                    pageStart={0}
                    loadMore={this.zbt}
                    hasMore={this.state.food}
                    // loader={<div key={0}></div><Spin />}
                    useWindow={false}>
                   
                    {
                        this.state.alllist?this.state.alllist.map((item,index)=><li key={item.goodsCommentId} className={css.evaluatecontent}>
                        <ul>
                           {item.icon?<img src={item.icon} alt=""/>:<img src={require('../imgs/user.png')} alt=""/>}
                           <span className={css.personrank}>
                               <p className={css.username}>{item.alias}</p>
                               <span className={css.starrank} ref="zbt">
                               <div style={{
                                   height:'0.22rem',
                                   overflow:'hidden'
                               }}>
                                    {
                                        this.state.dataList.map((val)=>
                                            <div dangerouslySetInnerHTML={{__html:val}}></div>
                                        
                                        )
                                    }
                                    </div>
                               </span>
                           </span>
                           <span className={css.marktime}>
                               
                               <p>评论时间：{moment(item.createTime*1000).format("YYYY-MM-DD HH:mm:ss")} </p>
                               <p>下单时间：{moment(item.orderCreateTime*1000).format("YYYY-MM-DD HH:mm:ss")}</p>
                           </span>
                           <div className={css.markWrap}>
                            { item.goodsComment?<p className={css.markword}>{item.goodsComment}</p> : <p className={css.markword}>用户没有文字评价</p>}
                           </div>
                       </ul>
                       </li>):null
                }
                 
                </InfiniteScroll>:null  
    
                }
                
            </div>
        </div>
    }
    zbt=()=>{
        // console.log(111111111111)
        // if(this.state.oldlist===this.state.newlist.length){
        //     return
        // }
        this.aaa++
        axios.get(`http://api9.wochu.cn/client/v1/satisfaction/goods/list?parameters=%7B%22goodsSn%22%3A%22WOC000004515%22%2C%22pageSize%22%3A10%2C%22pageIndex%22%3A${this.aaa}%2C%22memberId%22%3A%22%22%2C%22commentFlag%22%3A%22%22%7D`).then(res=>{
         if(res.data.data.items&&this.state.alllist){
            if(res.data.data.items.length===0){
                this.setState({
                    food:false
                })
            }
            this.setState({
                newlist:res.data.data.items
            },()=>{
                console.log(this.state.alllist.items)
                this.setState({
                    alllist:[...this.state.alllist,...this.state.newlist]
                })
            })
            
        }
        })
    }
}
export default Qp