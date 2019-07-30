import React,{Component} from 'react'  
import './index.scss'        
import PagewHeader from './PagewHeader'     
import {Route,Redirect,Switch } from 'react-router-dom'
import Choiceness from './Choiceness'     
import Close from './Close'     
import Newest from './Newest'     



class  ActivityPagew extends Component{
           
        render(){
      
            return <div>
             <div className='page-header app-devices'>
                    <div className='search-back'>
                    <img src={[require("../../../assets/img/goback.png")]} alt=""/>
                    </div>
                    <div className='doctitle'>
                        团购
                    </div>
                    <div className='my-group'>
                    我的团
                </div>
                </div> 
                <PagewHeader {...this.props}></PagewHeader> 
                <Switch>

                <Route path="/Home/ActivityPagew/Newest" component={Newest}/>
                <Route path="/Home/ActivityPagew/Choiceness" component={Choiceness}/>
                <Route path="/Home/ActivityPagew/Close" component={Close}/>
                <Redirect from="/Home/ActivityPagew" to="/Home/ActivityPagew/Newest"/>
                </Switch>

           

                </div>
        }   
        
}

export default ActivityPagew