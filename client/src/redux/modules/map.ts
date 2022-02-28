import { Action, createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import MapService from '../../services/MapService';
import { MapState, MapCenterType, UserInfoType } from '../../types';

const initialState: MapState = {
  friends: [],
  aroundUsers: [],
  loading: false,
  error: null,
};

const prefix = 'RANJA/map';

export const { pending, success, failure } = createActions('PENDING', 'SUCCESS', 'FAILURE', { prefix });

const reducer = handleActions<MapState, UserInfoType[] | null>(
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
        aroundUsers: payload ?? [],
      };
    },
    FAILURE: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

// saga
export const { getAround } = createActions('GET_AROUND', { prefix });

function* getAroundSaga(action: Action<MapCenterType>) {
  try {
    yield put(pending());
    const data: UserInfoType[] = yield call(MapService.getAround, action.payload);
    yield put(success(data));
  } catch (err: any) {
    yield put(failure(err?.response?.data || 'UNKNOWN ERROR'));
  }
}

export function* mapSaga() {
  yield takeLatest(`${prefix}/GET_AROUND`, getAroundSaga);
}
