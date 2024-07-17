import {combineReducers} from 'redux';
import { profileReducer } from './Profile/ProfileReducer';
import { audioReducer, deletecontentReducer, editaudioReducer, editfileReducer, editvideoReducer, fetchcontentReducer, fileReducer, videoReducer } from './Content/ContentReducer';
import usersSlice from './usersAuth/usersSlice';
import { changeprofileimageReducer } from './Settings/SettingReducer';
import { verifyReducer } from './Verify/verifyReducer';



const rootReducer = combineReducers({
    profile:profileReducer,
    content:fetchcontentReducer,
    deletecontent: deletecontentReducer,
    createAudio: audioReducer,
    editAudio: editaudioReducer,
    createFile: fileReducer,
    editFile: editfileReducer,
    createVideo: videoReducer,
    editVideo: editvideoReducer,
    auth: usersSlice,
    changeprofileimage: changeprofileimageReducer,
    verify:verifyReducer,
})

export default rootReducer;