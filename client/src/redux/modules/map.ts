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

export const { pending, success, failure, update } = createActions('PENDING', 'SUCCESS', 'FAILURE', 'UPDATE', {
  prefix,
});

const reducer = handleActions<MapState, { isFriend: boolean; data: UserInfoType[] }>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => {
      const {
        payload: { isFriend, data },
      } = action;
      return {
        ...state,
        loading: false,
        error: null,
        ...(!isFriend && { aroundUsers: data }),
        ...(isFriend && { friends: data }),
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
  },
  initialState,
  { prefix },
);

export default reducer;

// saga
export const { getAround, getFriends } = createActions('GET_AROUND', 'GET_FRIENDS', { prefix });

function* getAroundSaga(action: Action<MapCenterType>) {
  try {
    yield put(pending());
    const data: UserInfoType[] = yield call(MapService.getAround, action.payload);
    yield put(success({ data, isFriend: false }));
  } catch (err: any) {
    yield put(failure(err?.response?.data || 'UNKNOWN ERROR'));
  }
}

// function* getFriendsSaga() {
//   try {
//     yield put(pending());
//     const data: UserInfoType[] = yield call(MapService.getFriends);
//     yield put(success({ data, isFriend: true }));
//   } catch (err: any) {
//     yield put(failure(err?.response?.data || 'UNKNOWN ERROR'));
//   }
// }

export function* mapSaga() {
  yield takeLatest(`${prefix}/GET_AROUND`, getAroundSaga);
  // yield takeEvery(`${prefix}/GET_FRIENDS`, getFriendsSaga);
}
