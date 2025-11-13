import { userActions } from "./user-slice";
import { axiosInstance } from "../../utils/axios";
export const getSignup = (user) => async (dispatch) => {
    try{
        dispatch(userActions.getSignupRequest());
        const {data}=await axiosInstance.post("/v1/rent/user/signup",user);
        dispatch(userActions.getSignupDetails(data.user))
    }
    catch(error){
        dispatch(userActions.getError(error.response?.data?.message || error.message || "Signup failed"));
    }
}

export const getLogin = (user) => async (dispatch) => {
    try{
        dispatch(userActions.getLoginRequest());
        const {data}=await axiosInstance.post("/v1/rent/user/login",user);
        dispatch(userActions.getLoginDetails(data.user))
    }
    catch(error){
        dispatch(userActions.getError(error.response?.data?.message || error.message || "Login failed"));
    }
}

export const currentUser = () => async (dispatch) => {
    try{
        dispatch(userActions.getCurrentUserRequest());
        const {data}=await axiosInstance.get("/v1/rent/user/me");
        dispatch(userActions.getCurrentUser(data.user))
    }
    catch(error){
        dispatch(userActions.getError(error.response?.data?.message || error.message || "Fetch current user failed"));

    }
}
export const updateUser = (updateUser) => async (dispatch) => {
    try{
        dispatch(userActions.getUpdateUserRequest());
        const response = await axiosInstance.patch("/v1/rent/user/updateMe",updateUser);
        console.log("Update successful:",response.data);
        const {data}=await axiosInstance.get("/v1/rent/user/me");
        dispatch(userActions.getCurrentUser(data.user))
    }
    catch(error){
        dispatch(userActions.getError(error.response?.data?.message || error.message || "Update user failed"));

    }
}

export const forgotPassword = (email) => async (dispatch) => {
    try{
        await axiosInstance.post("/v1/rent/user/forgotPassword",{email});
    }
    catch(error){
        dispatch(userActions.getError(error.response?.data?.message || error.message || "Forgot password failed"));

    }
}

export const resetPassword = (repassword,token) => async (dispatch) => {
    try{
        await axiosInstance.patch(`/v1/rent/user/resetPassword/${token}`,repassword);
    }
    catch(error){
        dispatch(userActions.getError(error.response?.data?.message || error.message || "Reset password failed"));
    }
}

export const updatePassword = (passwords) => async (dispatch) => {
    try{
        dispatch(userActions.getPasswordRequest());
        await axiosInstance.patch("/v1/rent/user/updatedMyPassword",passwords);
        dispatch(userActions.getPasswordSucess(true));
    }
    catch(error){
        dispatch(userActions.getError(error.response?.data?.message || error.message || "Update password failed"));

    }
}

export const logout = () => async (dispatch) => {
    try{
        await axiosInstance.get("/v1/rent/user/logout");
        dispatch(userActions.getLogout(null));
    }
    catch(error){
        dispatch(userActions.getError(error.response?.data?.message || error.message || "Logout failed"));

    }
}