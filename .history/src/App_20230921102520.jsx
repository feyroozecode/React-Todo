import { useState } from 'react'

import './App.css'
import './components/add_field'

export default function App() {

  const todos = useState([])
  const [input, setInput] = useState('')

  const handleInputChange = (e) =>  {
    setInput(e.target.value)
  }

  return (
    <>
      <div>
        <center> <h1> React Todo </h1> </center>
      </div>

      <div>
      <input 
           type="text" 
           placeholder='Enter a text'
           value={input}
           onChange={handleInputChange}
           />       
  
               
            </div>
     
    <itemsList />

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