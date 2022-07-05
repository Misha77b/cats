import { 
    GET_CATS_REQUEST, 
} from "./cats.actions";

const initState = {
    cats: [],
}

const catsReducer = (state = initState, action) => {
    switch(action.type) {

        case GET_CATS_REQUEST: {
            return {
                ...state,
                cats: action.payload,
            }
        }

        default:
            return state
    }
}

export default catsReducer