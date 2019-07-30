import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
class  PackagesList extends Component{
    state = {
        datalist:[]
    }
        componentDidMount() {
            
             axios.get('http://wmall.wochu.cn/client/v1/goods/package/list').then(res=>{
                 console.log(res.data);
                 
                  this.setState({
                       datalist:res.data.data
                  })
                  
                 
              })
              
              
        }       
        render(){
      
            return  <div>
                {
                    this.state.datalist.map((item,index)=>
                          <ul key={index}>
                                <li >
                                    <img   src={item.url} alt=""/>
                                    <div className="package-info">
                                        <div  className="package-name">{item.pName}</div>
                                        <div className="package-price">套餐价:{item.price}元</div>
                                        <p  className="package-desc">{item.description}</p>
                                    </div>
                                </li>
                            </ul>
                        )
              
                }
            </div>
               
          
          
        }   
        
}

export default PackagesList