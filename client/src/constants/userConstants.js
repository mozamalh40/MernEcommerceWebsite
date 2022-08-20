//for login
export const LOGIN_REQUEST="LOGIN_REQUEST"
export const LOGIN_SUCCESS="LOGIN_SUCCESS"
export const LOGIN_FAIL="LOGIN_FAIL"

//register
export const register_REQUEST="register_REQUEST"
export const register_SUCCESS="register_SUCCESS"
export const register_FAIL="register_FAIL"
//jb refresh karen toh redux ki state empty ho rahi thi us k liya mtlb user logout ho raha tha
// or is ma user kin details milti haa apni
export const LOAD_USER_REQUEST="LOAD_USER_REQUEST"
export const LOAD_USER_SUCCESS="LOAD_USER_SUCCESS"
export const LOAD_USER_FAIL="LOAD_USER_FAIL"

//for logout
export const LOGOUT_SUCCESS="LOGOUT_SUCCESS"
export const LOGOUT_FAIL="LOGOUT_REQUEST"

// for update user
export const UPDATE_PROFILE_REQUEST="UPDATE_PROFILE_REQUEST"
export const UPDATE_PROFILE_SUCCESS="UPDATE_PROFILE_SUCCESS"
export const UPDATE_PROFILE_RESET="UPDATE_PROFILE_RESET"
export const UPDATE_PROFILE_FAIL="UPDATE_PROFILE_FAIL"

///update the password

export const UPDATE_PASSWORD_REQUEST="UPDATE_PASSWORD_REQUEST"
export const UPDATE_PASSWORD_SUCCESS="UPDATE_PASSWORD_SUCCESS"
export const UPDATE_PASSWORD_RESET="UPDATE_PASSWORD_RESET"
export const UPDATE_PASSWORD_FAIL="UPDATE_PASSWORD_FAIL"

// forgot password
export const FORGOT_PASSWORD_REQUEST="FORGOT_PASSWORD_REQUEST"
export const FORGOT_PASSWORD_SUCCESS="FORGOT_PASSWORD_SUCCESS"
export const FORGOT_PASSWORD_FAIL="FORGOT_PASSWORD_FAIL"
//reset passwrd
export const RESET_PASSWORD_REQUEST="RESET_PASSWORD_REQUEST"
export const RESET_PASSWORD_SUCCESS="RESET_PASSWORD_SUCCESS"
export const RESET_PASSWORD_FAIL="RESET_PASSWORD_FAIL"


//admin
export const ALL_USERS_REQUEST = "ALL_USERS_REQUEST";
export const ALL_USERS_SUCCESS = "ALL_USERS_SUCCESS";
export const ALL_USERS_FAIL = "ALL_USERS_FAIL";
//single user details
export const USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAIL = "USER_DETAILS_FAIL";
//for user update
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_RESET = "UPDATE_USER_RESET";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";
//for user delete
export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";
export const DELETE_USER_RESET = "DELETE_USER_RESET";
//for error handle
export const CLEAR_ERRORS="CLEAR_ERRORS"