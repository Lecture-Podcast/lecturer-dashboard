import {combineReducers} from 'redux';
import { profileReducer } from './Profile/ProfileReducer';
import { audioReducer, fileReducer, videoReducer } from './Content/ContentReducer';



const rootReducer = combineReducers({
    profile:profileReducer,
    createAudio: audioReducer,
    createFile: fileReducer,
    createVideo: videoReducer
})

export default rootReducer;