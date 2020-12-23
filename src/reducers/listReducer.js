const initState = {lists: {}}

const listReducer = (state=initState, action) =>{
    switch(action.type){
        case "GET_LIST":
            return{
                ...state,
                lists: action.payload.lists
            }
        default:
            return{...state}
    }
}

export default listReducer;