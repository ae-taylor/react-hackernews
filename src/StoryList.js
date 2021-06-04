import React from "react";
import Story from "./Story";
import SearchForm from "./SearchForm";
import axios from "axios";

/** StoryList class lists all stories or stories
 * matching search term.
 * 
 * Props: 
 *  - none
 * State:
 *  - loading
 *  - stories
 * 
 * StoryList -> SearchForm, Story
 */
class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, stories: null, searchTerm: "react" };
  }

  /** handle search from form */
  handleSearch = (searchTerm) => {
    this.setState({ searchTerm: searchTerm });
  }

  /** gets stories from api */
  getStories = async () => {
    let resp = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}`);
    this.setState({ loading: false, stories: resp.data.hits });
  }

  /** on mount fetch stories*/
  async componentDidMount() {
    this.getStories();
  }

  /** on update fetch stories */
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.getStories();
    }
  }

  render() {
    return (
      this.state.loading
        ? <div>loading</div>
        : <div>
          <SearchForm handleSearch={this.handleSearch} />
          <ul>
            {this.state.stories.map(story => <Story story={story}
              key={story.objectID} />)}
          </ul>
        </div>
    )
  }
}

export default StoryList;