import React, { Component } from 'react';
import { connect } from "react-redux";

class UserDetail extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Picture</th>
            <th>City</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.props.user.map()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ user }){
  return { user }; // { user } == { user: user }
}

export default connect(mapStateToProps)(UserDetail)
