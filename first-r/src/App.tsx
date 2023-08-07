// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";
import Message from "./Message";
import Alert from "./components/Alert";
import MyButton from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["Paris", "Rome", "Kazan"];
  const buttonTypes = ['primary','secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  const [btnType, setBtnType] = useState(0)
  

  return (
    <>
      <Message />
      <ListGroup items={cities} title="Cities" onSelectItem={onSelectItem} />
      <Alert>hi, <p>piece</p></Alert>
      <MyButton onBtnPress={setBtnType} btnTypes={buttonTypes} currentState={btnType}></MyButton>
    </>
  );
}

export default App;
