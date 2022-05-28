import axios from 'axios';
import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import {GetAddressSuccess, GetAddressFailed} from '../actions/actions';
import {ACTION_TYPES} from '../constant/actionTypes';
import {AddressUrl} from '../constant/addressUrl';
import realm from '../../realm/realm-utils';

const getProvincesData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(AddressUrl.Province)
      .then(response => {
        if (response?.data) resolve(response?.data);
        else reject(null);
      })
      .catch(err => {
        reject(err);
      });
  });
};
const getDistrictData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(AddressUrl.District)
      .then(data => {
        if (data?.data) resolve(data?.data);
        else reject(null);
      })
      .catch(err => {
        reject(err);
      });
  });
};
const getWardData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(AddressUrl.Ward)
      .then(data => {
        if (data?.data) resolve(data?.data);
        else reject(null);
      })
      .catch(e => {
        reject(e);
      });
  });
};

function* fetchAddress(action: any) {
  try {
    const oldProvinces = yield call(realm.getProvinces); // (trong saga) yield call <=> await

    const oldDistricts = yield call(realm.getDistricts);

    const oldWards = yield call(realm.getWards);

    const addressData = {oldDistricts, oldProvinces, oldWards};

    if (!oldDistricts || !oldProvinces || !oldWards) {
      const provinces = yield call(getProvincesData);
      realm.saveProvinces(provinces);

      const districts = yield call(getDistrictData);
      realm.saveDistricts(districts);

      const wards = yield call(getWardData);
      realm.saveWards(wards);

      if (provinces && districts && wards) {
        console.log('vao day');
        yield put(GetAddressSuccess({provinces, districts, wards}));
      }
    } else {
      console.log('co du lieu day roi', addressData);
      yield put(GetAddressSuccess(addressData));
    }
  } catch (error) {
    console.log('ERROR', error);
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
