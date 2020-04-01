import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contacts";

class NewContact extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <Fragment>
        <h1> Contacts</h1>
        <table className="striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map(contact => {
              return (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>
                    <a className="waves-effect waves-light btn">Delete</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts
});

export default connect(mapStateToProps, { getContacts })(NewContact);
