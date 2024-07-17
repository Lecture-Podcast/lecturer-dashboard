import { AUDIO_REQUEST, AUDIO_SUCCESS, AUDIO_FALIURE, FILE_REQUEST, FILE_SUCCESS, FILE_FALIURE, VIDEO_REQUEST, VIDEO_SUCCESS, VIDEO_FALIURE, FETCH_CONTENT_REQUEST, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_FALIURE, FETCH_SINGLE_CONTENT_REQUEST, FETCH_SINGLE_CONTENT_SUCCESS, FETCH_SINGLE_CONTENT_FALIURE, DELETE_CONTENT_REQUEST, DELETE_CONTENT_SUCCESS, DELETE_CONTENT_FALIURE, EDIT_AUDIO_REQUEST, EDIT_AUDIO_SUCCESS, EDIT_AUDIO_FALIURE, EDIT_FILE_FALIURE, EDIT_FILE_SUCCESS, EDIT_FILE_REQUEST, EDIT_VIDEO_FALIURE, EDIT_VIDEO_SUCCESS, EDIT_VIDEO_REQUEST } from "./ContentType"

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
export const fetchsinglecontentReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SINGLE_CONTENT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_SINGLE_CONTENT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case FETCH_SINGLE_CONTENT_FALIURE:
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

// FOR Audio Content
export const editaudioReducer = (state = initialState, action) => {
    switch(action.type){
        case EDIT_AUDIO_REQUEST:
            return{
                ...state,
                loading: true
            }
        case EDIT_AUDIO_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case EDIT_AUDIO_FALIURE:
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

// FOR File Content
export const editfileReducer = (state = initialState, action) => {
    switch(action.type){
        case EDIT_FILE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case EDIT_FILE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case EDIT_FILE_FALIURE:
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

// FOR video Content
export const editvideoReducer = (state = initialState, action) => {
    switch(action.type){
        case EDIT_VIDEO_REQUEST:
            return{
                ...state,
                loading: true
            }
        case EDIT_VIDEO_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case EDIT_VIDEO_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}

// FOR Audio Content
export const deletecontentReducer = (state = initialState, action) => {
    switch(action.type){
        case DELETE_CONTENT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case DELETE_CONTENT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error:''
            }
        case DELETE_CONTENT_FALIURE:
            return{
                loading: false,
                data: [],
                error:action.payload
            }
        default: return state
    }
}