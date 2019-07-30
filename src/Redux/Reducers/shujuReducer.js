const shujuReducer=(prevState=null,action)=>{
    console.log(action);
    let {type,payload} =action
    switch(type){
        case "oldShuju":
            var ccc = [...prevState]
            return ccc
        default:
            return prevState
    }
    
}
export default shujuReducer