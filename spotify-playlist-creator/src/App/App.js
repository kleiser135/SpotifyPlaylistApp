import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../PlayList/PlayList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'name',
          artist: 'artist',
          album: 'album',
          id: 'id'}
      ]
    }
  }
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <PlayList/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
