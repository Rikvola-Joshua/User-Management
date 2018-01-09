import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../actions/index';

import UserDetail from './user-detail';

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
    this.props.fetchUser(this.state.term);
  }

  render () {
    return (
      <UserDetail />
    )
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => {dispatch(fetchUser())}  // return bindActionCreators({ fetchUser }, dispatch);
  }
}

export default connect(null, mapDispatchToProps)(UserList);
