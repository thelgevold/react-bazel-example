import { IFriend } from "../../model";
import * as React from "react";

export class FriendComponent extends React.Component<IFriend, IFriend> {
  render() {
    return (
      <div>
        {this.props.id} {this.props.name}
      </div>
    );
  }
}
