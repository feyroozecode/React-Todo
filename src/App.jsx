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

 
  async function handleKeyPressed(event) {
    if(event.key === "Enter") {
      await handleAdd();
    }
  }

  function handleChange(event) {
    setInput(event.target.value);
  }
  
  function handleAdd() {
    
    // heck if the trimmed input is empty
    const trimInput = input.trim();

    if( trimInput  === '' ) {
      // dont add an empty item
      return;
    }

    const item = { id: uuidv4(), text: trimInput }
  
    // Add new item to the existing todos array
    const updatedTodos = [...todos, item];

    // Update the todos statewith new array
    setTodos(updatedTodos)

    setInput('')

   
  }

  return (
    <>
      <div>
        <center> <h1> React Todo </h1> </center>

      <AddItem 
          name={input}
          onChange={handleChange}
          onAdd={handleAdd}
          handleKey={handleKeyPressed}
      />

      </div>

      <div>
        <List list={todos} />
      </div>
     
   
 
    </>
  );
}

  function AddItem ({text, onChange, handleKey, onAdd} ) {
    return ( 
      <> 
      <div>
       <div className="input-container">
       <input 
            className='input_field'
            type="text" 
            placeholder='Enter a text'
            value={text}
            onChange={onChange}
            onKeyPress={handleKey} // Add this event handler 
            />     
            
           <AddBtn 
              theAdd={onAdd}
           />
       </div>
       
          
         <p>
          <i>Live Todo: </i> <strong> { text } </strong> 
        </p>
    </div>
    </>
  );
}

  function  List( {list} ) {
      return (
        <> 
          <ul>
          {
            list.map((item => (
              <li key={item.id}> { item.text } </li>
            )))
          }
        </ul>
     </>
    );
  }

  function AddBtn ({theAdd}) {
    const [ hovered, setHovered ] = useState(false)

    return (
      <>
         <button 
              onClick={theAdd}
              onMouseEnter={ () => setHovered(true)  }
              onMouseLeave={ () => setHovered(false) }
              type="button"
          >
           { hovered ? " Ajouter" : 'Cliquer ici' }
          </button>   
      </>
    );
  } 