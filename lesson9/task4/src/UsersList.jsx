import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  dataSearch = (event) => {
    let filterText = event.target.value.toLowerCase();

    this.setState({
      filterText,
    });
  };
  render() {
    let filterUsers = this.props.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.filterText)
    );
    return (
      <div>
        <Filter
          count={filterUsers.length}
          filterText={this.state.filterText}
          onChange={this.dataSearch}
        />
        <ul className="users">
          {filterUsers.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UserList;
