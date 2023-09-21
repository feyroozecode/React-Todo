import { useState } from 'react'
 
export default function addTodo(todo) {

  
  
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