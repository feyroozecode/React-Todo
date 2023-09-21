import { useState } from 'react'

import './App.css'

export default function App() {

  const initialList = [ 
      { id: 1, text: 'Lire le Coran AlAnaam, A\'Araf ' },
      { id: 2, text: 'Coder une application Todo en React' },
      { id: 3, text: 'Ammeliorer le profil git ',  }
    ]

  const [todos, setTodos] = useState(initialList)
  const [input, setInput] = useState('')

  const handleInputChange = (e) =>  {
    setInput(e.target.value)
  }
  
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
        <button 
          onClick={handleAdd}
          type='button'
          >Ajouter</button>      
         <p>
          <i>Live Todo: </i> <strong> { input } </strong> 
          </p>
        
          <ul>
          {
            todos.map(((item, => (
              <li key={index}> { item.text } </li>
            )))
          }
     </ul>
      </div>
     
   
 
    </>
  )
}

