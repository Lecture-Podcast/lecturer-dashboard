import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FALIURE } from "./ProfileTypes"
import axios from "axios";

export const profilerequest = ()=>{
    return{
        type:PROFILE_REQUEST
    }
}
export const profilesuccess = (data)=>{
    return{
        type:PROFILE_SUCCESS,
        payload: data
    }
}
export const profilefaliure = (error)=>{
    return{
        type:PROFILE_FALIURE,
        payload: error
    }
}

const baseURl = "https://lecture-podcast-auth.onrender.com/api/v1/auth";
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZWN0dXJlcklkIjoiNjViY2IxNmI1NjU1ZjVjODI1MDlhNTM3IiwiZW1haWwiOiJqb2huZG9lMUBnbWFpbC5jb20iLCJmdWxsbmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzExMDU0NjIyfQ.2Zx40N_-7Y5gF0wnFRIJye6S7MMaFdWM-WMirWL471E"
export const fetchprofile = ( ) => {
    return async (dispatch) => {
        dispatch(profilerequest())

        let datas = JSON.parse(localStorage.getItem("auth"));
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        };
        axios.get(`${baseURl}/lecturer-profile`, { headers: headers })
        .then( response => {
            const data = response.data
            dispatch(profilesuccess(data))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(profilefaliure(errorMsg))
        })
       
    }
}