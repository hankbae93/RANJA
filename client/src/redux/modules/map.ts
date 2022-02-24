import { Action, createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { MapState, UserInfoType } from '../../types';

const initialState: MapState = {
  friends: [],
  aroundUsers: [],
};

const prefix = 'RANJA/map';
export const { update } = createActions('UPDATE', { prefix });

const reducer = handleActions<MapState, UserInfoType | null>(
  {
    UPDATE: (state, action: any) => ({
      ...state,
      friends: action.payload,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

export const { friendUpdate, logout, loadMyInfo } = createActions('FRIEND_UPDATE', { prefix });
