import {IFriend} from '../../../../../model';
import * as React from 'react';

export class FriendComponent4 extends React.Component<IFriend, IFriend> {

  render() {
    return (
      <div>Friend4: {this.props.id} {this.props.name}</div>
    );
  }
}
