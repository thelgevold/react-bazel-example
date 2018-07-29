import {IFriend} from '../../../../../model';
import * as React from 'react';

export class FriendComponent3 extends React.Component<IFriend, IFriend> {

  render() {
    return (
      <div>Friend3: {this.props.id} {this.props.name}</div>
    );
  }
}
