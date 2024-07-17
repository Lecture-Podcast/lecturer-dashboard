import axios from "axios"
import { CHANGE_PASSWORD_FALIURE, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PROFILE_IMAGE_FALIURE, CHANGE_PROFILE_IMAGE_REQUEST, CHANGE_PROFILE_IMAGE_SUCCESS, UPDATE_PROFILE_FALIURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "./SettingsType"

//For video content
export const changepasswordrequest = ()=>{
    return{
        type:CHANGE_PASSWORD_REQUEST
    }
}
export const changepasswordsuccess = (data)=>{
    return{
        type:CHANGE_PASSWORD_SUCCESS,
        payload: data
    }
}
export const changepasswordfaliure = (error)=>{
    return{
        type:CHANGE_PASSWORD_FALIURE,
        payload: error
    }
}
export const updateprofilerequest = ()=>{
    return{
        type:UPDATE_PROFILE_REQUEST
    }
}
export const updateprofilesuccess = (data)=>{
    return{
        type:UPDATE_PROFILE_SUCCESS,
        payload: data
    }
}
export const updateprofilefaliure = (error)=>{
    return{
        type:UPDATE_PROFILE_FALIURE,
        payload: error
    }
}


export const changeprofileimagerequest = ()=>{
    return{
        type:CHANGE_PROFILE_IMAGE_REQUEST
    }
}
export const changeprofileimagesuccess = (data)=>{
    return{
        type:CHANGE_PROFILE_IMAGE_SUCCESS,
        payload: data
    }
}
export const changeprofileimagefaliure = (error)=>{
    return{
        type:CHANGE_PROFILE_IMAGE_FALIURE,
        payload: error
    }
}


const baseURl = "https://lecture-podcast-auth.onrender.com/api/v1";



export const changePassword = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(changepasswordrequest())
        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "application/json",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/student/settings/change-password`, poststate,{ headers: headers })
            const data = response
            dispatch(changepasswordsuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(changepasswordfaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}

export const updateprofile = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(updateprofilerequest())
        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "application/json",
                authorization: `Bearer ${datas.token}`,
            };
            const response = await axios.post(`${baseURl}/lecturer/settings/update-details`, poststate,{ headers: headers })
            const data = response
            dispatch(updateprofilesuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(updateprofilefaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}
export const changeprofileimage = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(changeprofileimagerequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${datas.token}`,
            };
            console.log("THIS IS POSTSTATE", poststate)
            const response = await axios.post(`${baseURl}/lecturer/settings/change-profile-image`, poststate,{ headers: headers })
            const data = response
            dispatch(changeprofileimagesuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error){
            const errormsg = error.message
            dispatch(changeprofileimagefaliure(errormsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}