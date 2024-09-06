import React, { useEffect, useState } from 'react'
import styles from './Persona.module.css'

export default function Persona({name, id}) {
  const [persona, setPersona] = useState(null);
  const [moreDetails, setMoreDetails] = useState(false);

  useEffect(() => {
    if(moreDetails){
      fetch(`https://retoolapi.dev/5tTIpR/fakepeople/${id}`)
      .then(response=> response.json())
      .then(data => setPersona(data))
    };
  },[moreDetails])

  return (
    name ? (<>
    <div id={styles.princCont}>
      <div id={styles.propCont}>
        <p>{"Nombre : " + name}</p>
        {moreDetails && persona ? (
          <>
            <p>{"Apellido : " + persona.last}</p>
            <p>{"Mail : " + persona.email}</p>
            <p>{"IP : " + persona.ipaddress}</p>
          </>
        ) : null}
      </div>
      <button onClick={() => setMoreDetails(!moreDetails)}>More Details</button>
      </div>
      </>
    ) : (
      <p>Cargando</p>
    )
  );  
}
