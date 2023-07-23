import "./css/main.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
//files component
import _buttons from "./components/buttons";
import _header from "./components/_header";
import { data } from "./_data";
import _content from "./components/content";
const App = () => {
  const [dater, setdater] = useState(data);

  const Deleter = () => {
    setdater([]);
  };
  const Shower = () => {
    setdater(data);
  };
  return (
    <div>
      <Container>
        <_header />
        <_content />
        <_buttons handelDel={Deleter} handelShow={Shower} />
      </Container>
    </div>
  );
};

export default App;
