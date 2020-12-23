const initState = {
    cosmetology: [],
    cosmetics: [],
    meditation: [],
}

const serviceReducer = (state=initState, action) =>{

    switch(action.type){
        case "FETCH_COSMETOLOGY":
            return {...state, cosmetology: action.payload.cosmetology}
        case "FETCH_MEDITATION":
            return {...state, meditation: action.payload.meditation}
        case "FETCH_COSMETICS":
            return {...state, cosmetics: action.payload.cosmetics}
        default:
            return {...state}
    }

}

export default serviceReducer;