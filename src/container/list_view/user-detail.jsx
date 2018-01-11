import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { validateUrl } from "../../lib/library"
import { fetchUsers } from '../../actions';

class UserDetail extends Component {
  componentDidMount() {
      this.props.fetchUsers();
  }

  renderUser(){
    return _.map(this.props.users, user=> {
      return (
        <tr key={user.id}>
          <td>
            {user.id}
          </td>
          <td>
            {user.name}
          </td>
          <td>
            <a target="_blank" href={ validateUrl(user.website) }>{ user.website }</a>
          </td>
          <td>
            {user.address.city}
          </td>
          <td>
            <a>
              <img alt="edit" src="./media/edit-icon.svg" className="edit-img"></img>
            </a>
          </td>
        </tr>
      )
    })
  }
  render() {
    // const {users} = this.props.users
    // console.log(users.map(user => this.renderUser(user)));
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
          {/* {users.map(user => this.renderUser(user))} */}
          {this.renderUser()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return { users: state.users }; // { user } == { user: user }
}

export default connect(mapStateToProps, { fetchUsers})(UserDetail);
