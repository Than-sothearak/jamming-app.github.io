import React from "react";
import './SearchBar.css';
import ClipLoader from "react-spinners/ClipLoader";
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
      return alert('Input value')
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
       <ClipLoader
        loading={this.state.loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <input onChange={this.handleTermChange}placeholder="Enter A Song, Album, or Artist" />
      <button onClick={this.search} className="SearchButton">SEARCH</button>
    </div>
  );
}
}

export default SearchBar;
