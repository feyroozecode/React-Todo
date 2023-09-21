import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [todo, setTodo]   = useState("")
  const [todos]           = useState([])
  const [count, setCount] = useState(0)



  // funcitons 
  setTodo((todo) =>  )

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
      <input type="text" placeholder='Coder une app'/> 
          <button type="button" onClick={setTodo}>Ajouter</button>
      
      </div>
     
    <itemsList />

    </>
  )
}

function addTodo(todo) {

  const [input, setInput] = useState('')


  const handleInputChange = (e) =>  {
    setInput(e.target.value)
  }

  return ( 
        <>
          <div>
            <input 
              type="text" 
              placeholder='Enter a text'
              value={input}
              onChange={handleInputChange}
              />
              
          </div>
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