const initialState = {
    count:0
}

 export const countTheNumber = (state = initialState, action)=>{

    if(action.type ==="INCREMENT"){
        return {...state , count: state.count+action.payload}
    }
    if(action.type ==="DECREMENT"){
        return {
            ...state,count:state.count-action.payload
        }>0? {
            ...state,count:state.count-action.payload
        }:state
    }
    else{
        return state
    }
}



export const loginToggler = (state = false , action) =>{
    if(action.type === "TOGGLER"){
        return !state
    }
    else {
        return state
    }
}

// export  {countTheNumber, loginToggler};