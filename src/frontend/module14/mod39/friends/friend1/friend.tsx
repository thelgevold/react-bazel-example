import {IFriend} from '../../../../../model';
import * as React from 'react';

export class FriendComponent1 extends React.Component<IFriend, IFriend> {

  render() {
    return (
      <div>Friend1: {this.props.id} {this.props.name}</div>
    );
  }
}
