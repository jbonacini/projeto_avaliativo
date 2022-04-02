// import React, {useState} from 'react';
import React from 'react';
import './App.css';

import Desafio from './components/Desafio';
import Numeros from './components/Numeros'
import Propriedade from './components/Propriedade'
import Recesso from './components/Recesso'
import Sorteio from './components/Sorteio'

function App() {
  // const [min, setMin] = useState(10)
  // const [max, setMax] = useState(100)

  return (
    <div className='App'>
      <h1>PROJETO AVALIATIVO REACT-REDUX 1º BIMESTRE</h1>

      <div className='linha'>
        {/* <Intervalo min={min} max={max} 
        onMinChanged={setMin} onMaxChanged={setMax}></Intervalo> */}
        <Desafio></Desafio>
      </div>

      <div className='linha'>     
        <Numeros></Numeros>
        <Propriedade
          titulo='QUAL SUA NOTA?'
          aluno='José Bonacini Neto'
        ></Propriedade>
        <Recesso></Recesso>
        <Sorteio></Sorteio>
      </div>

    </div>
  )
}

export default App;
