import React from 'react'
import axios from 'axios'
import Header from './Header'
import css from './index.module.scss'
class Hotlist extends React.Component{
    state={
        datalist:[],
    }
    componentDidMount() {
        // console.log(this.props.match.params.name)
        var id = encodeURI(this.props.match.params.name)
        axios.get(`http://api9.wochu.cn/client/v1/goods/SearchByTagName?parameters=%7B%22tagname%22:%22${id}%22,%22pageSize%22:10,%22pageIndex%22:1,%22orderId%22:0%7D`).then(res=>{
            // console.log(res.data.data.items);
            this.setState({
                datalist:res.data.data.items
            })
        })
        // console.log(id)
    }
    
    render(){
            // console.log(this.props.match.params.url);
        return (<div>
            <Header {...this.props}></Header>
            <ul className={css.ul}>
            {
                this.state.datalist.map(item=>
                    <li key={item.goodsGuid}>
                        <img src={item.picUrl} alt={item.goodsGuid}/>
                    <div className={css.fr}> 
                        <p className={css.goodsname}>{item.goodsName}</p>
                        <div className={css.price}>
                            <div className={css.wrap}>
                                <span className={css.realprice}>￥{item.price}</span>
                                <span className={css.oldprice}>￥{item.marketPrice}</span>
                            </div>
                            <img src="http://wmall.wochu.cn/h5/hotlist/img/icon-listcart-75@3x.png?v=24d2b0ab1a"  alt={'xxx'}/>
                        </div>
                    </div>
                    
                    </li>
                )
            }
            </ul>
            <div className={css.loadmore}>没有更多了~</div>
        </div>)
    }
}
export default Hotlist