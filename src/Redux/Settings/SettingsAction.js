import { CHANGE_PASSWORD_FALIURE, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS } from "./SettingsType"

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
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZWN0dXJlcklkIjoiNjYwMjgzNjA1MTdlOTA4OTg3OTdiZTRmIiwiZW1haWwiOiJqb2huZG9lMjc4QGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE3MTE0NDA3NTd9.KLJbmkUyJJDt72N-nE8XqqnWkNgD0Rb6EP7tuxNwYLo"


export const changePassword = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(changepasswordrequest())
        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
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
export const changeprofileimage = (poststate, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(audiorequest())

        try{
            let datas = JSON.parse(localStorage.getItem("auth"));
            const headers = {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${token}`,
            };
            console.log("THIS IS POSTSTATE", poststate)
            const response = await axios.post(`${baseURl}student/settings/change-profile-image`, poststate,{ headers: headers })
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