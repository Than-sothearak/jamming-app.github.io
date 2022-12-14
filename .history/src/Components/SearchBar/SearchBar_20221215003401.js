import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }
  search() {
    if(!this.state.term) {
      return alert('sdd')
    } else {
      this.props.onSearch(this.state.term)
    }
   
 }
 handleTermChange = (e) => {
    this.setState({ term: e.target.value });
  }
  render() {
  return (
    <div className="SearchBar">
      <input onChange={this.handleTermChange}placeholder="Enter A Song, Album, or Artist" />
      <button onClick={this.search} className="SearchButton">SEARCH</button>
    </div>
  );
}
}

export default SearchBar;
