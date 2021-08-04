import React from 'react';
import './App.css';


export default function caixa(props){

  return(
        <>
            <p>{props.site}</p>
            
            {props.children}
            {props.children[0]}
            {props.children[1]}
        </>
  );
}