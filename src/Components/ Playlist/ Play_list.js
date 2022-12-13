import React from "react";
import TrackList from "../TrackList/TrackList";
import "./playlist.css";

function Playlist (props) {
  return (
    <div className="Playlist">
      <input value={props.playlistName} />
      <TrackList tracks={props.playlistTracks}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;