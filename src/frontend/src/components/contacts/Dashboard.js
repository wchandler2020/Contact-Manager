import React, { Component } from "react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Contacts />
        <ContactForm />
      </div>
    );
  }
}
