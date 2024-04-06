import {combineReducers} from 'redux';
import { profileReducer } from './Profile/ProfileReducer';
import { audioReducer, fetchcontentReducer, fileReducer, videoReducer } from './Content/ContentReducer';
import usersSlice from './usersAuth/usersSlice';



const rootReducer = combineReducers({
    profile:profileReducer,
    content:fetchcontentReducer,
    createAudio: audioReducer,
    createFile: fileReducer,
    createVideo: videoReducer,
    auth: usersSlice
})

export default rootReducer;