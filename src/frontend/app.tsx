import * as React from 'react';
import {FriendComponent} from './friend/friend';
import {FriendService} from './friend/friend-service';
import {IFriend, IFriends} from '../model';

export class FriendsList extends React.Component<IFriends, IFriends> {
  friendService = new FriendService();

  constructor(props) {
    super(props);
    const friends: IFriends = {friends: []};
    this.state = friends;
  }

  render() {
    const friends = this.state.friends.map((friend: IFriend) => {
      return <FriendComponent key={friend.id} id={friend.id} name={friend.name}></FriendComponent>
      
    });
    return (
      <div>
        <h1>List of Friends!</h1>
        {friends}
      </div>
    ); 
  }

  componentDidMount() {
    this.friendService
        .getFriends()
        .then(friends => this.setState({ friends }));
  }
}
