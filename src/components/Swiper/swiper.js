import Swiper from 'swiper'
import './swiper.min.css'
import '../Swiper/index.css'
import React from 'react'
class SwiperFood  extends React.Component{
    render(){
        return <div>   
             {this.props.children}
        </div>
    }
    componentDidUpdate(){
        new Swiper('.swiper-container1', {
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction'
            },
        });      
    }
}


export default SwiperFood