import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Data from "./data.json";
import "./scss/main.scss";
const element = <FontAwesomeIcon icon={faCoffee} />;

function App() {
  // const [posts, setPosts] = useState(Data);
  return (
    <React.Fragment>
      <div>{element}</div>
      {/* <Gallery posts={posts} /> */}
      <Menu />
      <Header />
      <Tabs />
      <Gallery Data={Data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
