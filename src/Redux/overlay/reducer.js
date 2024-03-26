const initialState = {
  overlay: false,
};

// FOR Audio Content
export const overlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_OVERLAY":
      return {
        ...state,
        overlay: action.payload,
      };
    default:
      return state;
  }
};
