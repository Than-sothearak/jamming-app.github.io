import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import Playlist from "../ Playlist/ Play_list";
import  SearchResults  from "../SearchResults/SearchResults";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {name: 'name1', album:'album1', artist:'artist1', id:1},
        {name: 'name2', album:'album2', artist:'artist2', id:2}
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {name: 'playlistTracks1', album:'playlistTracks1', artist:'playlistTracks1', id:1},
        {name: 'playlistTracks2', album:'playlistTracks2', artist:'playlistTracks2', id:2}
      ],
    };
    this.addTrack = this.addTrack.bind(this);
  };
  
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }
 
  render() {
  return (
    <div className="main">
    <h1>
      Ja<span className="highlight">mmm</span>ing
    </h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
      <SearchResults
              searchResults={this.state.searchResults}
            
              onAdd={this.addTrack}
            />
        <Playlist 
           playlistName={this.state.playlistName}
           playlistTracks={this.state.playlistTracks}
        />
      </div>
    </div>
    </div> 
  )
 }
}
export default App;
