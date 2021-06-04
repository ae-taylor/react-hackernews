import React from "react";
import StoryList from "./StoryList";

/** App:
 * 
 * props: none
 * state: none
 * 
 * App -> StoryList
 */
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StoryList />
      </div>
    );
  }

}

export default App;
