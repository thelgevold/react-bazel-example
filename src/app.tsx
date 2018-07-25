class FriendsList extends React.Component {
  render() {
    return (
      <div>
        <h1>List of Friends</h1>
        <ul>
          <li>Joe</li>
          <li>Mary</li>
          <li>Jenny</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<FriendsList />, document.getElementById('root'));