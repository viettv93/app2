import { ACTION_TYPES } from "../constant/actionTypes";

const initialState = {
    loading_address: false,
    lstProvince: null,
    lstDistrict: null,
    lstWard: null,
    status: '',
    message: '',
};

export default (state = initialState, action: any) => {
    switch (action.type) {
       
        case ACTION_TYPES.GET_ADDRESS:
            return {
                ...state,
                loading_address: true,
            };
        case ACTION_TYPES.GET_ADDRESS_SUCCESS:
            return {
                ...state,
                loading_address: false,
                lstProvince: action.payload.provinces,
                lstDistrict:action.payload.districts,
                lstWard:action.payload.wards
            };
        case ACTION_TYPES.GET_ADDRESS_FAILED:
            return {
                ...state,
                loading_address: false,
                status: action.payload.status,
                message: action.payload.message,
            };
        
        default:
            return state;
    }
};