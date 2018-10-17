import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts:[action.payload,
        ...state.contacts]
      }
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
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
    ],

    dispatch: action => this.setState(state => reducer(state, action))
    
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
