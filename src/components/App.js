import React, { useEffect, useState } from "react";
import fetchText from "../data/fetchText";
import Header from "./Header";
import Form from "./Form";

function App() {
  const [madlibs, setMadlibs] = useState({});
  const [userInput, setUserInput] = useState({});
  useEffect(() => {
    fetchText().then((data) => setMadlibs({ ...data }));
  }, []);

  function handleUserInput(event) {
    console.log(event.target.value, event.target.id);
    const key = event.target.id;
    const value = event.target.value;

    setUserInput({ ...userInput, [key]: value });
  }
  return (
    <React.Fragment>
      <Header />
      <Form
        blanks={madlibs.blanks}
        handleUserInput={handleUserInput}
        userInput={userInput}
      />
    </React.Fragment>
  );
}

export default App;
