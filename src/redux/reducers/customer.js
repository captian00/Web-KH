const initialState = [];
const myReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CUSTOMER":
            state.push({
                
            })
            return [...state];
        default:
            return state;
    }
}

export default myReducer;