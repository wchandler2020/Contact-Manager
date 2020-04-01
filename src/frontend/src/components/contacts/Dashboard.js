import React, { Component } from "react";
import NewContact from "./NewContact";
import ContactForm from "./ContactForm";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NewContact />
        <ContactForm />
      </div>
    );
  }
}

export default Dashboard;
