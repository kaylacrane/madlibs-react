import React from "react";

function Form(props) {
  console.log(props);
  const { blanks, handleUserInput, userInput } = props;

  return (
    <form>
      {blanks
        ? blanks.map((blank, index) => {
            return (
              <label htmlFor={blank} key={index}>
                {blank}
                <input
                  type="text"
                  onChange={handleUserInput}
                  id={`${index}-${blank}`}
                  value={userInput[blank]}
                />
              </label>
            );
          })
        : ""}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
