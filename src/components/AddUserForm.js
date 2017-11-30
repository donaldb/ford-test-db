import React from 'react';
import PropTypes from 'prop-types';

class AddUserForm extends React.Component {
	createUser(event) {
		event.preventDefault();
		const user = {
      CID: this.CID.value,
      EM: this.EM.value,
      CRI: this.CRI.value,
      CCC: this.CCC.value,
      DC: this.DC.value,
      L: this.L.value,
      BR: this.BR.value,
      Unsub_string_values: this.Unsub_string_values.value,
      Email_string_values: this.Email_string_values.value,
      Unsub_String: this.Unsub_String.value,
      Update_Email_String: this.Update_Email_String
		}
		this.props.addUser(user);
		this.userForm.reset();
	}
  render() {
    return (
        <div>
          <form ref={(input) => this.userForm = input} className="user-edit" onSubmit={(e) => this.createUser(e)}>
            <input type="text" placeholder="Consumer ID" ref={(input) => this.CID = input} />
            <input type="text" placeholder="Email Address" ref={(input) => this.EM = input} />
            <input type="text" placeholder="Campaign Code" ref={(input) => this.CRI = input} />
            <input type="text" placeholder="Country Code" ref={(input) => this.CCC = input} />
            <input type="text" placeholder="Dealer Code" ref={(input) => this.DC = input} />
            <input type="text" placeholder="Language" ref={(input) => this.L = input} />
            <input type="text" placeholder="Brand" ref={(input) => this.BR = input} />
            <input type="text" placeholder="Unsub String Values" ref={(input) => this.Unsub_string_values = input} />
            <input type="text" placeholder="Email String Values" ref={(input) => this.Email_string_values = input} />
            <input type="text" placeholder="Unsub String" ref={(input) => this.Unsub_String = input} />
            <input type="text" placeholder="Update Email String" ref={(input) => this.Update_Email_String = input} />
          </form>
        </div>
    )
  }
}

AddUserForm.propTypes = {
	addUser: PropTypes.func.isRequired
};

export default AddUserForm;