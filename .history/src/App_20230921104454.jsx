import { useState } from 'react'

import './App.css'
import './components/add_field'

export default function App() {

  const initialList = [ 
      'Lire le Coran AlAnaam, A\'Araf ' ,
      'Coder une application Todo en React',
      'Ammeliorer le profil git '
    ]

  const [todos, setTodos] = useState(initialList)
  const [input, setInput] = useState('')

  const handleInputChange = (e) =>  {
    setInput(e.target.value)
  }

  setInput((todo) => todos.push(todo)) 
  
  function handleAdd() {
    const item = todos.concat({ input })

    setTodos(item)
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
        <button onClick={setInput}>Ajouter</button>      
         <p>
           Vous avez entrer: <strong> { input } </strong>
          </p>
               
      </div>
     
 
    </>
  )
}

