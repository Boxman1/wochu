import React,{Component} from 'react'
import './index.scss'
import axios from 'axios'



class Broadcast extends Component{
    state = {
        datalist:[],
        list:[]
    }
    componentDidMount() {
        axios.get( `http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H`).then(res=>{

            this.setState({
                datalist:res.data.data.acts[0].items,
                list:res.data.data.acts[1].items[0]
            })
       
        })
     
        
    }
    render(){
        
        return <div>
            <div className="broadcast">
                <div className = "broadcast-title">
                    <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f58332d2-ad98-4d10-aa96-28d1b8090d37.jpg" alt=""/>

                </div>
                <div className="broadcast-content">
                    <div className="scroll-content">
                        <ul>
                            {
                                 this.state.datalist.map((item,index)=>
                                <li key={index}>
                                {item.title}
                                </li>   
                                 )
                            }
                            
                       
                        </ul>

                    </div>
                    <div className="show-all">
                        <img src={[require("../../../assets/img/down@3x.png")]} alt=""/>
                    </div>

                </div>
                
            </div>
            <div className="img-link">
                <img  onClick={()=>this.changePage(this.state.list.source)}  src={this.state.list.imgUrl}  alt=""/ >
            </div>
        </div>
    }
    changePage = (source)=>{
          
          console.log(this.props);
          // console.log(target.indexOf("?"))
          var id = source.slice(source.indexOf("?")+1)
          // console.log(id)

            this.props.history.push(`/Home/ActivityTemplate/${id}`)
        }
}

export default Broadcast