import { AUDIO_REQUEST, AUDIO_SUCCESS, AUDIO_FALIURE, FILE_REQUEST, FILE_FALIURE, FILE_SUCCESS, VIDEO_REQUEST, VIDEO_SUCCESS, VIDEO_FALIURE, FETCH_CONTENT_REQUEST, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_FALIURE, FETCH_SINGLE_CONTENT_REQUEST, FETCH_SINGLE_CONTENT_FALIURE, FETCH_SINGLE_CONTENT_SUCCESS, DELETE_CONTENT_REQUEST, DELETE_CONTENT_SUCCESS, DELETE_CONTENT_FALIURE, EDIT_AUDIO_FALIURE, EDIT_AUDIO_SUCCESS, EDIT_AUDIO_REQUEST, EDIT_FILE_FALIURE, EDIT_FILE_SUCCESS, EDIT_FILE_REQUEST, EDIT_VIDEO_FALIURE, EDIT_VIDEO_SUCCESS, EDIT_VIDEO_REQUEST } from "./ContentType"
import axios from "axios";


//FOR Fetch content
export const fetchcontentrequest = ()=>{
    return{
        type:FETCH_CONTENT_REQUEST
    }
}
export const fetchcontentsuccess = (data)=>{
    return{
        type:FETCH_CONTENT_SUCCESS,
        payload: data
    }
}
export const fetchcontentfaliure = (error)=>{
    return{
        type:FETCH_CONTENT_FALIURE,
        payload: error
    }
}

export const fetchsinglecontentrequest = ()=>{
    return{
        type:FETCH_SINGLE_CONTENT_REQUEST
    }
}
export const fetchsinglecontentsuccess = (data)=>{
    return{
        type:FETCH_SINGLE_CONTENT_SUCCESS,
        payload: data
    }
}
export const fetchsinglecontentfaliure = (error)=>{
    return{
        type:FETCH_SINGLE_CONTENT_FALIURE,
        payload: error
    }
}
export const deletecontentrequest = ()=>{
    return{
        type:DELETE_CONTENT_REQUEST
    }
}
export const deletecontentsuccess = (data)=>{
    return{
        type:DELETE_CONTENT_SUCCESS,
        payload: data
    }
}
export const deletecontentfaliure = (error)=>{
    return{
        type:DELETE_CONTENT_FALIURE,
        payload: error
    }
}
//FOR Audio content
export const audiorequest = ()=>{
    return{
        type:AUDIO_REQUEST
    }
}
export const audiosuccess = (data)=>{
    return{
        type:AUDIO_SUCCESS,
        payload: data
    }
}
export const audiofaliure = (error)=>{
    return{
        type:AUDIO_FALIURE,
        payload: error
    }
}
//FOR Audio content
export const editaudiorequest = ()=>{
    return{
        type:EDIT_AUDIO_REQUEST
    }
}
export const editaudiosuccess = (data)=>{
    return{
        type:EDIT_AUDIO_SUCCESS,
        payload: data
    }
}
export const editaudiofaliure = (error)=>{
    return{
        type:EDIT_AUDIO_FALIURE,
        payload: error
    }
}

//For File content
export const filerequest = ()=>{
    return{
        type:FILE_REQUEST
    }
}
export const filesuccess = (data)=>{
    return{
        type:FILE_SUCCESS,
        payload: data
    }
}
export const filefaliure = (error)=>{
    return{
        type:FILE_FALIURE,
        payload: error
    }
}

//For File content
export const editfilerequest = ()=>{
    return{
        type:EDIT_FILE_REQUEST
    }
}
export const editfilesuccess = (data)=>{
    return{
        type:EDIT_FILE_SUCCESS,
        payload: data
    }
}
export const editfilefaliure = (error)=>{
    return{
        type:EDIT_FILE_FALIURE,
        payload: error
    }
}


//For video content
export const videorequest = ()=>{
    return{
        type:VIDEO_REQUEST
    }
}
export const videosuccess = (data)=>{
    return{
        type:VIDEO_SUCCESS,
        payload: data
    }
}
export const videofaliure = (error)=>{
    return{
        type:VIDEO_FALIURE,
        payload: error
    }
}

//For video content
export const editvideorequest = ()=>{
    return{
        type:EDIT_VIDEO_REQUEST
    }
}
export const editvideosuccess = (data)=>{
    return{
        type:EDIT_VIDEO_SUCCESS,
        payload: data
    }
}
export const editvideofaliure = (error)=>{
    return{
        type:EDIT_VIDEO_FALIURE,
        payload: error
    }
}


const baseURl = "https://lecture-podcast-auth.onrender.com/api/v1";


export const fetchcontent = ( ) => {
    return async (dispatch) => {
        dispatch(fetchcontentrequest())

        let datas = JSON.parse(localStorage.getItem("auth"));
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas.token}`,
        };
        axios.get(`${baseURl}/lecturer/content/all-content`, { headers: headers })
        .then( response => {
            const data = response.data.data
            console.log(data)
            dispatch(fetchcontentsuccess(data))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchcontentfaliure(errorMsg))
        })
       
    }
}

export const deletecontent = (id, history) => {
    return async (dispatch) => {
        dispatch(deletecontentrequest())

        let datas = JSON.parse(localStorage.getItem("auth"));
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas.token}`,
        };
        axios.delete(`${baseURl}/lecturer/content/delete-content?id=${id}`, { headers: headers })
        .then( response => {
            const data = response.data.data
            console.log(data)
            dispatch(deletecontentsuccess(data))
            history()
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(deletecontentfaliure(errorMsg))
        })
       
    }
}

export const fetchsinglecontent = ({id}) => {
    return async (dispatch) => {
        dispatch(fetchsinglecontentrequest())

        let datas = JSON.parse(localStorage.getItem("auth"));
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas.token}`,
        };
        axios.get(`${baseURl}/lecturer/content/single-content?id=${id}`, { headers: headers })
        .then( response => {
            const data = response.data.data
            console.log(data)
            dispatch(fetchsinglecontentsuccess(data))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchsinglecontentfaliure(errorMsg))
        })
       
    }
}

export const createAudio = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(audiorequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${datas.token}`,
            };
            console.log("THIS IS POSTSTATE", poststate)
            const response = await axios.post(`${baseURl}/lecturer/content/upload-audio-content`, poststate,{ headers: headers })
            const data = response
            dispatch(audiosuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(audiofaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}

export const editAudio = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(editaudiorequest())
        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${datas.token}`,
            };
            console.log("THIS IS POSTSTATE", poststate)
            const response = await axios.post(`${baseURl}/lecturer/content/upload-audio-content`, poststate,{ headers: headers })
            const data = response
            dispatch(editaudiosuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(editaudiofaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}

export const createFile = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(filerequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/lecturer/content/upload-file-content`, poststate,{ headers: headers })
            const data = response
            dispatch(filesuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(filefaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}

export const editFile = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(editfilerequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/lecturer/content/upload-file-content`, poststate,{ headers: headers })
            const data = response
            dispatch(editfilesuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(editfilefaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}


export const createvideo = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(videorequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/lecturer/content/upload-video-content`, poststate,{ headers: headers })
            const data = response
            dispatch(videosuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(videofaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}

export const editvideo = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(editvideorequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/lecturer/content/upload-video-content`, poststate,{ headers: headers })
            const data = response
            dispatch(editvideosuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(editvideofaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}
