import { useState } from ''
 
export default function addTodo(todo) {

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
  
                <p>
                  Vous avez entrer <strong> { input } </strong>
                </p>
            </div>
          </>
    )
  }