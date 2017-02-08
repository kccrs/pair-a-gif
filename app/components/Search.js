import React, { Component } from 'react';
import Button from './Button';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKeywords: ''
    };
  }

  submitSearch(e) {
    e.preventDefault();
    console.log('Search submitted');
  }

  render() {
    return (
      <section className="Search">
        <h1>Search a Category</h1>
        <p className="searchArea">
          Enter keywords to search for a category of GIFs to play with.  If you use more than one word, please add a '+' in between each word with no spaces. (Ex. denver+broncos)
          <label className="searchLabel">
            What category would you like to choose?
            <input
              type="text"
              value={this.state.currentKeywords}
              placeholder="Enter category or keyword"
              onChange={(e) => this.setState({ currentKeywords: e.target.value })}           />
          </label>
          <Button
            id="SearchButton"
            text="Search"
            handleClick={(e) => this.submitSearch(e)}
          />
          </p>
        <p className="selectArea">
          You can also choose from some of our favorite categories to play Pair a GIF with.
          <button className="cats">Cats</button>
          <button className="cheese">Cheese</button>
          <button className="gators">Florida Gators</button>
          <button className="broncos">Denver Broncos</button>
          <button className="arrested">Arrested Development</button>
        </p>
      </section>
    )
  }
}
