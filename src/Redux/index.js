import {createStore} from 'redux'


var reducers =(prevSate={
    oldshujuid:null
},action)=>{
    console.log(action);

    return prevSate
}

const store = createStore(reducers)

export default store