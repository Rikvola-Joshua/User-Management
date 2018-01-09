import React, { Component } from 'react';
import { connect } from "react-redux";
import { validateUrl } from "../../lib/library"

class UserDetail extends Component {
  renderUser(userData){
    return (
      <tr key={userData.id}>
        <td>
          {userData.id}
        </td>
        <td>
          {userData.name}
        </td>
        <td>
          <a target="_blank" href={ validateUrl(userData.website) }>{ userData.website }</a>
        </td>
        <td>
          {userData.address.city}
        </td>
        <td>
          <a>
            <img alt="edit" src="./media/edit-icon.svg" className="edit-img"></img>
          </a>
        </td>

      </tr>
    );
  }
  render() {
    const {users} = this.props
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Website</th>
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
