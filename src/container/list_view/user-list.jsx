import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../actions/index';

import UserDetail from './user-detail';

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
    this.props.fetchUsers(this.state.term);
  }

  render () {
    return (
      <UserDetail />
    )
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => {dispatch(fetchUsers())}  // return bindActionCreators({ fetchUser }, dispatch);
  }
}

export default connect(null, mapDispatchToProps)(UserList);
