import axios from '../axios';
import { MapCenterType, UserInfoType } from '../types';

export default class MapService {
  public static async getAround(reqData: MapCenterType): Promise<UserInfoType[]> {
    const { data } = await axios.post('/map/around', reqData);
    return data;
  }

  public static async getFriends(): Promise<UserInfoType[]> {
    const { data } = await axios.get('/users/friends');
    return data;
  }
}
