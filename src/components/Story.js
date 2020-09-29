import React from "react";
import { StyledStory } from "./StyledStory";

function Story(props) {
  console.log(props);
  const { title, story, userInput, newStory } = props;
  let fullStory;

  fullStory = story.map((element, index) => {
    return (
      <React.Fragment key={index}>
        {`${element} `}
        <span className="user-input"> {userInput[index]}</span>
      </React.Fragment>
    );
  });

  return (
    <StyledStory>
      <h2 className="story-title">{title}</h2>
      <p>{fullStory ? fullStory : "story"}</p>
      <button className="new-story-button" onClick={newStory}>
        Make another story
      </button>
    </StyledStory>
  );
}

export default Story;
