import React,{Component} from 'react'
import css from "./xingxing.module.scss"
class Xing5 extends Component{
    
    render(){
        return <div className={css.xing}>
        <img src={require("../pingjiaimgs/star_r.png")} alt="" />
        <img src={require("../pingjiaimgs/star_r.png")} alt="" />
        <img src={require("../pingjiaimgs/star_r.png")} alt="" />
        <img src={require("../pingjiaimgs/star_r.png")} alt="" />
        <img src={require("../pingjiaimgs/star_r.png")} alt="" />
    </div>
    }
}
export default Xing5