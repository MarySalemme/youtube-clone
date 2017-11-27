import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCV3Ycw9ZeszeWFsgMj5UtWowwnyA4_6PA';


const App = () => {
   return (
      <div>
         <SearchBar />
      </div>
   );
}

ReactDOM.render(<App />, document.querySelector('.container'));