import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [todo, setTodo]   = useState("")
  const [todos]           = useState([])
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <center> <h1> React Todo </h1> </center>
      </div>

      <div class="">
        <center>
           <ul>
              <li></li>
           </ul>
        </center>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
      
        </p>
      </div>
     
    <itemsList />

    </>
  )
}

function addTodo(todo) {
  return ( 
        <>
          input
        </>
  )
}

function itemsList(todos) {
  todos.map((todo, index) =>{
   <ul>
     <li key={index}>
      { todo.text } 
    </li>
   </ul>
  })
}

function addToList(todo) {

}