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
          name: 'name1',
          artist: 'artist1',
          album: 'album1',
          id: 'id1'
        },
        {
          name: 'name2',
          artist: 'artist2',
          album: 'album2',
          id: 'id2'
        },
        {
          name: 'name3',
          artist: 'artist3',
          album: 'album3',
          id: 'id3'
        }
      ],

      playlistName: 'Playlist Name',

      playlistTrack: [
        {
          name: 'Track1',
          artist: 'Artist1',
          album: 'Album1',
          id: 1
        },
        {
          name: 'Track2',
          artist: 'Artist2',
          album: 'Album2',
          id: 2
        },
        {
          name: 'Track3',
          artist: 'Artist3',
          album: 'Album3',
          id: 3
        }
      ]
    }

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    else{
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <PlayList playlistName={this.state.playlistName} playlistTrack={this.state.playlistTrack}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
