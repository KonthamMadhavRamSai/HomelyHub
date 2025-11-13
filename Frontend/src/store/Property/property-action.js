import { propertyAction } from "./property-slice";
import { axiosInstance } from "../../utils/axios";

// In-flight request dedupe map keyed by serialized search params. This
// prevents duplicate network calls when multiple components request the
// same property list concurrently (e.g., StrictMode double-mount).
const inflightRequests = new Map();

export const getAllProperties = () => async (dispatch, getState) => {
    try {
        dispatch(propertyAction.getRequest());
        const { searchParams } = getState().properties;
        const key = JSON.stringify(searchParams || {});

        // If an identical request is already in flight, reuse its promise.
        if (inflightRequests.has(key)) {
            const existing = inflightRequests.get(key);
            const data = await existing;
            dispatch(propertyAction.getProperties(data));
            return;
        }

        const reqPromise = (async () => {
                const response = await axiosInstance.get(`/v1/rent/listing`, {
                    params: { ...searchParams },
                });
                if (!response) {
                    throw new Error("Could not fetch properties");
                }
                // Debug: optionally log response shape when VITE_DEBUG_API is set
                if (import.meta.env.VITE_DEBUG_API) {
                    try {
                        console.log('getAllProperties - raw response:', response);
                    } catch (e) {
                        /* ignore logging errors */
                    }
                }
                // `response` may be { data: ... } or the axios response; normalize
                const data = response.data ?? response;
                return data;
            })();

        inflightRequests.set(key, reqPromise);

        try {
            const data = await reqPromise;
            dispatch(propertyAction.getProperties(data));
        } finally {
            inflightRequests.delete(key);
        }
    } catch (error) {
        dispatch(propertyAction.getErrors(error.message));
    }
};