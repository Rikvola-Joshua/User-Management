import React, { Component } from 'react';
import { connect } from "react-redux";

class UserDetail extends Component {
  // renderUser(userData){
  //   return (
  //     <tr key={userData.id}>
  //       <td>
  //         {userData.name}
  //         {/* {console.log(userData)} */}
  //       </td>
  //     </tr>
  //   );
  // }
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
          {this.props.user.forEach(function (userData){
            debugger;
          })
        }
            {/* props.user.map(user => user.name).forEach(function (userData){
            debugger;
            console.log("userData", userData)
            // debugger;
            // if (object.hasOwnProperty(userData)) {
            //   console.log(userData.name);
            //   this.renderUser(userData.name);
            // }
          })
          } */}
                </tbody>
      </table>
    );
  }
}

function mapStateToProps({ user }){
  return { user }; // { user } == { user: user }
}

export default connect(mapStateToProps)(UserDetail);
