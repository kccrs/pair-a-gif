import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import PlayGame from './PlayGame';


export default class App extends Component {

  render() {
    return (
      <section className="App">
        <Header />
        <section>
          <PlayGame />
        </section>
        <Footer />
      </section>
    )
  }
}
