const initState = {service: {}}

const detailReducer = (state=initState, action) => {
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                service: action.payload.service
            }
        default:
            return{...state}
    }
}

export default detailReducer;