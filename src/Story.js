import React from "react";

/** Story: renders <li> of each story title
 * 
 * props: story obj {title, createdAt, ...}
 * state: none
 * 
 * StoryList -> Story
 */
class Story extends React.Component {
  
  render() {
    const { title } = this.props.story;
    return <div>
        <li>
          {title}
        </li>
      </div>
  }
}

export default Story;