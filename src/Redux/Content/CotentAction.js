import { AUDIO_REQUEST, AUDIO_SUCCESS, AUDIO_FALIURE, FILE_REQUEST, FILE_FALIURE, FILE_SUCCESS, VIDEO_REQUEST, VIDEO_SUCCESS, VIDEO_FALIURE, FETCH_CONTENT_REQUEST, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_FALIURE, FETCH_SINGLE_CONTENT_REQUEST, FETCH_SINGLE_CONTENT_FALIURE, FETCH_SINGLE_CONTENT_SUCCESS } from "./ContentType"
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

const baseURl = "https://lecture-podcast-auth.onrender.com/api/v1";
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZWN0dXJlcklkIjoiNjYwMjgzNjA1MTdlOTA4OTg3OTdiZTRmIiwiZW1haWwiOiJqb2huZG9lMjc4QGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE3MTE0NDA3NTd9.KLJbmkUyJJDt72N-nE8XqqnWkNgD0Rb6EP7tuxNwYLo"


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