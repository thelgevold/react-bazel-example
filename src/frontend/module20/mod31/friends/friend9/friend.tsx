import {IFriend} from '../../../../../model';
import * as React from 'react';

export class FriendComponent9 extends React.Component<IFriend, IFriend> {

  render() {
    return (
      <div>Friend9: {this.props.id} {this.props.name}</div>
    );
  }
}
