import * as React from 'react';
import {FriendsList1Component} from './mod1/friends/friends';
import {FriendsList2Component} from './mod2/friends/friends';
import {FriendsList3Component} from './mod3/friends/friends';
import {FriendsList4Component} from './mod4/friends/friends';
import {FriendsList5Component} from './mod5/friends/friends';
import {FriendsList6Component} from './mod6/friends/friends';
import {FriendsList7Component} from './mod7/friends/friends';
import {FriendsList8Component} from './mod8/friends/friends';
import {FriendsList9Component} from './mod9/friends/friends';
import {FriendsList10Component} from './mod10/friends/friends';


export class AppComponent extends React.Component {
  
  render() {
    return (
      <div>
        <FriendsList1Component></FriendsList1Component>
        <FriendsList2Component></FriendsList2Component>
        <FriendsList3Component></FriendsList3Component>
        <FriendsList4Component></FriendsList4Component>
        <FriendsList5Component></FriendsList5Component>
        <FriendsList6Component></FriendsList6Component>
        <FriendsList7Component></FriendsList7Component>
        <FriendsList8Component></FriendsList8Component>
        <FriendsList9Component></FriendsList9Component>
        <FriendsList10Component></FriendsList10Component>
      </div>
    ); 
  }

}
