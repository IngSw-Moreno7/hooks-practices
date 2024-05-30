import React, { useState } from 'react'

export const SecondComponent = () => {

  const [ name, setName ] = useState("Paola A. Moreno");
  const [ isNameChanged, setIsNameChanged ] = useState(false);

  const changeName = (e) => {
    if (isNameChanged) {
      setName("Paola A Moreno");
    } else {
      setName("Annita Molineiro");
    }
    setIsNameChanged(!isNameChanged);
  }

  return (
    <div>
      <h3>Componente: SecondComponent</h3>
      <p>{ name }</p>
      <div>
        <button className='button-large' onClick={ changeName }>Cambiar nombre</button>
      </div>
    </div>
  )
}