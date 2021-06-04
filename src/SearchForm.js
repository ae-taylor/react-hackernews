import React from "react";

/** SearchForm
 * 
 * Props:
 * - handleSearch();
 * 
 * State:
 * - formData
 * 
 * StoryList -> SearchForm
 */

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formData: ""};
    this.handleSearch = props.handleSearch;
  }

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({formData: value});
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    let trimmedTerm = this.state.formData.trim();
    this.handleSearch(trimmedTerm);
    this.setState({formData: ""});
  };

  render() {
    return (
        <form className="SearchForm form-row" onSubmit={this.handleSubmit}>
          <input 
                name="term" 
                value={this.state.formData} 
                placeholder="Enter a search term..."
                onChange={this.handleChange}/>
          <button className="SearchForm-button btn-sm btn-primary mb-2">Search</button>
        </form>
      );
  }
  
}

export default SearchForm;