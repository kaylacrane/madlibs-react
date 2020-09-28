import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  padding: 0 15px 25px;
  background-color: lightgrey;
  font-family: Courier;
  & > .header-title {
    color: green;
  }
  & > .header-text {
    font-style: italic;
  }
`;
