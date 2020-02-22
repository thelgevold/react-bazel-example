import { IFriend } from '../../../../../model';
import React from "react";

export class FriendComponent2 extends React.Component<IFriend, IFriend> {

  render() {
    return (
      <div>Friend2: {this.props.id} {this.props.name}</div>
    );
  }
}
