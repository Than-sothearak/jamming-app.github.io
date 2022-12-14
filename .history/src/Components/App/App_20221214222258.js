import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import Playlist from "../ Playlist/ Play_list";
import  SearchResults  from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {name: 'name1', album:'album1', artist:'artist1', id:11},
        {name: 'name2', album:'album2', artist:'artist2', id:22}
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {name: 'playlistTracks1', album:'playlistTracks1', artist:'playlistTracks1', id:50},
        {name: 'playlistTracks2', album:'playlistTracks2', artist:'playlistTracks2', id:33}
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  };
  
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name});
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName).then(
      this.setState(
        {
          playlistName: 'New Playlist',
          playlistTracks: []
        })
    )
  }
  
  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults})
    })
  }

  render() {
  return (
    <div className="main">
    <h1>
      Ja<span className="highlight">mmm</span>ing
    </h1>
    <div className="App">
      <SearchBar onSearch={this.search}/>
      <div className="App-playlist">
      <SearchResults
              searchResults={this.state.searchResults}
            
              onAdd={this.addTrack}
            />
        <Playlist 
           playlistName={this.state.playlistName}
           playlistTracks={this.state.playlistTracks}
           onRemove={this.removeTrack}
           onNameChange={this.updatePlaylistName}
           onSave={this.savePlaylist}
        />
      </div>
    </div>
    </div> 
  )
 }
}
export default App;
