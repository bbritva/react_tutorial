import React from 'react'
import ReactDOM from 'react-dom'

function HelloWorld({name}) {
    return <h1>Hello, {name}!</h1>
}

ReactDOM.render(
    <HelloWorld name="Jeremy"></HelloWorld>,
    document.getElementById('root')
)