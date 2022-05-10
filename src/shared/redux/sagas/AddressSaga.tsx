import axios from 'axios';
import {
  all,
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import {GetAddressSuccess, GetAddressFailed} from '../actions/actions';
import {ACTION_TYPES} from '../constant/actionTypes';
import {AddressUrl} from '../constant/addressUrl';

const addressReducer = (state: any) => state.AddressReducer;
const getProvincesData = () => {
  axios.get(AddressUrl.Province ).then(response => {
   
  });
};
const getDistrictData = () => {
  axios.get(AddressUrl.District).then(data => {
   
  });
};
const getWardData = () => {
  axios.get(AddressUrl.Ward).then(data => {
    
  });
};
function* fetchAddress(action: any) {
  try {
    console.log('VAO DAY ROI');
    const addressData = yield select(addressReducer);
    if (
      !addressData ||
      !addressData.provinces ||
      !addressData.districts ||
      !addressData.wards
    ) {
      console.log('ko du lieu')
      const provinces = yield call(getProvincesData);
      const districts = yield call(getDistrictData);
      const wards = yield call(getWardData);
      if (provinces && districts && wards) {
        yield put(GetAddressSuccess({provinces, districts, wards}));
      }
    } else {
      yield put(GetAddressSuccess(addressData));
      console.log('co du lieu')
    }
  } catch (error) {
    console.log(error);
    yield put(GetAddressFailed(error));
  } finally {
  }
}

function* listen() {
  yield takeLatest(ACTION_TYPES.GET_ADDRESS, fetchAddress);
}

export default function* () {
  yield all([listen()]);
}
