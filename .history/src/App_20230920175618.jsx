import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [todo, setTodo]   = useState()
  const [todos]           = 
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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
     
    <!-- List -->
    todosList()

    </>
  )
}

function todosList(todos) {
  todos.map((todo) =>{
    <p key={todo.id}>
      { todo.text } - { todo.status }
    </p>
  })
}

function addToList(todo) {

}