import React, { useEffect, useState } from "react";
import fetchText from "../data/fetchText";

function App() {
  const [madlibs, setMadlibs] = useState({});
  useEffect(() => {
    fetchText().then((data) => setMadlibs({ ...data }));
  }, []);
  console.log(madlibs);
  return <div className="App"></div>;
}

export default App;
