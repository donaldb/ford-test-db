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
            <div class="inputField">
              <label htmlFor="CID">Consumer ID</label>
              <input pattern=".+" id="CID" type="text" placeholder="Consumer ID" ref={(input) => this.CID = input} />
            </div>
            <div class="inputField">
              <label htmlFor="EM">Email Address</label>
              <input pattern=".+" id="EM" type="text" placeholder="Email Address" ref={(input) => this.EM = input} />
            </div>
            <div class="inputField">
              <label htmlFor="CRI">Campaign Code</label>
              <input pattern=".+" id="CRI" type="text" placeholder="Campaign Code" ref={(input) => this.CRI = input} />
            </div>
            <div class="inputField">
              <label htmlFor="CCC">Country Code</label>
              <input pattern=".+" id="CCC" type="text" placeholder="Country Code" ref={(input) => this.CCC = input} />
            </div>
            <div class="inputField">
              <label htmlFor="DC">Dealer Code</label>
              <input pattern=".+" id="DC" type="text" placeholder="Dealer Code" ref={(input) => this.DC = input} />
            </div>
            <div class="inputField">
              <label htmlFor="L">Language</label>
              <input pattern=".+" id="L" type="text" placeholder="Language" ref={(input) => this.L = input} />
            </div>
            <div class="inputField">
              <label htmlFor="BR">Brand</label>
              <input pattern=".+" id="BR" type="text" placeholder="Brand" ref={(input) => this.BR = input} />
            </div>
            <div class="inputField">
              <label htmlFor="Unsub_string_values">Unsub String Values</label>
              <input pattern=".+" id="Unsub_string_values" type="text" placeholder="Unsub String Values" ref={(input) => this.Unsub_string_values = input} />
            </div>
            <div class="inputField">
              <label htmlFor="Email_string_values">Email String Values</label>
              <input pattern=".+" id="Email_string_values" type="text" placeholder="Email String Values" ref={(input) => this.Email_string_values = input} />
            </div>
            <div class="inputField">
              <label htmlFor="Unsub_String">Unsub String</label>
              <input pattern=".+" id="Unsub_String" type="text" placeholder="Unsub String" ref={(input) => this.Unsub_String = input} />
            </div>
            <div class="inputField">
              <label htmlFor="Update_Email_String">Update Email String</label>
              <input pattern=".+" id="Update_Email_String" type="text" placeholder="Update Email String" ref={(input) => this.Update_Email_String = input} />
            </div>
          </form>
        </div>
    )
  }
}

AddUserForm.propTypes = {
	addUser: PropTypes.func.isRequired
};

export default AddUserForm;