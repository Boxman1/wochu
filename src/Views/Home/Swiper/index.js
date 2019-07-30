import React,{Component} from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class  Swipers extends Component{
  
        componentDidMount() {
            
                  
                   new Swiper('.swiper-container', {
                    slidesPerView : 1,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                      },
                 })
         
              
        }       
        render(){
      
            return  <div style={{marginTop:'0.9rem'}} className="swiper-container">
            <div className="swiper-wrapper">
<img className="swiper-slide" src="https://img.wochu.cn/upload/aa5a9a19-46d5-469f-aaa6-f3bf5bd115e7.jpg" onClick={()=>this.changePage()} alt='' />    
<img className="swiper-slide" src="https://img.wochu.cn/upload/2a72c28e-06f2-4ee8-9b8b-9612543d5ded.gif" onClick={()=>this.changePage1()} alt=''/ >             
<img className="swiper-slide" src="https://img.wochu.cn/upload/bce39f29-74f0-42fb-bd56-3eb8811912b3.gif"  onClick={()=>this.changePage2()}alt=''/>             
<img className="swiper-slide" src="https://img.wochu.cn/upload/68c8f599-c3b9-45f0-b40b-a24bd98f199b.jpg" onClick={()=>this.changePage3()} alt='' />             
<img className="swiper-slide" src="https://img.wochu.cn/upload/d39c7ee1-cff3-4998-a057-de0b33590469.jpg" alt=''/>             


            </div>
            <div className="swiper-pagination"></div>
          </div>
          
        }   
        changePage(){
            this.props.history.push(`/Home/ActivityPagew/Newest`) 

        }
        changePage1(){
            this.props.history.push(`/Home/Below/activityId=768`) 

      }
      changePage2(){
        this.props.history.push(`/Home/ActivityTemplate/activityId=123`) 

  }
      changePage3(){
        this.props.history.push(`/Home/Below/activityId=762`) 

    }
}

export default Swipers