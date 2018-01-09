import React, { Component } from 'react';
import logo from '../images/gtb_white.svg';
import AddUserForm from './AddUserForm';

class App extends React.Component {
  constructor() {
    super();

    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.updateUser = this.updateUser.bind(this);

    // getinitialState
    this.state = {
      users: {}
    };
  }

  addUser(user) {
    // update our state
    const users = {...this.state.users};
    // add in our new fish
    const timestamp = Date.now();
    users[`user-${timestamp}`] = user;
    // set state
    this.setState({ users });
  }

  updateUser(key, updatedUser) {
    const users = {...this.state.users};
    users[key] = updatedUser;
    this.setState({ users });
  }

  removeUser(key) {
    const users = {...this.state.users};
    users[key] = null;
    this.setState({ users });

  }

  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <img src={logo} className="appLogo" alt="logo" />
          <h1 className="appTitle">Ford Test and Seed Records</h1>
        </header>

        <AddUserForm addUser={this.props.addUser} />
      </div>
    );
  }
}

export default App;
