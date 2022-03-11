import { Action, createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'redux-first-history';
import { UserService } from '../../services';
import { LoginReqType, AuthState, UserInfoType } from '../../types';
import { initialize as mapInitialize } from './map';

const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

const prefix = 'RANJA/auth';

export const { pending, success, failure, initialize } = createActions('PENDING', 'SUCCESS', 'FAILURE', 'INITIALIZE', {
  prefix,
});

const reducer = handleActions<AuthState, UserInfoType | null>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => {
      const { payload } = action;
      return {
        token: null,
        user: payload,
        loading: false,
        error: null,
      };
    },
    FAILURE: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    INITIALIZE: (state) => initialState,
  },
  initialState,
  { prefix },
);

export default reducer;

// saga
export const { login, logout, loadMyInfo } = createActions('LOGIN', 'LOGOUT', 'LOAD_MY_INFO', { prefix });

function* loginSaga(action: Action<LoginReqType>) {
  try {
    yield put(pending());
    const userInfo: object = yield call(UserService.login, action.payload);
    yield put(success(userInfo));
    yield put(push('/'));
  } catch (err: any) {
    yield put(failure(err?.response?.data || 'UNKNOWN ERROR'));
  }
}

function* logoutSaga() {
  try {
    yield put(pending());
    yield call(UserService.logout);
    yield put(initialize());
    yield put(mapInitialize());
    yield put(push('/'));
  } catch (err: any) {
    yield put(failure(err?.response?.data || 'UNKNOWN ERROR'));
  }
}

function* loadMyInfoSaga() {
  try {
    yield put(pending());
    const userInfo: object | null = yield call(UserService.loadMyInfo);
    yield put(success(userInfo));
    if (!userInfo) {
      yield put(push('/login'));
    }
  } catch (err: any) {
    yield put(failure(err?.response?.data || 'UNKNOWN ERROR'));
  }
}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
  yield takeEvery(`${prefix}/LOAD_MY_INFO`, loadMyInfoSaga);
}
