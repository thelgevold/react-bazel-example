import {IFriend} from '../../../../../model';
import * as React from 'react';

export class FriendComponent5 extends React.Component<IFriend, IFriend> {

  render() {
    return (
      <div>Friend5: {this.props.id} {this.props.name}</div>
    );
  }
}
