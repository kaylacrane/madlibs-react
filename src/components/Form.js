import React from "react";
import { StyledForm } from "./StyledForm";

function Form(props) {
  //   console.log(props);
  const {
    blanks,
    handleUserInput,
    userInput,
    formSubmitHandler,
    errorIds,
  } = props;

  return (
    <StyledForm>
      <>
        {blanks
          ? blanks.map((blank, index) => {
              return (
                <label
                  htmlFor={`${index}-${blank}`}
                  key={index}
                  className={`form-label ${
                    errorIds.includes(`${index}-${blank}`) ? "show-alert" : ""
                  }`}
                >
                  {blank}
                  <input
                    type="text"
                    className="form-input"
                    onChange={handleUserInput}
                    id={`${index}-${blank}`}
                    value={userInput[blank]}
                  />

                  <span className="alert">**</span>
                </label>
              );
            })
          : ""}
        <input
          type="submit"
          value="Submit"
          onClick={formSubmitHandler}
          className="form-submit button"
        />
      </>
    </StyledForm>
  );
}

export default Form;
