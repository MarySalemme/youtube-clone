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
         <div>
            <input onChange={event => this.setState({ term: event.target.value })} /> <br/>
            Value of the input: { this.state.term }
         </div>
      );
   }
}

export default SearchBar;