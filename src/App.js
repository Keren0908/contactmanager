import React, { Component } from 'react';
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manger"/>
        <Contact name="Keren He" email="hkr.he@outlook.com" phone="416-856-5258"/>
      </div>
    );
  }
}

export default App;
