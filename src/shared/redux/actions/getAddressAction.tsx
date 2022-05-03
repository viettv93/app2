import { ACTION_TYPES } from "../constant/actionTypes";
import { Res_Error,Res_Suc_GetCity,Res_Suc_GetDistrict,Res_Suc_GetWard } from "../models/customer-infor";
// lay danh sach tinh thanh
export const GetCity = () => ({
    type: ACTION_TYPES.GET_CITY,
});
export const GetCitySuccess = (data: Res_Suc_GetCity) => ({
    type: ACTION_TYPES.GET_CITY_SUCCESS,
    payload: {
        lstProvince: data.data
    }
});
export const GetCityFailed = (error: Res_Error) => ({
    type: ACTION_TYPES.GET_CITY_FAILED,
    payload: {
        status: error.status,
        message: error.message,
    }
});

// lay danh sach quan huyen
export const GetDistrict = () => ({
    type: ACTION_TYPES.GET_DISTRICT,
});
export const GetDistrictSuccess = (data: Res_Suc_GetDistrict) => ({
    type: ACTION_TYPES.GET_DISTRICT_SUCCESS,
    payload: {
        lstDistrict: data.data
    }
});
export const GetDistrictFailed = (error: Res_Error) => ({
    type: ACTION_TYPES.GET_DISTRICT_FAILED,
    payload: {
        status: error.status,
        message: error.message,
    }
});

// lay danh sach phuong xa
export const GetWard = () => ({
    type: ACTION_TYPES.GET_WARD,
});
export const GetWardSuccess = (data: Res_Suc_GetWard) => ({
    type: ACTION_TYPES.GET_WARD_SUCCESS,
    payload: {
        lstWard: data.data
    }
});
export const GetWardFailed = (error: Res_Error) => ({
    type: ACTION_TYPES.GET_WARD_FAILED,
    payload: {
        status: error.status,
        message: error.message,
    }
});