import RoleConstants from "../constants/RoleConstants";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_START":
      return {
        user: {
          auth: false,
          userRole: RoleConstants.NONE,
        },
        isFetching: true,
      };
    case "REGISTER_SUCCESS":
      return {
        user: {
          auth: false,
          userRole: RoleConstants.NONE,
        }, //Set user role and auth
        isFetching: false,
      };
    case "REGISTER_FAILURE":
      return {
        user: {
          auth: false,
          userRole: RoleConstants.NONE,
        },
        isFetching: false,
      };

    case "LOGIN_START":
      return {
        user: {
          auth: false,
          userRole: RoleConstants.NONE,
        },
        isFetching: true,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload, //Set user role and auth
        isFetching: false,
      };
    case "RESUME_UPLOAD_SUCCESS":
      return {
        user: action.payload, //Set user role and auth
        isFetching: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: {
          auth: false,
          userRole: RoleConstants.NONE,
        },
        isFetching: false,
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (following) => following !== action.payload
          ),
        },
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        user: {
          auth: false,
          userRole: RoleConstants.NONE,
        },
        isFetching: false,
      };
    case "POST_JOB_START":
      return {
        ...state,
        isFetching: true,
      };
    case "POST_JOB_SUCCESS":
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
