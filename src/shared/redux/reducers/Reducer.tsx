import { ACTION_TYPES } from "../constant/actionTypes";

const initialState = {
    loading_province: false,
    lstProvince: null,
    loading_district: false,
    lstDistrict: null,
    loading_ward: false,
    lstWard: null,
    status: '',
    message: '',
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        // danh sach tinh thanh
        case ACTION_TYPES.GET_CITY:
            return {
                ...state,
                loading_province: true
            };
        case ACTION_TYPES.GET_CITY_SUCCESS:
            return {
                ...state,
                loading_province: false,
                lstProvince: action.payload.lstProvince,
            };
        case ACTION_TYPES.GET_CITY_FAILED:
            return {
                ...state,
                loading_province: false,
                status: action.payload.status,
                message: action.payload.message,
            };
        // danh sach quan huyen
        case ACTION_TYPES.GET_DISTRICT:
            return {
                ...state,
                loading_district: true,
                lstDistrict: []
            };
        case ACTION_TYPES.GET_DISTRICT_SUCCESS:
            return {
                ...state,
                loading_district: false,
                lstDistrict: action.payload.lstDistrict,
            };
        case ACTION_TYPES.GET_DISTRICT_FAILED:
            return {
                ...state,
                loading_district: false,
                lstDistrict: [],
                status: action.payload.status,
                message: action.payload.message,
            };
        // danh sach phuong xa
        case ACTION_TYPES.GET_WARD:
            return {
                ...state,
                loading_ward: true,
                lstWard: []
            };
        case ACTION_TYPES.GET_WARD_SUCCESS:
            return {
                ...state,
                loading_ward: false,
                lstWard: action.payload.lstWard,
            };
        case ACTION_TYPES.GET_WARD_FAILED:
            return {
                ...state,
                loading_ward: false,
                lstWard: [],
                status: action.payload.status,
                message: action.payload.message,
            };
        default:
            return state;
    }
};