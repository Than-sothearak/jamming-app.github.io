import React from "react";
import './SearchBar.css';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }
 
  search() {
    if(!this.state.term) {
      return alert('Input value')
    } else {
      this.props.onSearch(this.state.term);
    }
 };

 displayLoading() {
  this.search()
 }
 handleTermChange = (e) => {
    this.setState({ term: e.target.value });
  }
  render() {
  return (
  
    <div className="SearchBar1">
      <div className="SearchBar">
      <input onChange={this.handleTermChange}placeholder="Enter A Song, Album, or Artist" />
      <button onClick={this.search} className="SearchButton">SEARCH</button></div>
      
     
  
  </div>
  )
  
}
// componentDidMount () {
//   setTimeout(() => {
//     this.setState({ loading: false })
//   }, 1000)
//  }

}
export default SearchBar;
