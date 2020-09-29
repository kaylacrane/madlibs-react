import React, { useEffect, useState } from "react";
import fetchText from "../data/fetchText";
import Header from "./Header";
import Form from "./Form";
import Story from "./Story";

function App() {
  const [madlibs, setMadlibs] = useState({});
  const [userInput, setUserInput] = useState({});
  const [errorIds, setErrorIds] = useState([]);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetchText().then((data) => {
      setMadlibs({ ...data });

      data.blanks.map((blank, index) =>
        setUserInput((prevUserInput) => ({
          ...prevUserInput,
          [`${index}-${blank}`]: "",
        }))
      );
    });
  }
  //save user input
  function handleUserInput(event) {
    const key = event.target.id;
    const value = event.target.value;
    setUserInput({ ...userInput, [key]: value });
  }

  //submit user input
  function formSubmitHandler(event) {
    event.preventDefault();
    //show missing data alerts
    let newList = [];
    for (const key in userInput) {
      if (userInput[key] === "") {
        newList.push(key);
      }
    }
    setErrorIds([...newList]);

    //validate form
    if (newList.length === 0) {
      setFormIsValid(true);
    }
  }

  //generate new story
  function newStory() {
    setFormIsValid(false);
    getData();
  }

  return (
    <React.Fragment>
      <Header />
      {!formIsValid ? (
        <Form
          blanks={madlibs.blanks}
          handleUserInput={handleUserInput}
          userInput={userInput}
          formSubmitHandler={formSubmitHandler}
          errorIds={errorIds}
        />
      ) : (
        <Story
          userInput={Object.values(userInput)}
          story={madlibs.value}
          title={madlibs.title}
          newStory={newStory}
        />
      )}
    </React.Fragment>
  );
}

export default App;
