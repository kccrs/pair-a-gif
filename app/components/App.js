import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavLink from './NavLink';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="App">
        <Header />
        <section>
          <NavLink
            id="GoToSearch"
            text="Click here to begin."
          />
        </section>
        <Footer />
      </section>
    )
  }
}
