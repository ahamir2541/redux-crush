const initialState = {
    count : 100,
    name : true,
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD' :
            return {
                count : state.count + action.payload,
                name : false,
            }
        case 'SUB' :
            return {
                count : state.count - action.payload,
                name : true
            }
        
        default :
            return state
    }
}

export default rootReducer