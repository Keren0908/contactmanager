import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: 1,
          name: "Keren He",
          email: "hkr.he@gmail.com",
          phone: "555-555-5555"
        },
        {
          id: 2,
          name: "Julie Zhu",
          email: "julie.zhu@gmail.com",
          phone: "555-555-5555"
        },
        {
          id: 3,
          name: "Nic Lin",
          email: "nic.lin@gmail.com",
          phone: "555-555-5555"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
