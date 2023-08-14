import { useState } from "react";
import "./App.css";
import Message from "./Message";
import Alert from "./components/Alert";
import MyButton from "./components/Button";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

function App() {
  const cities = ["Paris", "Rome", "Kazan"];
  const buttonTypes = ['primary','secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  const [btnType, setBtnType] = useState(0)
  

  return (
    <Container maxWidth="sm">
      <Navbar></Navbar>
      <Message />
      <ListGroup items={cities} title="Cities" onSelectItem={onSelectItem} />
      <Alert>hi, <p>piece</p></Alert>
      <MyButton onBtnPress={setBtnType} btnTypes={buttonTypes} currentState={btnType}></MyButton>
    </Container>
  );
}

export default App;
