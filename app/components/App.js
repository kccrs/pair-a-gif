import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import NavLink from './NavLink';
import PlayGame from './PlayGame';


export default class App extends Component {


  componentDidMount() {
    console.log('component mounted', this.props);
    // dispatch(getGiphys(currentGIFs));
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
          <PlayGame />
        </section>
        <Footer />
      </section>
    )
  }
}
