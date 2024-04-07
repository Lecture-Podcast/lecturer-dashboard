
import axios from "axios";
import { VERIFY_FALIURE, VERIFY_REQUEST, VERIFY_SUCCESS } from "./verifyTypes";

export const profilerequest = ()=>{
    return{
        type:VERIFY_REQUEST
    }
}
export const profilesuccess = (data)=>{
    return{
        type:VERIFY_SUCCESS,
        payload: data
    }
}
export const profilefaliure = (error)=>{
    return{
        type:VERIFY_FALIURE,
        payload: error
    }
}

const baseURl = "https://lecture-podcast-auth.onrender.com/api/v1/auth";
export const verifyprofile = (token) => {
    return async (dispatch) => {
        dispatch(profilerequest())

        let datas = JSON.parse(localStorage.getItem("auth"));
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas.token}`,
        };
        axios.get(`${baseURl}/lecturer/verify-email?token=${token}`, { headers: headers })
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