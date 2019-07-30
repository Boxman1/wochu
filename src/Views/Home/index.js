import React,{Component} from 'react'
import HomeHeader from '../Home/HomeHeader'
import Swiper from './Swiper'
import Nav from './Nav'
import Broadcast from './Broadcast'
import Preference from './Preference'
import Tabbar from '../../Components/Tabbar';
import './index.scss'


class Home extends Component{
    
    
    render(){
        return <div >
            <HomeHeader></HomeHeader>
            <Swiper {...this.props}></Swiper>
            <Nav {...this.props}></Nav>
            <Broadcast {...this.props}></Broadcast>
            <Preference {...this.props}></Preference>
            <Tabbar></Tabbar>

        </div>
    }
}

export default Home