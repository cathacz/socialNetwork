import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Data from "./data.json";

const element = <FontAwesomeIcon icon={faCoffee} />;

function App() {
  // const [posts, setPosts] = useState(Data);
  return (
    <React.Fragment>
      <div>{element}</div>
      {/* <Gallery posts={posts} /> */}
      <Gallery Data={Data} />
    </React.Fragment>
  );
}

export default App;
