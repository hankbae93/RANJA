import { Action, createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import MapService from '../../services/MapService';
import { MapState, MapCenterType, UserInfoType } from '../../types';

const initialState: MapState = {
  aroundUsers: [],
  center: {
    lat: 0,
    lng: 0,
  },
  loading: false,
  error: null,
};

const prefix = 'RANJA/map';

export const { pending, success, failure, update, initialize } = createActions(
  'PENDING',
  'SUCCESS',
  'FAILURE',
  'UPDATE',
  'INITIALIZE',
  {
    prefix,
  },
);

const reducer = handleActions<MapState, UserInfoType[]>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        error: null,
        aroundUsers: payload,
      };
    },
    FAILURE: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    UPDATE: (state, action: any) => ({
      ...state,
      center: {
        lat: action.payload.lat ?? state.center.lat,
        lng: action.payload.lng ?? state.center.lng,
      },
    }),
    INITIALIZE: (state) => initialState,
  },
  initialState,
  { prefix },
);

export default reducer;

// saga
export const { getAround, getAroundAuth } = createActions('GET_AROUND', 'GET_AROUND_AUTH', { prefix });

function* getAroundSaga(action: Action<MapCenterType>) {
  try {
    yield put(pending());
    const data: UserInfoType[] = yield call(MapService.getAroundNormal, action.payload);
    yield put(success(data));
  } catch (err: any) {
    console.log(err);
    yield put(failure(err?.response?.data || 'UNKNOWN ERROR'));
  }
}

function* getAroundAuthSaga(action: Action<MapCenterType>) {
  try {
    yield put(pending());
    const data: UserInfoType[] = yield call(MapService.getAroundAuth, action.payload);
    yield put(success(data));
  } catch (err: any) {
    console.log(err);
    yield put(failure(err?.response?.data || 'UNKNOWN ERROR'));
  }
}

export function* mapSaga() {
  yield takeEvery(`${prefix}/GET_AROUND`, getAroundSaga);
  yield takeEvery(`${prefix}/GET_AROUND_AUTH`, getAroundAuthSaga);
}
