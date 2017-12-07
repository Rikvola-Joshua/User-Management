import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchUser } from '../actions/index';


export default class UserList extends Component {
  constructor(props){
    super(props);
    fetchUser();

    this.state = { term: '' };
  }
  renderList(event) {
    this.setState({ term: event.target.value });
  }

  render () {
    return (
      <div
        onload={this.renderList}
        className="UserList"
        value={this.state.term}
      />
    )
  };
};


// if redux
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}
