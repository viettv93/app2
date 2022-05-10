import { all, fork } from 'redux-saga/effects';
import AddressSaga from './AddressSaga';


export default function* rootSaga() {
    yield all([fork(AddressSaga)]);
  }