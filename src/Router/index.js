import App from '../App'
import Home from '../Views/Home'
import Classify from '../Views/Classify'
import Cart from '../Views/Cart'
import Address from '../Views/Home/Address'
import ActivityPagew from '../Views/Home/ActivityPagew'
import Below from '../Views/Home/Below'
import Search from '../Views/Search/index'
import Searchresult from '../Views/Searchresult/index'
import Goodsdetail from '../Views/Goodsdetail/index'
import Nestlewater from '../Views/Home/Nestlewater'
import Redpacket from '../Views/Home/Redpacket'

import ActivityTemplate from '../Views/Home/ActivityTemplate'
import PackagesList from '../Views/Home/PackagesList'
import Dishes from '../Views/Home/Dishes'
import Personal  from '../Views/Personal/index'


import React from 'react'
import { HashRouter as Router,Route,Redirect,Switch } from 'react-router-dom'
const router = (
    <Router>
        <App>
            <Switch>
             
                     {/* <Route path="/film" component={Film} /> */}
                         <Route path="/Home/ActivityPagew" render={()=>
                        <ActivityPagew></ActivityPagew>
                    } />

                <Route path="/Home" component={Home} exact/>
                <Route path="/search" component={Search}></Route>
            <Route path="/searchResult/:id" component={Searchresult}></Route>
                <Route path="/Home/Address" component={Address} exact/>
                <Route path="/Home/PackagesList" component={PackagesList} exact/>
                <Route path='/personal' component={Personal}></Route>
                <Route path="/Home/Nestlewater" component={Nestlewater} exact/>
                <Route path="/Home/Redpacket" component={Redpacket} exact/>

              
                <Route path="/Classify" component={Classify} exact/>
                <Route path="/Cart" component={Cart} exact/>
                <Route path="/Home/ActivityTemplate/:id" component={ActivityTemplate} exact/>
                <Route path="/Home/Below/:id" component={Below} exact/>
                <Route path="/Home/Dishes/:id" component={Dishes} exact/>
                <Route path='/goodsdetail/:id' component={Goodsdetail}></Route>


                <Redirect from="/" to="/Home"/>
            </Switch>
        </App>
    </Router>
)
export default router;
