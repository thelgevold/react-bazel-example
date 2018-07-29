import {IFriend} from '../../../../../model';
import * as React from 'react';

export class FriendComponent6 extends React.Component<IFriend, IFriend> {

  render() {
    return (
      <div>Friend6: {this.props.id} {this.props.name}</div>
    );
  }
}
