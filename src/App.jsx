import { useState } from 'react'
import background from './assets/background.jpg'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className='textContainer'>
          <h1>
            Una web un poco minimalista
          </h1>
          <p>
            Una página minimalista es un sitio web diseñado con un enfoque en la <span className='textResaltado'>simplicidad</span> y la <span className='textResaltado'>claridad</span>. 
            El objetivo principal es eliminar elementos <span className='textResaltado'>innecesarios</span> y centrarse en el contenido esencial, proporcionando una experiencia de usuario limpia y sin distracciones. 
            En una página minimalista, los elementos visuales, como los colores y las tipografías, se utilizan de manera <span className='textResaltado'>sutil</span> y <span className='textResaltado'>eficaz</span> para mantener la <span className='textResaltado'>armonía</span> y la <span className='textResaltado'>coherencia</span>. 
            Este estilo busca lograr un diseño <span className='textResaltado'>elegante</span> y <span className='textResaltado'>funcional</span> que sea fácil de navegar y entender.
          </p>
        </div>
        <div className='imgContainer'>
          <img src={background} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
