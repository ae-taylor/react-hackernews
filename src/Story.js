import React from "react";

/** Story: renders <li> of each story title
 * 
 * props: story obj {title, createdAt, ...}
 * state: none
 * 
 * StoryList -> Story
 */
class Story extends React.Component {
  constructor(props) {
    super(props);
    this.story = props.story;
  }
  render() {

    return <div>
        <li>
          {this.story.title}
        </li>
      </div>
  }
}

export default Story;