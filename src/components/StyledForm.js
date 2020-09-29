import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 20px;

  & > .form-label {
    color: green;
    margin: 5px 0;
    & > .form-input {
      margin-right: 5px;
      width: 150px;
    }
  }
  & > .form-submit {
    background-color: green;
    color: white;
    margin-top: 20px;
    border: none;
    padding: 10px 0;
    box-shadow: 0 0 10px grey;
  }
  @media all and (min-width: 760px) {
    width: 60vw;
    margin: auto;
    & > .form-label {
      color: green;
      margin: 8px 20px;
      & > .form-input {
        margin-right: 5px;
        width: 150px;
      }
    }
    & > .form-submit {
    }
  }
  @media all and (min-width: 1200px) {
    width: 30vw;
  }
`;
