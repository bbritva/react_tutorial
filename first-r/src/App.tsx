import { useState } from "react";
import "./App.css";
import Message from "./Message";
import Alert from "./components/Alert";
import MyButton from "./components/Button";
import ListGroup from "./components/ListGroup";

import axios from 'axios'

function App() {
  const cities = ["Paris", "Rome", "Kazan"];
  const buttonTypes = ['primary','secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  const [btnType, setBtnType] = useState(0)


  const onBtnPress = (index : number) => {
    setBtnType(index)
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      console.log(persons);
    })
    axios.post(`https://jsonplaceholder.typicode.com/users`, { "name" : "user" })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  

  return (
    <>
      <Message />
      <ListGroup items={cities} title="Cities" onSelectItem={onSelectItem} />
      <Alert>hi, <p>piece</p></Alert>
      <MyButton onBtnPress={onBtnPress} btnTypes={buttonTypes} currentState={btnType}></MyButton>
    </>
  );
}

export default App;
