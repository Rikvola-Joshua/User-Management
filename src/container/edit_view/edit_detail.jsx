import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { validateUrl } from "../../lib/library"
import { fetchUser, saveUser } from '../../actions';

class EditDetail extends Component {
  componentDidMount() {
     console.log(this.props);
     const { id } = this.props.match.params
     this.props.fetchUser(id);
  }

  render() {
    const { user } = this.props

    if (!user) {
      return <div>Loading...</div>
    }

    return (
      <form>
        <table>
          <thead>
            <tr>
              <th>General Informations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>Name:</span>
              </td>
              <td>
                <input type="text" name="name" defaultValue={user.name}></input>
              </td>
              <td>
                <span>Street, suite:</span>
              </td>
              <td>
                <input type="text" name="street" defaultValue={user.address.street}></input>
                <input type="text" name="suite" defaultValue={user.address.suite}></input>
              </td>
            </tr>
            <tr>
              <td>
                  <span>Username:</span>
              </td>
              <td>
                  <input type="text" name="username" defaultValue={user.username}></input>
              </td>
              <td>
                  <span>City:</span>
              </td>
              <td>
                  <input type="text" name="city" defaultValue={user.address.city}></input>
              </td>
            </tr>
            <tr>
              <td>
                  <span>Email:</span>
              </td>
              <td>
                  <input type="text" name="email" defaultValue={user.email}></input>
              </td>
              <td>
                  <span>ZipCode:</span>
              </td>
              <td>
                  <input type="text" name="ZipCode" defaultValue={user.address.zipcode}></input>
              </td>
            </tr>
            <tr>
              <td>
                  <span>Phone:</span>
              </td>
              <td>
                  <input type="text" name="phone" defaultValue={user.phone}></input>
              </td>
            </tr>
            <tr>
              <td>
                  <span>Website:</span>
              </td>
              <td>
                  <input type="text" name="website" defaultValue={user.website}></input>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>Name:</span>
              </td>
              <td>
                <input type="text" name="companyName" defaultValue={user.company.name}></input>
              </td>
            </tr>
            <tr>
              <td>
                <span>Catch phrase:</span>
              </td>
              <td>
                <input type="text" name="catchPhrase" defaultValue={user.company.catchPhrase}></input>
              </td>
            </tr>
            <tr>
              <td>
                <span>Business:</span>
              </td>
              <td>
                <input type="text" name="business" defaultValue={user.company.bs}></input>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </div>
      </form>
    )
  }
}

function mapStateToProps({ users }, ownProps){
  return { user: users[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchUser })(EditDetail);
