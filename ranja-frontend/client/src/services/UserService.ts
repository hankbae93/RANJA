import axios from 'axios';
import { LoginReqType } from '../types';

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<void> {
    const { data } = await axios.post('/auth/login', reqData);
    return data;
  }

  public static async logout(): Promise<void> {
    await axios.post('/auth/logout');
  }

  public static async loadMyInfo(): Promise<void> {
    const { data } = await axios.get('/auth');

    return data;
  }
}
