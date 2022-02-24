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
  user: UserInfoType | null;
  loading: boolean;
  error: Error | null;
}

export interface UserInfoType {
  username: string;
  email: string;
  profileImg: string;
  location: number[];
  friendList: string[];
}

export interface RootState {
  auth: AuthState;

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
export interface DefaultCoordType {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}
