import React from 'react'
import css from './index.module.scss'
import axios from 'axios'
import Header from './Header'
// import withRouter from 'react-router'
// import { tsIndexedAccessType } from '@babel/types';
class Classify extends React.Component{
    state={
        data:[
            {name:'推荐',parentId:0},
            {name:"我厨优选",parentId:2},
            {name:"餐馆名菜",parentId:3},
            {name:"全部净菜",parentId:1},
            {name:"儿童专区",parentId:4},
            {name:"蔬菜",parentId:6},
            {name:"水果",parentId:7},
            {name:"肉禽蛋",parentId:8},
            {name:"水产海鲜",parentId:9},
            {name:"乳饮西点",parentId:10},
            {name:"点心速食",parentId:5},
            {name:"粮油副食",parentId:11},
        ],
        datalist:[],
        itemlist:[],
        itemId:0,
        current:0,
        parentId:0,
        aTId:[
            {id:469},
            {id:30}
        ]
    }
    componentDidMount() {
        axios.get("http://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList").then(res=>{

            this.setState({
                datalist:res.data.data
            })
        })
        axios.get("http://api9.wochu.cn/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D").then(all=>{
            this.setState({
                itemlist:all.data.data
            })
        })
    }
    
    render(){  
        return (
        <div>
            <Header/>
            <div>
                <ul className={css.nav}>
                    {
                    this.state.data.map((item,index)=>
                        <li className={this.state.current===index?css.action:null} onClick={()=>this.changeId(index,item.parentId)} key={item.parentId} >{item.name}</li>    
                    )
                }
                </ul>
            </div>

            <div className={css.wrapper}>
            {   
                this.state.itemId===0?
                this.state.datalist.map(item=>
                    <div key={item.id} className={css.item}>
                        <div key={item.id} className={css.title}><p className={css.label}>—— {item.name} ——</p></div>
                   <ul>
                        {
                            item.children.map(index=>
                                <li key={index.id} onClick={()=>this.changePage(index.id,index.url)}>
                                <img src={index.imgUrl} alt={index.name}/>
                                <p>{index.name}</p>
                                </li>
                            )
                        }   
                    </ul>
                    </div>
                )
                :this.state.itemlist.map(list=>
                    list.parentId===this.state.itemId?
                        <li key={list.id} onClick={()=>this.handleClick(list.parentId)}>
                        <img src={list.checkicon} className={css.img} alt={list.name}/>
                        <p>{list.name}</p>
                        </li>
                    :null
                )
            }
        </div>
                
        </div>
        )
    }
    changePage = (id,name)=>{
        // console.log(id);
        // console.log(name);
        if(id===3||id===8){
            var index = name.indexOf('?')
            name = name.slice(index+1)
            // console.log(name)
        }
        id===3||id===8?
        this.props.history.push(`/ativityTemplate/${name}`)
        :this.props.history.push(`/hotlist/${name}`)
    }
    changeId=(index,id)=>{
        // console.log(index);      
        // console.log(id);
        this.setState({
            itemId:id,
            current:index
        })
    }
    handleClick=(id)=>{
        // console.log(id);
        this.props.history.push(`/reclassify/${id}`)
    }

}
export default Classify