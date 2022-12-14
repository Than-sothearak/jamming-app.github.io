import React from "react";
import './SearchBar.css';
import ClipLoader from "react-spinners/ClipLoader";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      loading: true
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }
  displayLoading() {
    return <ClipLoader
    loading={this.state.loading}
    size={50}
    aria-label="Loading Spinner"
    data-testid="loader"
     />
   }

  search() {
    if(!this.state.term) {
      return alert('Input value')
    } else {
      this.displayLoading();
      this.props.onSearch(this.state.term);
    }
 };


 handleTermChange = (e) => {
    this.setState({ term: e.target.value });
  }
  render() {
  return (
    <div className="SearchBar">
       {this.displayLoading}
      <input onChange={this.handleTermChange}placeholder="Enter A Song, Album, or Artist" />
      <button onClick={this.search} className="SearchButton">SEARCH</button>
    </div>
  );
}
componentDidMount () {
  setTimeout(() => {
    this.setState({ loading: false })
  }, 1000)
 }
}

export default SearchBar;
