import React from 'react';
import { Component } from 'react';

import UserList from '../container/user-list';
import UserDetail from '../container/user-detail';


export default class App extends Component {
  render() {
    return (
      <div>
        <UserList />
        <UserDetail />
      </div>
    );
  }
}
