import {useState} from 'react'

export default function Button({ value, onClick }) {
  const [isClicked, setIsclicked] = useState(false)
  let className = 'button'
  if (isClicked)
    className += ' guessed'

  function clickHandler(){
    setIsclicked(true)
    onClick(value)
  }

  return (
  <button
    className={className}
    onClick={clickHandler}
  >{value}
  </button>);
  }
