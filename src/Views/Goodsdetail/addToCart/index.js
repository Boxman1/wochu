import React from 'react'
import css from'./index.module.scss'
class AddToCart extends React.Component{
    state={
        current:1,
        pic:true
    }
render(){
    // console.log(this.props.item)
    const item = this.props.item
    return <div>
        <div className={css.pop}>
            
        </div>
        <div className={css.cartinfo}>
            <div className={css.close} onClick={()=>{this.props.mxw()}}><img src={require('./imgs/close.png')} alt=""/></div>
            {item?<img src={item.picUrl} alt=""className={css.good}/>:null}
            <p>商品售价</p>
            {item?<div className={css.price}>￥{item.price}</div>:null}
            <span>购买数量</span>
            <div className={css.addmin}>
                <span className={css.min} onClick={()=>{this.min()}}>
                    {this.state.pic?<img src={require('./imgs/min1.png')} alt=""/>:<img src={require('./imgs/min.png')} alt=""/>}
                </span>
                {/* <input type="text" defaultValue={this.state.current}/> */}
                <div className={css.input1}>{this.state.current}</div>
                <span className={css.add} onClick={()=>{this.add()}}>
                <img src={require('./imgs/addreal.png')} alt=""/>
                </span>
            </div>
            
        </div>

        <div className={css.cartt}>加入购物车</div>
    </div>
    
}
    min=()=>{
    this.setState({
        current:this.state.current-1,
      
    },()=>{
        this.state.current<=1?this.setState({
            current:1,
            pic:true
        }):this.setState({
            pic:false
        })
    })        
    }
    add=()=>{
    this.setState({
        current:this.state.current+1
    },()=>{
        this.state.current>1?this.setState({
            pic:false
        }):this.setState({
            pic:true
        })
    })        
    }

}
export default AddToCart