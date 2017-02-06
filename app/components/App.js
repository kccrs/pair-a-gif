import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  // beginGame() {
  //
  // }

  render() {
    return (
      <section className="App">
        <Header />
        <section>
          <Button
            id="GoToSearch"
            text="Click here to begin."
            handleClick={(e) => this.submitSearch(e)}
          />
        </section>
        <Footer />
      </section>
    )
  }
}
