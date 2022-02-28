/* Auth Redux */
export interface AuthState extends RequestState {
  token: string | null;
  user: UserInfoType | null;
  loading: boolean;
  error: Error | null;
}

export interface LoginReqType {
  email: string;
  password: string;
}
export interface UserInfoType {
  username: string;
  email: string;
  profileImg: string;
  location: {
    type: 'Point';
    coordinates: number[];
  };
  desc?: string;
  friendList: string[];
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
export interface MapState extends RequestState {
  friends: UserInfoType[];
  aroundUsers: UserInfoType[];
  // center: MapCenterType;
}
export interface MarkerType extends UserInfoType {
  lat: number;
  lng: number;
  time: Date;
}

export interface MapCenterType {
  lat: number;
  lng: number;
}

/*  리덕스 타입  */
export interface RootState {
  auth: AuthState;
  map: MapState;
  // router: Reducer<RouterState<unknown>, AnyAction>;
}

interface RequestState {
  loading: boolean;
  error: Error | null;
}

/* Mypage */
export interface FriendRequestType {
  id: string;
  email: string;
  profileImg: string;
  username: string;
  isAccept?: boolean;
}
