import {IFriend} from '../../../../../model';
import * as React from 'react';

export class FriendComponent8 extends React.Component<IFriend, IFriend> {

  render() {
    return (
      <div>Friend8: {this.props.id} {this.props.name}</div>
    );
  }
}
