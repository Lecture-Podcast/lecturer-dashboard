import { CHANGE_PASSWORD_FALIURE, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PROFILE_IMAGE_FALIURE, CHANGE_PROFILE_IMAGE_REQUEST, CHANGE_PROFILE_IMAGE_SUCCESS } from "./SettingsType"

const initialState = {
    loading: false,
    data:[],
    error: ""
}


// FOR CHANGE PASSOWARD
export const changepasswordReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_PASSWORD_REQUEST:
            return{
                ...state,
                loading: true
            }
        case CHANGE_PASSWORD_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case CHANGE_PASSWORD_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}

// FOR CHANGE PASSOWARD
export const changeprofileimageReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_PROFILE_IMAGE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case CHANGE_PROFILE_IMAGE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case CHANGE_PROFILE_IMAGE_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}