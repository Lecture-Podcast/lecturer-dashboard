const usersAuth = {
  isLoggedIn: null,
  isSignedUp: null,
  isloggedOut: null,
  userDetails: null,
  message: "",
  // phone: ""
};

function usersSlice(state = usersAuth, action) {
  switch (action.type) {
    case "user/login":
      return {
        ...state,
        isLoggedIn: true,
        userDetails: action.payload,
        message: action.payload?.error?.message
      };

    case "user/signup":
      return {
        ...state,
        isSignedUp: true,
        userDetails: action.payload,
        message: action.payload?.error?.message
        // phone: 
      };

    case "user/logout":
      return {
        ...state,
        isloggedOut: true
      };

    default:
      return state;
  }
}

export default usersSlice;
