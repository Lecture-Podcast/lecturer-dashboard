import {combineReducers} from 'redux';
import { profileReducer } from './Profile/ProfileReducer';
import { audioReducer, fetchcontentReducer, fileReducer, videoReducer } from './Content/ContentReducer';
import usersSlice from './usersAuth/usersSlice';
import { changeprofileimageReducer } from './Settings/SettingReducer';
import { verifyReducer } from './Verify/verifyReducer';



const rootReducer = combineReducers({
    profile:profileReducer,
    content:fetchcontentReducer,
    createAudio: audioReducer,
    createFile: fileReducer,
    createVideo: videoReducer,
    auth: usersSlice,
    changeprofileimage: changeprofileimageReducer,
    verify:verifyReducer,
})

export default rootReducer;