import React, { Component } from 'react';
import Button from './Button';
import { connect } from 'react-redux';

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

// _findStations(){
//     fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=${NREL_API_KEY}&fuel_type=${this.state.fuel}&zip=${this.state.zip}`)
//     .then(response => response.json())
//     .then(responseJSON => this.props.getStations(responseJSON))
//     .then(() => this._routeToList())
//     .catch(error => console.error(error));
//   }


//   _getNationalStats(){
//     fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=${NREL_API_KEY}`)
//     .then(response => response.json())
//     .then(responseJSON => this.props.getNationalStats(responseJSON.station_counts.fuels));
//   }
//
//   _getStateStats(){
//     fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=${NREL_API_KEY}&state=${this.state.stateChoice}`)
//     .then(response => response.json())
//     .then(responseJSON => this.props.getStateStats(responseJSON.station_counts.fuels));
//   }
//
//   const fetchPosts = reddit => dispatch => {
//   dispatch(requestPosts(reddit))
//   return fetch(`https://www.reddit.com/r/${reddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(reddit, json)))
// }

//   render() {
//     const { user } = this.props;
//     if (user) {
//       return (
//         <View style={styles.container}>
//           <Text style={styles.name}>
//             Welcome {user.name}!
//           </Text>
//           <Text style={styles.email}>
//             {user.email}
//           </Text>
//           <Image style={styles.photo} source={{uri: user.picture}} />
//           <Text style={styles.tagline}>What fuels your state?</Text>
//           <View>
//             <Picker
//               style={styles.picker}
//               selectedValue={this.state.stateChoice}
//               onValueChange={(choice) => this.setState({stateChoice: choice})}>
//             </Picker>
//             <TouchableHighlight
//               style={styles.stateButton}
//               underlayColor='#757575'
//               onPress={this._getStationStats.bind(this)}>
//               <Text style={styles.stateButtonText}>Check here</Text>
//             </TouchableHighlight>
//           </View>
//         </View>
//       )
//     }
//     return (null);
//   }
// }

// export default userContainer(fuelStatsContainer(Profile));
