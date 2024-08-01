import { CREATE_CONTENT_FALIURE, CREATE_CONTENT_REQUEST, CREATE_CONTENT_SUCCESS, CREATE_PLAYLIST_FALIURE, CREATE_PLAYLIST_REQUEST, CREATE_PLAYLIST_SUCCESS, CREATE_SECTION_FALIURE, CREATE_SECTION_REQUEST, CREATE_SECTION_SUCCESS } from "./PlaylistType"

const initialState = {
    loading: false,
    sectionloading:false,
    contentloading: false,
    playlistData:[],
    sectionData:[],
    contentData:[],
    error: ""
}


// FOR Audio Content
export const playlistReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_PLAYLIST_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case CREATE_PLAYLIST_SUCCESS:
            return{
                loading: false,
                playlistData: action.payload,
                error:''
            }
        case CREATE_PLAYLIST_FALIURE:
            return{
                loading: false,
                playlistData: [],
                error:action.payload
            }
        default: return state
    }
}

export const sectionReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_SECTION_REQUEST:
            return{
                ...state,
                sectionloading: true,
            }
        case CREATE_SECTION_SUCCESS:
            return{
                sectionloading: false,
                sectionData: action.payload,
                error:''
            }
        case CREATE_SECTION_FALIURE:
            return{
                sectionloading: false,
                sectionData: [],
                error:action.payload
            }
        default: return state
    }
}

export const lectureReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_CONTENT_REQUEST:
            return{
                ...state,
                contentloading: true,
            }
        case CREATE_CONTENT_SUCCESS:
            return{
                contentloading: false,
                contentData: action.payload,
                error:''
            }
        case CREATE_CONTENT_FALIURE:
            return{
                contentloading: false,
                contentData: [],
                error:action.payload
            }
        default: return state
    }
}