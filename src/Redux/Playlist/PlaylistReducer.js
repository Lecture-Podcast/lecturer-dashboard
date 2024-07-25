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
                sectionloading:false,
                contentloading: false,
            }
        case CREATE_PLAYLIST_SUCCESS:
            return{
                loading: false,
                sectionloading:false,
                contentloading: false,
                sectionData:[],
                contentData:[],
                playlistData: action.payload,
                error:''
            }
        case CREATE_PLAYLIST_FALIURE:
            return{
                loading: false,
                sectionloading:false,
                contentloading: false,
                playlistData: [],
                sectionData:[],
                contentData:[],
                error:action.payload
            }
        case CREATE_SECTION_REQUEST:
            return{
                ...state,
                sectionloading: true,
                loading:false,
                contentloading: false,
            }
        case CREATE_SECTION_SUCCESS:
            return{
                sectionloading: false,
                loading:false,
                contentloading: false,
                sectionData: action.payload,
                playlistData:[],
                contentData:[],
                error:''
            }
        case CREATE_SECTION_FALIURE:
            return{
                sectionloading: false,
                loading:false,
                contentloading: false,
                sectionData: [],
                playlistData:[],
                contentData:[],
                error:action.payload
            }
        case CREATE_CONTENT_REQUEST:
            return{
                ...state,
                sectionloading: false,
                loading:false,
                contentloading: true,
            }
        case CREATE_CONTENT_SUCCESS:
            return{
                sectionloading: false,
                loading:false,
                contentloading: false,
                contentData: action.payload,
                sectionData:[],
                playlistData:[],
                error:''
            }
        case CREATE_CONTENT_FALIURE:
            return{
                sectionloading: false,
                loading:false,
                loading: false,
                contentData: [],
                sectionData:[],
                playlistData:[],
                error:action.payload
            }
        default: return state
    }
}