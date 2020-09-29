import styled from "styled-components";

export const StyledStory = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  & > .new-story {
    background-color: green;
    color: white;
    margin-top: 20px;
    border: none;
    padding: 10px 0;
    box-shadow: 0 0 10px grey;
  }
  & > .story-title {
    font-size: 18px;
    margin: 20px 0;
    color: green;
  }
  & > .story-text {
    line-height: 1.2;
  }
  @media all and (min-width: 760px) {
    width: 70vw;
    margin: auto;
    & > .story-title {
      font-size: 22px;
    }
  }
  @media all and (min-width: 1200px) {
    width: 50vw;
  }
`;
