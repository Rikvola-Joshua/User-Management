import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchUser } from '../actions/index';

import UserDetail from '../container/user-detail';


class UserList extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
    // this.setState({ term: '' });
    // this.onload = this.onload.bind(this);

    this.renderList();
  }
  renderList() {
    this.props.fetchUser(this.state.term);
    this.state = { term: '' };
  }

  render () {
    return (
      <UserDetail />
    )
  };
};

// if redux
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserList);
