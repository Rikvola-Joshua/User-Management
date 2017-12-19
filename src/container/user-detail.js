import React, { Component } from 'react';
import { connect } from "react-redux";

class UserDetail extends Component {
  renderUser(userData){
    return (
      <tr key={userData.id}>
        <td>
          {userData.name}
          {/* {console.log(userData)} */}
        </td>
      </tr>
    );
  }
  render() {
    const {users} = this.props
    console.log(users.map(user => this.renderUser(user)));
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>City</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => this.renderUser(user))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ users }){
  return { users }; // { user } == { user: user }
}

export default connect(mapStateToProps)(UserDetail);
