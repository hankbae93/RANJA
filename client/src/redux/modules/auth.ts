import { Action, createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'redux-first-history';
import UserService from '../../services/UserService';
import { LoginReqType, AuthState } from '../../types';

const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

const prefix = 'RANJA/auth';

export const { pending, success, failure } = createActions('PENDING', 'SUCCESS', 'FAILURE', { prefix });

const reducer = handleActions<AuthState, object | null>(
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
  },
  initialState,
  { prefix },
);

export default reducer;

// saga
export const { login, logout } = createActions('LOGIN', 'LOGOUT', { prefix });

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

// function* logoutSaga() {}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  // yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
