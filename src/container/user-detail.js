import React, { Component } from 'react';
import { connect } from "react-redux";

class UserDetail extends Component {
  renderUser(userData){
    const users = userData.results.map(user => user.name);
    users.forEach(function (value) {
      return (
        <tr key={value.first}>
          <td>
            {value.first}
            {/* {console.log(value.first)} */}
          </td>
        </tr>
      )
    });
  }
  render() {
    console.log(this.props.user);
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
          {this.props.user.map(this.renderUser)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ user }){
  return { user }; // { user } == { user: user }
}

export default connect(mapStateToProps)(UserDetail);
