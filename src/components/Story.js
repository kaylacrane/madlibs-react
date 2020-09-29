import React from "react";
import { StyledStory } from "./StyledStory";

function Story(props) {
  const { title, story, userInput, newStory } = props;
  //construct story from api text and user input in form
  let fullStory;
  fullStory = story.map((element, index) => {
    if (element !== 0) {
      return (
        <React.Fragment key={index}>
          {`${element} `}
          <span className="user-input"> {userInput[index]}</span>
        </React.Fragment>
      );
    }
  });

  return (
    <StyledStory>
      <button className="new-story" onClick={newStory}>
        Make another story
      </button>
      <h2 className="story-title">{title}</h2>
      <p className="story-text">{fullStory ? fullStory : story}</p>
    </StyledStory>
  );
}

export default Story;
