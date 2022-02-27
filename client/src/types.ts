export interface LoginReqType {
  email: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  user: UserInfoType | null;
  loading: boolean;
  error: Error | null;
}

export interface MapState {
  friends: UserInfoType[];
  aroundUsers: UserInfoType[];
}

export interface UserInfoType {
  username: string;
  email: string;
  profileImg: string;
  location: number[];
  desc?: string;
  friendList: string[];
}

export interface RootState {
  auth: AuthState;
  map: MapState;
  // router: Reducer<RouterState<unknown>, AnyAction>;
}

// 회원가입 types
export interface FormDataType {
  [index: string]: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface InputDefaultTypes {
  keyId: number;
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  pattern?: string;
  placeholder?: string;
  errorMessage?: string;
}

// map
export interface MarkerType extends UserInfoType {
  lat: number;
  lng: number;
  time: Date;
}
