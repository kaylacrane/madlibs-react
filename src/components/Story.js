import React from "react";

function Story(props) {
  console.log(props);
  const { title, story, userInput } = props;
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
    <div className="story-page">
      <h2 className="story-title">{title}</h2>
      <p>{fullStory ? fullStory : "story"}</p>
    </div>
  );
}

export default Story;
