import { useState } from 'react'

import './App.css'
import './components/add_field'

export default function App() {

  


  return (
    <>
      <div>
        <center> <h1> React Todo </h1> </center>
      </div>

    <addTodo />
     
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