import React, { useState } from 'react';
import './App.css';

import Nota from './nota';
import Resultado from './resultado';

export default function App(){

  const [ nota1, setNota1 ] = useState()
  const [ nota2, setNota2 ] = useState()
  const [ nota3, setNota3 ] = useState()
  const [ nota4, setNota4 ] = useState()

  return(
      <div class="classeApp">
          <Nota num={ 1 } nota={ nota1 } setNota={ setNota1 }/>
          <Nota num={ 2 } nota={ nota2 } setNota={ setNota2 }/>
          <Nota num={ 3 } nota={ nota3 } setNota={ setNota3 }/>
          <Nota num={ 4 } nota={ nota4 } setNota={ setNota4 }/>
          <Resultado somaNotas={parseFloat(nota1) 
                                  + parseFloat(nota2)
                                  + parseFloat(nota3)
                                  + parseFloat(nota4)/4}/>
      </div>
  )
}