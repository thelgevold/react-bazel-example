import { IFriend, IFriends } from '../../../../model';
import { API_BASE_URL } from '../../../config/api.config';

export class FriendService {

  getFriends(): Promise<Array<IFriend>> {
    return fetch(`${API_BASE_URL}/friends`)
      .then((response: any) => response.json())
      .then((data: IFriends) => data.friends);
  }
}
