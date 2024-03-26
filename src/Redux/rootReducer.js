import { combineReducers } from "redux";
import { profileReducer } from "./Profile/ProfileReducer";
import {
  audioReducer,
  fileReducer,
  videoReducer,
} from "./Content/ContentReducer";
import { overlayReducer } from "./overlay/reducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  createAudio: audioReducer,
  createFile: fileReducer,
  createVideo: videoReducer,
  overlay: overlayReducer,
});

export default rootReducer;
