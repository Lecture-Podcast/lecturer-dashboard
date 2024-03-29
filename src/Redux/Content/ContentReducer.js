import { AUDIO_REQUEST, AUDIO_SUCCESS, AUDIO_FALIURE, FILE_REQUEST, FILE_SUCCESS, FILE_FALIURE, VIDEO_REQUEST, VIDEO_SUCCESS, VIDEO_FALIURE, FETCH_CONTENT_REQUEST, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_FALIURE } from "./ContentType"

const initialState = {
    loading: false,
    data:[],
    error: ""
}


// FOR Audio Content
export const fetchcontentReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CONTENT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_CONTENT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case FETCH_CONTENT_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}

// FOR Audio Content
export const audioReducer = (state = initialState, action) => {
    switch(action.type){
        case AUDIO_REQUEST:
            return{
                ...state,
                loading: true
            }
        case AUDIO_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case AUDIO_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}

// FOR File Content
export const fileReducer = (state = initialState, action) => {
    switch(action.type){
        case FILE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FILE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case FILE_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}

// FOR video Content
export const videoReducer = (state = initialState, action) => {
    switch(action.type){
        case VIDEO_REQUEST:
            return{
                ...state,
                loading: true
            }
        case VIDEO_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case VIDEO_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}