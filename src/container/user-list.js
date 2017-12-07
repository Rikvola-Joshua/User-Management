import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchUser } from '../actions/index';


export default class UserList extends Component {
  renderList() {

  }
  render () {
    return (
      <div></div>
    )
  };
};


// if redux
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}
