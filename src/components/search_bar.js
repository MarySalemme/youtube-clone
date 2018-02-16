import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
  super(props);

  // only inside the constructor function you can assign state like below
  this.state = { term: '' };
}

  render() {
    // setState used to change the original state assigned in the constructor
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar; 