import { useState }   from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

export default function App() {

  const initialList = [ 
      { id: 1, text: 'Lire le Coran AlAnaam, A\'Araf ' },
      { id: 2, text: 'Coder une application Todo en React' },
      { id: 3, text: 'Ammeliorer le profil git ',  }
    ]

  const [todos, setTodos] = useState(initialList)
  const [input, setInput] = useState('')

  //const handleInputChange = (e) => handleChange={e}
  

  function handleChange(event) {
    setInput(event.target.value);
  }
  
  function handleAdd() {
    const item = { id: uuidv4(), text: input }
    const updatedTodos = [...todos, item];

    setTodos(item)

    setInput('')
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
            onChange={handleChange}
            />     
        <button 
          onClick={handleAdd}
          type="button"
          >Ajouter</button>      
         <p>
          <i>Live Todo: </i> <strong> { input } </strong> 
        </p>
        
          <ul>
          {
            todos.map((item => (
              <li key={item.id}> { item.text } </li>
            )))
          }
     </ul>
      </div>
     
   
 
    </>
  )
}

