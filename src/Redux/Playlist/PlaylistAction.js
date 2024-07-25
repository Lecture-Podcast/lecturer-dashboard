import axios from "axios";
import { CREATE_CONTENT_FALIURE, CREATE_CONTENT_REQUEST, CREATE_CONTENT_SUCCESS, CREATE_PLAYLIST_FALIURE, CREATE_PLAYLIST_REQUEST, CREATE_PLAYLIST_SUCCESS, CREATE_SECTION_FALIURE, CREATE_SECTION_REQUEST, CREATE_SECTION_SUCCESS } from "./PlaylistType";

//FOR Fetch content
export const createPlaylistRequest = ()=>{
    return{
        type:CREATE_PLAYLIST_REQUEST
    }
}
export const createPlaylistSuccess = (data)=>{
    return{
        type:CREATE_PLAYLIST_SUCCESS,
        payload: data
    }
}
export const createPlaylistFaliure = (error)=>{
    return{
        type:CREATE_PLAYLIST_FALIURE,
        payload: error
    }
}

export const createSectionRequest = ()=>{
    return{
        type:CREATE_SECTION_REQUEST
    }
}
export const createSectionSuccess = (data)=>{
    return{
        type:CREATE_SECTION_SUCCESS,
        payload: data
    }
}
export const createSectionFaliure = (error)=>{
    return{
        type:CREATE_SECTION_FALIURE,
        payload: error
    }
}

export const createContentRequest = ()=>{
    return{
        type:CREATE_CONTENT_REQUEST
    }
}
export const createContentSuccess = (data)=>{
    return{
        type:CREATE_CONTENT_SUCCESS,
        payload: data
    }
}
export const createContentFaliure = (error)=>{
    return{
        type:CREATE_CONTENT_FALIURE,
        payload: error
    }
}
const baseURl = "https://lp-backend-2a1r.onrender.com/api/v1";
export const createPlayist = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(createPlaylistRequest())
        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/lecturer/content/create-course`, poststate,{ headers: headers })
            const data = response
            dispatch(createPlaylistSuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(createPlaylistFaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}

export const createSection = (id, poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(createSectionRequest())
        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/lecturer/content/add-section/${id}`, poststate,{ headers: headers })
            const data = response
            dispatch(createSectionSuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(createSectionFaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}

export const createContent = (id, sectionId, poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(createContentRequest())
        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/lecturer/content/add-content/${id}/${sectionId}`, poststate,{ headers: headers })
            const data = response
            dispatch(createContentSuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(createContentFaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}