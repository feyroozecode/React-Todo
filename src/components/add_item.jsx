export default function AddItem ({text, onChange, handleKey, onAdd} ) {
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
           <button 
        onClick={onAdd}
        type="button"
        >Ajouter</button>   
     </div>
     
        
       <p>
        <i>Live Todo: </i> <strong> { text } </strong> 
      </p>
  </div>
  </>
);
}