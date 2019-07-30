import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'

class Redpacket extends Component{
    
    state = {
        datalist:[],
        list:[]
    }
    componentWillMount() {
        axios(`https://api9.wochu.cn/client/v1/member/activityconfig?parameters=%7B%22activityid%22:1%7D`).then(res=>{
            this.setState(
                {
                    datalist:res.data.data[1],
                    list:res.data.data[2],
                }
            )
            
            console.log(res.data.data);
            
        })  
                                
        
    }
    
    render(){
        console.log(this.state.datalist);
        
       var item = this.state.datalist
       var item2 = this.state.list
        return <div>
            
          <div className='header'>
              <img src={item.attribute_value} alt=""/>
          </div>
          <div className='main'>
              <div className='get-red'>
                  <img src={require('../../../assets/img/get_red_bg.jpg')} alt=""/>
              </div>
              <div className='rule-img'>
                  <img src={item2.attribute_value} alt=""/>
              </div>
         
          </div>
          
        </div>
       
    }
}

export default Redpacket
