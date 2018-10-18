import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from 'axios';

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      showContactInfo: false
    };

    //this.onShowClick = this.onShowClick.bind(this);
  }

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = (id,dispatch) => {
      axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}) )
      
  };

  render() {
    const { id,name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
        const {  dispatch } = value
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i onClick={this.onShowClick} className="fas fa-sort-down" />
                <i
                  className="fas fa-user-minus"
                  style={{ float: "right" }}
                  onClick={this.onDeleteClick.bind(this,id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
//Type checking with PropTypes
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
