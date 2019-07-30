import React,{Component} from 'react'
import css from './index.module.scss'
import {NavLink} from 'react-router-dom'

import axios from 'axios'

class HomeHeader extends Component{
    // http://api9.wochu.cn/client/v1/sameday/getLoadHomeSameDayInfo
        state = {
            filmInfo:[]          
        }     
        componentDidMount() {
          axios.get('/client/v1/sameday/getLoadHomeSameDayInfo').then(res=>{
            //   console.log(res.data.data);
               this.setState({
                filmInfo:res.data.data
              })
          })
        }       
        render(){
           var site = this.state.filmInfo
            return <div className={css.app}>
                <div className={css.header}>
                    <div className={css.logo}>
                        <img src={[require("../../../assets/img/wochuLogo.jpg")]} alt=""/>
                    </div>
                    <div >
                    <NavLink to="/Home/Address"  className={css.addrdetail}>
                        <p>
                          {site.address}  
                        </p>
                        <span>
                            <img src={[require("../../../assets/img/icon.png")]}alt=""/>
                        </span>
                        </NavLink>
                    </div>
                    <div>
                    <NavLink  to="/Search" className={css.search}>
                        <img src={[require("../../../assets/img/search.png")]} alt=""/>
                    </NavLink>
                    </div>
                </div>
            </div>
        }   
}

export default HomeHeader