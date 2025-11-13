import { accomodationActions } from "./Accomodation-slice";
import {axiosInstance} from "../../utils/axios";

export const createAccomodation = (accomodationData) => async (dispatch) => {
    try {
        dispatch(accomodationActions.getAccomodationRequest());
        const response = await axiosInstance.post("api/v1/rent/user/newAccomodation", accomodationData);
        if (!response) {
            throw new Error("Could not create accommodation");
        }
        const { data } = response.data;
        dispatch(accomodationActions.getAccomodationSuccess(data));
        return data;
    } catch (error) {
        console.error('Accommodation creation error:', error);
        const errorMessage = error.response?.data?.message || error.message || "Failed to create accommodation";
        dispatch(accomodationActions.getErrors(errorMessage));
        throw new Error(errorMessage);
    }
}

export const getAllAccomodation = () => async (dispatch) => {
    try {
        dispatch(accomodationActions.getAccomodationRequest());
        const response = await axiosInstance.get("/v1/rent/user/myAccommodation");
        if (!response || !response.data) {
            throw new Error("Could not fetch accommodations");
        }
        const accommodations = response.data.data;
        dispatch(accomodationActions.getAccomodation(accommodations))
    }
    catch(error){
        dispatch(accomodationActions.getErrors(error.response.data.message));
    }
}