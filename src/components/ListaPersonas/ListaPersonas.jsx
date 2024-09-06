import React, { useState, useEffect } from 'react'
import Persona from '../Persona/Persona'
import styles from './ListaPersonas.module.css'

export default function ListaPersonas() {
    const [lista, setLista] = useState([]);
    useEffect(() =>
        {
          fetch(`https://retoolapi.dev/5tTIpR/fakepeople`)
          .then((response) => response.json())
          .then((data) => setLista(data));
        }
        ,[]);

  return (
    lista.length > 0 ? (<div>
      <h1>Lista de personas</h1>
      <ul id={styles.ulList}>
      {lista.map((name) => (
        <li><Persona name={name.first} id={name.id} key={name.id}></Persona></li>
      ))}
      </ul>
    </div>) : (<p>No hay lista</p>)
  )
}
