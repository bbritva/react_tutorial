// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Message from './Message'
import ListGroup from './components/ListGroup'

function App() {
  const cities = ["Paris", "Rome", "Kazan"];

  const onSelectItem = (item: string) => {
    console.log(item);
    
  }

  return (
    <>
      <Message />
      <ListGroup items={cities} title='Cities' onSelectItem={onSelectItem}/>
    </>
  )
}

export default App
