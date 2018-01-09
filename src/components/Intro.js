import React from 'react';
import AddUserForm from './AddUserForm';

class Intro extends React.Component {
    render() {
      return (
          <div id="addUserForm">
            <h2>Test Users</h2>
            <AddUserForm addUser={this.props.addUser} />
          </div>
      )
    }
  }

export default Intro;