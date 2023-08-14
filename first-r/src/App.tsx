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
  const buttonTypes : ("inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning")[] = ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning']

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  const [btnType, setBtnType] = useState(0)


  return (
    <Container maxWidth="sm" id="root-container">
      <Navbar></Navbar>
      <Message />
      <ListGroup items={cities} title="Cities" onSelectItem={onSelectItem} />
      <Alert>hi, <p>piece</p></Alert>
      <MyButton onBtnPress={setBtnType} btnTypes={buttonTypes} currentState={btnType}></MyButton>
    </Container>
  );
}

export default App;
