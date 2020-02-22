import {IFriend} from '../../../../../model';
import React from "react";

export class FriendComponent7 extends React.Component<IFriend, IFriend> {

  render() {
    return (
      <div>Friend7: {this.props.id} {this.props.name}</div>
    );
  }
}
