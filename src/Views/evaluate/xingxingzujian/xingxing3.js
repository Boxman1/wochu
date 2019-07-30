import React,{Component} from 'react'
import css from "./xingxing.module.scss"
class Xing3 extends Component{
    
    render(){
        return <div className={css.xing}>
        <img src={require("../pingjiaimgs/star_r.png")} alt="" />
        <img src={require("../pingjiaimgs/star_r.png")} alt="" />
        <img src={require("../pingjiaimgs/star_r.png")} alt="" />
        <img src={require("../pingjiaimgs/star_n.png")} alt="" />
        <img src={require("../pingjiaimgs/star_n.png")} alt="" />
    </div>
    }
}
export default Xing3