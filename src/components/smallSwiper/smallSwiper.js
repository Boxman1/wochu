import Swiper from 'swiper'
import './swiper.min.css'
import '../Swiper/index.css'
import React from 'react'

class SmallSwiper extends React.Component{
    render(){
        return <div>
            {this.props.children}
        </div>
    }

    componentDidUpdate(){
        new Swiper('.swiper-container2', {
            slidesPerView: 3.5,
            spaceBetween: 20,
          });
    }
}
export default SmallSwiper