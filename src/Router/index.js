import React from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import App from '../App'
import Home from '../Views/Home/index'
import Classify from '../Views/Classify/index'
import Reclassify from '../Views/Reclassify/index'
import Search from '../Views/Search/index'
import  Cart from '../Views/Cart/index'
import Personal  from '../Views/Personal/index'
import Hotlist from '../Views/Hotlist/index'
import Login from '../Views/Login'
import ActivityTemplate from '../Views/ActivityTemplate'

const router = <Router>
    <App>
        <Switch>
            <Route path='/home' render={()=>
                <Home>
                </Home>
            }></Route>
            <Route path='/classify' component={Classify}></Route>
            <Route path='/cart' component={Cart}></Route>
            <Route path='/personal' component={Personal}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/ativityTemplate/:id' component={ActivityTemplate}></Route>
            <Route path='/hotlist/:name' component={Hotlist}></Route>
            <Route path='/reclassify/:id' component={Reclassify}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/searchResult" component={Search}></Route>
            <Redirect from='/' to='/home'></Redirect>
        </Switch>
    </App>
</Router>

export default router