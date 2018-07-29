import * as React from 'react';
import {FriendComponent1} from './friend1/friend';
import {FriendComponent2} from './friend2/friend';
import {FriendComponent3} from './friend3/friend';
import {FriendComponent4} from './friend4/friend';
import {FriendComponent5} from './friend5/friend';
import {FriendComponent6} from './friend6/friend';
import {FriendComponent7} from './friend7/friend';
import {FriendComponent8} from './friend8/friend';
import {FriendComponent9} from './friend9/friend';
import {FriendComponent10} from './friend10/friend';

import {FriendService} from './friend-service';
import {IFriend, IFriends} from '../../../../model';

export class FriendsList20Component extends React.Component<IFriends, IFriends> {
  friendService = new FriendService();

  constructor(props) {
    super(props);
    const friends: IFriends = {friends: []};
    this.state = friends;
  }

  render() {
    const friends = this.state.friends.map((friend: IFriend) => {
      return <div key={"parent" + friend.id}>
               <FriendComponent1 key={"a" + friend.id} id={friend.id} name={friend.name}></FriendComponent1>
               <FriendComponent2 key={"b" + friend.id} id={friend.id} name={friend.name}></FriendComponent2>
               <FriendComponent3 key={"c" + friend.id} id={friend.id} name={friend.name}></FriendComponent3>
               <FriendComponent4 key={"d" + friend.id} id={friend.id} name={friend.name}></FriendComponent4>
               <FriendComponent5 key={"e" + friend.id} id={friend.id} name={friend.name}></FriendComponent5>
               <FriendComponent6 key={"f" + friend.id} id={friend.id} name={friend.name}></FriendComponent6>
               <FriendComponent7 key={"g" + friend.id} id={friend.id} name={friend.name}></FriendComponent7>
               <FriendComponent8 key={"h" + friend.id} id={friend.id} name={friend.name}></FriendComponent8>
               <FriendComponent9 key={"i" + friend.id} id={friend.id} name={friend.name}></FriendComponent9>
               <FriendComponent10 key={friend.id} id={friend.id} name={friend.name}></FriendComponent10>
             </div>
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
