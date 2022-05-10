import { ACTION_TYPES } from "../constant/actionTypes";
import { Res_Error,Res_Suc_GetAddress} from "../models/customer-infor";

export const GetAddress = () => ({
    type: ACTION_TYPES.GET_ADDRESS,
});
export const GetAddressSuccess = (data: Res_Suc_GetAddress) => ({
    type: ACTION_TYPES.GET_ADDRESS_SUCCESS,
    payload: {
        lstAddress: data
    }
});
export const GetAddressFailed = (error: Res_Error) => ({
    type: ACTION_TYPES.GET_ADDRESS_FAILED,
    payload: {
        status: error.status,
        message: error.message,
    }
});


