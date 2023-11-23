const initialState = 0

const countTheNumber = (state = initialState, action)=>{

    if(action.type ==="INCREMENT"){
        return state + 1
    }
    if(action.type ==="DECREMENT"){
        return state - 1
    }
    else{
        return state
    }
}

export default countTheNumber