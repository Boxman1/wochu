import React,{Component} from 'react'
import css from '../Nav/index.module.scss'
import axios from 'axios'


class Nav extends Component{
    state = {
        datalist:[],
        list:[]
    }
        componentDidMount() {
            
             axios.get('https://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D').then(res=>{
                 
                  this.setState({
                       datalist:res.data.data.recommendedContent[0].items,
                       list:res.data.data.recommendedContent[1].items,


                  })
                  
                 
              })
              
              
        } 
    render(){
     
        return <div>
            <div className={css.nav}>
                
                <ul>
                    {
                         this.state.datalist.map((item,index)=>
                      <li key={index}>
                        
                    <img src={item.imgUrl }   onClick={()=>this.changePage(item.source,index)} alt=""/>
                    </li>  
                         )
                    }
                    

                </ul>
                <ul>
                    {
                        this.state.list.map((item,index)=>
                      <li key={index}>
                        
                    <img src={item.imgUrl}  onClick={()=>this.changePage1(item.source,index)} alt=""/>
                    </li>  
                         )
                    }
                </ul>



            </div>
        </div>
    }
    changePage = (target,index)=>{
        var id = target.slice(target.indexOf("?")+1)

        console.log(index);
        
        if(index===0){
          this.props.history.push(`/Home/ActivityTemplate/${id}`) 
        }else if(index===1){
          this.props.history.push(`/Home/PackagesList`) 
        }else if(index===2){
            this.props.history.push(`/Home/ActivityPagew/Newest`) 

        }else if(index===3){
         
          this.props.history.push(`/Home/Below/${id}`)
        }
       
      }
      changePage1 = (target,index)=>{
        // var id = target.slice(target.indexOf("?")+1)

        console.log(index);
        
        if(index===0){
          // this.props.history.push(`/Home/ActivityTemplate/${id}`) 
        }else if(index===1){
          // this.props.history.push(`/Home/PackagesList`) 
        }else if(index===2){
            this.props.history.push(`/Home/Redpacket`) 

        }else if(index===3){
         
          this.props.history.push(`/Home/Nestlewater`)
        }
       
      }
}

export default Nav