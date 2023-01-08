
import { LatLngExpression } from 'leaflet';
import { call, put, takeEvery } from 'redux-saga/effects'
import { getPolyline } from '../../api/api';
import { setPolyline } from '../slices/coordinatesSlice';
import { sagaActions } from './sagaActions';

function* workerSaga() {
  const coordinates: LatLngExpression[] = yield call(getPolyline);
  yield put(setPolyline(coordinates));
};

export function* watcherSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, workerSaga);
};