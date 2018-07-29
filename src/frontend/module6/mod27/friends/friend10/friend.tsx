import {IFriend} from '../../../../../model';
import * as React from 'react';

export class FriendComponent10 extends React.Component<IFriend, IFriend> {

  render() {
    return (
      <div>Friend10: {this.props.id} {this.props.name}</div>
    );
  }
}
