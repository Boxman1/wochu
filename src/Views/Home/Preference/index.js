import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {NavLink} from 'react-router-dom'



class Preference extends Component{
    state = {
        datalist:[],
        newdata:[],
        slider:[],
        meal:[],
        Summer:[],
        buy:[],
        buy1:[],
        buy2:[],
        datalist1:[],
        newdata1:[],
        slider1:[],
        cuisine:[],
        cuisine1:[],

        cuisine2:[],

        cuisine3:[],

        cuisine4:[],

        cuisine5:[],
        cuisine6:[],
        cuisine7:[],
        cuisine8:[],
        cuisine9:[],





        price:[],
        price1:[],
        price2:[],
        price3:[],
        price4:[],
        price5:[],
        price6:[],
        price7:[],
        price8:[],
        price9:[],










    }
        componentDidMount() {
            
             axios.get('https://api9.wochu.cn/api/app/acts?version=20.0.0&source=H').then(res=>{
                
                 
                  this.setState({
                       datalist:res.data.data.acts[2],
                       newdata:res.data.data.acts[2].items[0],
                       slider:res.data.data.acts[3].items,
                       meal:res.data.data.acts[4].items[0],
                       Summer:res.data.data.acts[5].items[0],
                       buy:res.data.data.acts[6].items[0],
                       buy1:res.data.data.acts[6].items[1],
                       buy2:res.data.data.acts[6].items[2],
                       datalist1:res.data.data.acts[7],
                       newdata1:res.data.data.acts[7].items[0],
                       slider1:res.data.data.acts[8].items,

                       cuisine:res.data.data.acts[9].items[0],
                       price:res.data.data.acts[10].items,

                       cuisine1:res.data.data.acts[11].items[0],
                       price1:res.data.data.acts[12].items,

                       cuisine2:res.data.data.acts[13].items[0],
                       price2:res.data.data.acts[14].items,

                       cuisine3:res.data.data.acts[15].items[0],
                       price3:res.data.data.acts[16].items,

                       cuisine4:res.data.data.acts[17].items[0],
                       price4:res.data.data.acts[18].items,

                       cuisine5:res.data.data.acts[19].items[0],
                       price5:res.data.data.acts[20].items,

                       cuisine6:res.data.data.acts[21].items[0],
                       price6:res.data.data.acts[22].items,

                       cuisine7:res.data.data.acts[23].items[0],
                       price7:res.data.data.acts[24].items,

                       cuisine8:res.data.data.acts[25].items[0],
                       price8:res.data.data.acts[26].items,

                       cuisine9:res.data.data.acts[27].items[0],
                       price9:res.data.data.acts[28].items,





   
                  })
                 new Swiper('.swiperContainer', {
                    slidesPerView :4.2,
                   
                 })

              })
            }
    render(){
        var item = this.state.newdata
        var loop = this.state.datalist
        var meal = this.state.meal
        var summer = this.state.Summer
        var buy = this.state.buy
        var buy1 = this.state.buy1
        var buy2 = this.state.buy2
        var item1 = this.state.newdata1
        var loop1 = this.state.datalist1
        var cuisine = this.state.cuisine
        var cuisine1 = this.state.cuisine1

        var cuisine2 = this.state.cuisine2

        var cuisine3 = this.state.cuisine3

        var cuisine4 = this.state.cuisine4

        var cuisine5= this.state.cuisine5

        var cuisine6= this.state.cuisine6

        var cuisine7 = this.state.cuisine7

        var cuisine8 = this.state.cuisine8

        var cuisine9 = this.state.cuisine9




        return   <div className='all' >
            <div className='temp-list1'>
                <div className='temp-title'>
                    <span> </span>
                   {loop.title}
                    <span className='line-rt'></span>
                </div>
                <ul>
                    <li  onClick={()=>{this.handleclick(item.source)}}>
                    <div className='img-view'>
                    <img src={item.imgUrl} alt=""/>
                    <div className='corner-mark'>
                    {/* <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5d7e9fe5-e8ad-4e32-8187-7aad9d4a6021.png" alt=""/> */}
                    </div>
                    </div>
                    <div className='temp-goods-info'>
                    <p className='temp-goods-name'>{item.goodsName}</p>
                    <div className='goods-intro'>{item.description}</div>
                    <div className='temp-goods-price'>
                    <div className='price-wrap'>
                    <div className='real-price'>
                        ￥
                    <span className='before-point'>{item.price}</span>
                    </div>
                    </div>
                    <div className='add-to-cart'>
                    <img src={[require("../../../assets/img/add.png")]} alt=""/>
                    </div>
                    </div>
                    </div>
                    </li>
                    </ul>
                    </div>   
            <div className="swiperContainer" >
            <div className="swiper-wrapper">
           
                  {
                      this.state.slider.map((item,index)=>
                        <div key={index} className="swiper-slide"onClick={()=>{this.handleclick(item.source)}} >
                            <img src={item.imgUrl} alt=""/ >
                  
                            <div className='group-name ellipsis'>
                                <span id='textIcon'></span>
                                {item.posDes}
                            </div>
                            <div className='m-price'>
                                <div>￥{item.marketPrice}</div>
                            </div>
                            <div className='o-price'>
                                ￥{item.price}
                            </div>
                            <div className='add-cart'>
                            <img src={[require("../../../assets/img/add.png")]} alt=""/>
                            </div>
                        </div>
                        
                        )
                        
                        
                  }
                 
                  <div className="swiper-slide"></div>
                  <div className="swiper-slide"></div>
                  

                

            </div>     
            </div>
            <div className='img-link' style={{width:'100%'}}
            onClick={()=>this.changePages(meal.source)}
            >
            <img src={meal.imgUrl} alt=""/>
            </div>
            <div className='goods-item-list'>
                            <div className='img-link'>

                            <img onClick={()=>this.changePages1(summer.source)} src={summer.imgUrl} alt=""/>

                                </div>

            </div>
            <div className='goods-item-list'>
            <div className='goods-item-list3'>
                <div className='left-view'>
                <NavLink to="/Home/ActivityPagew/Newest" replace >
                    <img src={buy.imgUrl} alt=""/>
                </NavLink>
                </div>
                <div className='right-view'>
                    <div className='rt-top-view'>
                    <NavLink to="/Home/PackagesList" replace >

                        <img src={buy1.imgUrl} alt=""/>
                        </NavLink>

                    </div>
                    <div className='rt-bottom-view'>

                        <img onClick={()=>this.changePages(buy2.source)} src={buy2.imgUrl} alt=""/>

                    </div>
                </div>
            </div>
            </div>
            <div className='temp-list1'>
             <div className='temp-title'>
                 <span> </span>
                {loop1.title}
                 <span className='line-rt'></span>
             </div>
             <ul>
                 <li onClick={()=>{this.handleclick(item1.source)}}>
                 <div className='img-view'>
                 <img src={item1.imgUrl} alt=""/>
                 <div className='corner-mark'>
                 </div>
                 </div>
                 <div className='temp-goods-info'>
                 <p className='temp-goods-name'>{item1.goodsName}</p>
                 <div className='goods-intro'>{item1.description}</div>
                 <div className='temp-goods-price'>
                 <div className='price-wrap'>
                 <div className='real-price'>
                     ￥
                 <span className='before-point'>{item1.price}</span>
                 </div>
                 </div>
                 <div className='add-to-cart'>
                 <img src={[require("../../../assets/img/add.png")]} alt=""/>
                 </div>
                 </div>
                 </div>
                 </li>
                 </ul>
                 </div>   
            <div className="swiperContainer" style={{background:'white'}}>
       <div className="swiper-wrapper">
             {
                 this.state.slider1.map((item,index)=>
                   <div key={index} className="swiper-slide" onClick={()=>{this.handleclick(item.source)}} >
                       <img src={item.imgUrl} alt=""/ >
                         
                       <div className='group-name ellipsis'>
                           <span id='textIcon'></span>
                           {item.posDes}
                       </div>
                       <div className='m-price'>
                           <div>￥{item.marketPrice}</div>
                       </div>
                       <div className='o-price'>
                           ￥{item.price}
                       </div>
                       <div className='add-cart'>
                       <img src={[require("../../../assets/img/add.png")]} alt=""/>
                       </div>
                   </div>                 
                   )     
             }      
             <div className="swiper-slide"></div>
             <div className="swiper-slide"></div>
       </div>
       </div>
             <div className='all'>
             <div className='img-link'>
                 <img className='pic' onClick={()=>this.changePage(cuisine.source)} src={cuisine.imgUrl} alt=""/ >
             </div>
        {
             this.state.price.map((item,index)=>
             <div key={index} className='goods-item-list6 'onClick={()=>{this.handleclick(item.source)}}>
                 <div className='goods-list'>
                     <ul >
                         <li>
                             <img src={item.imgUrl} alt=""/>
                            <div className='goods-name'>
                                {item.goodsName}
                            </div>
                            <div className='price-cart'>
                                <div className='price-ctl'>
                                <div className='market-price'>
                                    ￥{item.marketPrice}
                                </div>
                                <div className='price'>
                                    ￥{item.price}
                                </div>
                                <div className='addCart'>
                                <img src={[require("../../../assets/img/add.png")]} alt=""/>
                                </div>
                            </div>
                            </div>
                         </li>
                     </ul>
                 </div>
           
             </div>
             )
            }
              </div>
            <div className='all'>
             <div className='img-link'>
                 <img onClick={()=>this.changePage(cuisine1.source)} src={cuisine1.imgUrl} alt=""/>
             </div>
        {
             this.state.price1.map((item,index)=>
             <div key={index} className='goods-item-list6' onClick={()=>{this.handleclick(item.source)}}>
                 <div className='goods-list'>
                     <ul>
                         <li>
                             <img src={item.imgUrl} alt=""/>
                            <div className='goods-name'>
                                {item.goodsName}
                            </div>
                            <div className='price-cart'>
                                <div className='price-ctl'>
                                <div className='market-price'>
                                    ￥{item.marketPrice}
                                </div>
                                <div className='price'>
                                    ￥{item.price}
                                </div>
                                <div className='addCart'>
                                <img src={[require("../../../assets/img/add.png")]} alt=""/>
                                </div>
                            </div>
                            </div>
                         </li>
                     </ul>
                 </div>
             
             </div>
             )
            }
            </div>
            <div className='all'>
            <div className='img-link'>
                <img onClick={()=>this.changePage(cuisine2.source)} src={cuisine2.imgUrl} alt=""/>
            </div>
       {
            this.state.price2.map((item,index)=>
            <div key={index} className='goods-item-list6' onClick={()=>{this.handleclick(item.source)}}>
                <div className='goods-list'>
                    <ul>
                        <li>
                            <img src={item.imgUrl} alt=""/>
                           <div className='goods-name'>
                               {item.goodsName}
                           </div>
                           <div className='price-cart'>
                               <div className='price-ctl'>
                               <div className='market-price'>
                                   ￥{item.marketPrice}
                               </div>
                               <div className='price'>
                                   ￥{item.price}
                               </div>
                               <div className='addCart'>
                               <img src={[require("../../../assets/img/add.png")]} alt=""/>
                               </div>
                           </div>
                           </div>
                        </li>
                    </ul>
                </div>
            
            </div>
            )
           }
           </div>
           <div className='all'>
           <div className='img-link'>
               <img onClick={()=>this.changePage(cuisine3.source)} src={cuisine3.imgUrl} alt=""/>
           </div>
      {
           this.state.price3.map((item,index)=>
           <div key={index} className='goods-item-list6' onClick={()=>{this.handleclick(item.source)}}>
               <div className='goods-list'>
                   <ul>
                       <li>
                           <img src={item.imgUrl} alt=""/>
                          <div className='goods-name'>
                              {item.goodsName}
                          </div>
                          <div className='price-cart'>
                              <div className='price-ctl'>
                              <div className='market-price'>
                                  ￥{item.marketPrice}
                              </div>
                              <div className='price'>
                                  ￥{item.price}
                              </div>
                              <div className='addCart'>
                              <img src={[require("../../../assets/img/add.png")]} alt=""/>
                              </div>
                          </div>
                          </div>
                       </li>
                   </ul>
               </div>
           
           </div>
           )
          }
          </div>
          <div className='all'>
          <div className='img-link'>
              <img onClick={()=>this.changePage(cuisine4.source)} src={cuisine4.imgUrl} alt=""/>
          </div>
     {
          this.state.price4.map((item,index)=>
          <div key={index} className='goods-item-list6' onClick={()=>{this.handleclick(item.source)}}>
              <div className='goods-list'>
                  <ul>
                      <li>
                          <img src={item.imgUrl} alt=""/>
                         <div className='goods-name'>
                             {item.goodsName}
                         </div>
                         <div className='price-cart'>
                             <div className='price-ctl'>
                             <div className='market-price'>
                                 ￥{item.marketPrice}
                             </div>
                             <div className='price'>
                                 ￥{item.price}
                             </div>
                             <div className='addCart'>
                             <img src={[require("../../../assets/img/add.png")]} alt=""/>
                             </div>
                         </div>
                         </div>
                      </li>
                  </ul>
              </div>
          
          </div>
          )
         }
         </div>
         <div className='all'>
         <div  className='img-link'>
             <img onClick={()=>this.changePage(cuisine5.source)} src={cuisine5.imgUrl} alt=""/>
         </div>
    {
         this.state.price5.map((item,index)=>
         <div key={index} className='goods-item-list6' onClick={()=>{this.handleclick(item.source)}}>
             <div className='goods-list'>
                 <ul>
                     <li>
                         <img src={item.imgUrl} alt=""/>
                        <div className='goods-name'>
                            {item.goodsName}
                        </div>
                        <div className='price-cart'>
                            <div className='price-ctl'>
                            <div className='market-price'>
                                ￥{item.marketPrice}
                            </div>
                            <div className='price'>
                                ￥{item.price}
                            </div>
                            <div className='addCart'>
                            <img src={[require("../../../assets/img/add.png")]} alt=""/>
                            </div>
                        </div>
                        </div>
                     </li>
                 </ul>
             </div>
         
         </div>
         )
        }
        </div>
        <div className='all'>
        <div className='img-link'>
            <img onClick={()=>this.changePage(cuisine6.source)} src={cuisine6.imgUrl} alt=""/>
        </div>
   {
        this.state.price6.map((item,index)=>
        <div key={index} className='goods-item-list6' onClick={()=>{this.handleclick(item.source)}}>
            <div className='goods-list'>
                <ul>
                    <li>
                        <img src={item.imgUrl} alt=""/>
                       <div className='goods-name'>
                           {item.goodsName}
                       </div>
                       <div className='price-cart'>
                           <div className='price-ctl'>
                           <div className='market-price'>
                               ￥{item.marketPrice}
                           </div>
                           <div className='price'>
                               ￥{item.price}
                           </div>
                           <div className='addCart'>
                           <img src={[require("../../../assets/img/add.png")]} alt=""/>
                           </div>
                       </div>
                       </div>
                    </li>
                </ul>
            </div>
        
        </div>
        )
       }
       </div>
       <div className='all'>
       <div className='img-link'>
           <img onClick={()=>this.changePage(cuisine7.source)} src={cuisine7.imgUrl} alt=""/>
       </div>
  {
       this.state.price7.map((item,index)=>
       <div key={index} className='goods-item-list6' onClick={()=>{this.handleclick(item.source)}}>
           <div className='goods-list'>
               <ul>
                   <li>
                       <img src={item.imgUrl} alt=""/>
                      <div className='goods-name'>
                          {item.goodsName}
                      </div>
                      <div className='price-cart'>
                          <div className='price-ctl'>
                          <div className='market-price'>
                              ￥{item.marketPrice}
                          </div>
                          <div className='price'>
                              ￥{item.price}
                          </div>
                          <div className='addCart'>
                          <img src={[require("../../../assets/img/add.png")]} alt=""/>
                          </div>
                      </div>
                      </div>
                   </li>
               </ul>
           </div>
       
       </div>
       )
      }
      </div>
       <div className='all'>
       <div className='img-link'>
           <img onClick={()=>this.changePage(cuisine8.source)} src={cuisine8.imgUrl} alt=""/>
       </div>
  {
       this.state.price8.map((item,index)=>
       <div key={index} className='goods-item-list6' onClick={()=>{this.handleclick(item.source)}}>
           <div className='goods-list'>
               <ul>
                   <li>
                       <img src={item.imgUrl} alt=""/>
                      <div className='goods-name'>
                          {item.goodsName}
                      </div>
                      <div className='price-cart'>
                          <div className='price-ctl'>
                          <div className='market-price'>
                              ￥{item.marketPrice}
                          </div>
                          <div className='price'>
                              ￥{item.price}
                          </div>
                          <div className='addCart'>
                          <img src={[require("../../../assets/img/add.png")]} alt=""/>
                          </div>
                      </div>
                      </div>
                   </li>
               </ul>
           </div>
       
       </div>
       )
      }
      </div>
       <div className='all'>
       <div className='img-link'>
           <img onClick={()=>this.changePage(cuisine9.source)} src={cuisine9.imgUrl} alt=""/>
       </div>
  {
       this.state.price9.map((item,index)=>
       <div key={index} className='goods-item-list6' onClick={()=>{this.handleclick(item.source)}}>
           <div className='goods-list'>
               <ul>
                   <li>
                       <img src={item.imgUrl} alt=""/>
                      <div className='goods-name'>
                          {item.goodsName}
                      </div>
                      <div className='price-cart'>
                          <div className='price-ctl'>
                          <div className='market-price'>
                              ￥{item.marketPrice}
                          </div>
                          <div className='price'>
                              ￥{item.price}
                          </div>
                          <div className='addCart'>
                          <img src={[require("../../../assets/img/add.png")]} alt=""/>
                          </div>
                      </div>
                      </div>
                   </li>
               </ul>
           </div>
       
       </div>
       )
      }
      </div>
            </div>
                  
    }
    changePages = (source)=>{
        var id = source.slice(source.indexOf('?')+1)
        console.log(id);
        this.props.history.push(`/Home/Below/${id}`)

        
    }
    changePages1 = (source)=>{
        var id = source.slice(source.indexOf('?')+1)
        console.log(id);
        this.props.history.push(`/Home/ActivityTemplate/${id}`)

        
    }
    changePage = (source)=>{
        var id = source.slice(source.indexOf('?')+1)
        console.log(id);
        this.props.history.push(`/Home/Dishes/${id}`)

        
    }
    handleclick(id){
        // console.log(this.props)
        this.props.history.push(`/goodsdetail/${id}`)
    }
}

export default Preference