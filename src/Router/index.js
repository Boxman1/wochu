import React from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import App from '../App'
import Home from '../Views/Home/index'
import Classify from '../Views/Classify/index'
import Reclassify from '../Views/Reclassify/index'
import Search from '../Views/Search/index'
import Cart from '../Views/Cart/index'
import Personal  from '../Views/Personal/index'
<<<<<<< HEAD
// import Hotlist from '../Views/Hotlist/index'
=======
import Hotlist from '../Views/Hotlist/index'
import Login from '../Views/Login'
import ActivityTemplate from '../Views/ActivityTemplate'
>>>>>>> cffd28dbbe9a9937e9f9ad02d4df2c7620271a1a
import Goodsdetail from '../Views/Goodsdetail/index'
import Evaluate from '../Views/evaluate/index'
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
<<<<<<< HEAD

            {/* <Route path='/hotlist' component={Hotlist}></Route> */}
            <Route path='/reclassify' component={Reclassify}></Route>
=======
            <Route path='/login' component={Login}></Route>
            <Route path='/ativityTemplate/:id' component={ActivityTemplate}></Route>
            <Route path='/hotlist/:name' component={Hotlist}></Route>
            <Route path='/reclassify/:id' component={Reclassify}></Route>
>>>>>>> cffd28dbbe9a9937e9f9ad02d4df2c7620271a1a
            <Route path="/search" component={Search}></Route>
            <Route path="/searchResult" component={Search}></Route>
            <Route path='/goodsdetail/:id' component={Goodsdetail}></Route>
            <Route path='/evaluate/:id' component={Evaluate}></Route>
            <Redirect from='/' to='/home'></Redirect>          
        </Switch>
    </App>
</Router>

export default router