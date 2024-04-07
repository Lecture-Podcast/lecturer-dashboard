import { VERIFY_REQUEST, VERIFY_SUCCESS, VERIFY_FALIURE } from "./ProfileTypes"

const initialState = {
    loading: false,
    data:[],
    error: ""
}
export const verifyReducer = (state = initialState, action) => {
    switch(action.type){
        case VERIFY_REQUEST:
            return{
                ...state,
                loading: true
            }
        case VERIFY_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case VERIFY_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}
