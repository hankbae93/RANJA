export interface FriendInfoType {
  address: string;
  username: string;
  hasFriend: number;
  isFriend: boolean;
  homeLink: string;
  image: string;
  introduce: string;
}

export interface LoginReqType {
  email: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  user: object | null;
  loading: boolean;
  error: Error | null;
}

export interface RootState {
  auth: AuthState;

  // router: Reducer<RouterState<unknown>, AnyAction>;
}
