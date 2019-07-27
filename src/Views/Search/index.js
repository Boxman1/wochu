import React from 'react'
import css from './index.module.scss'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Emptyerror from '../Components/Emptyerror'
class Search extends React.Component{ 
    state={
        hotlist:[],
        history:[],
        isShow:false
    }
    componentWillMount(){
        if(localStorage.getItem('searchkeywords')){
            this.setState({
                history:localStorage.getItem('searchkeywords').split(',')
            })
        }
    }
    componentDidMount(){
        axios.get("http://api9.wochu.cn/client/v1/goods/SearchByTag").then(res=>{
            this.setState({
                hotlist:res.data.data
            })
            // console.log(this.state.hotlist)
        })
    }
    render(){
        return <div>
            <div className={css.header}>
                <div className={css.view}>
                    <div className={css.back}>
                        <NavLink to="/classify" replace>
                            <img src="http://wmall.wochu.cn/h5/classify/img/back.png?v=7c8bfcd628" alt="back" />
                        </NavLink>
                        
                    </div>
                    <div className={css.ctl}>
                        <img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png" alt="search"/>
                        <input type="text" className={css.key} ref="mytext" onKeyDown={e=> {if(e.keyCode===13){this.searchclick(this.refs.mytext.value)}}}/>
                    </div>
                    <div className={css.btn} onClick={()=>{this.searchclick(this.refs.mytext.value)}}>
                        搜索
                    </div>
                </div>
             </div>
             <div className={css.container}>
                <div className={css.hot}>
                    <p>热门搜索</p>
                    <ul>
                        {
                            this.state.hotlist.map(item=>
                              <li key={item.name} onClick={()=>{this.handelclick(item.name)}}>{item.name}</li>
                             )
                        }
                    </ul>
                </div>
                <div className={css.history}>
                    <p>搜索历史</p>
                    <ul>
                        {
                            this.state.history.map(item=>
                                <li key={item} onClick={()=>{this.handelclick(item)}}>{item}</li>
                            )
                        }
                    </ul>
                    <div className={css.clean} onClick={this.cleanclick}>清空搜索记录</div>
                </div>
                {
                    this.state.isShow?
                   <Emptyerror></Emptyerror>
                    :null
                }
             </div>
        </div>
    }
    handelclick(keyword){
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
            this.setState({
                history:localStorage.getItem('searchkeywords').split(',')
            })

    }
    searchclick(keyword){
        var id = encodeURIComponent(encodeURIComponent(keyword))
        if(this.refs.mytext.value){
            this.props.history.push(`/searchResult/${id}`)
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
            this.setState({
                history:localStorage.getItem('searchkeywords').split(',')
            })
        }else{
            this.setState({
                isShow:true
            })
           setTimeout(() => {
                this.setState({
                    isShow:false
                })
            }, 1500);
        }
    }
    cleanclick=()=>{
        window.localStorage.removeItem('searchkeywords')
        this.setState({
            history:[]
        })
    }
    
}

export default Search