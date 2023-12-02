import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "./App.css"

function App() {

  //es mejor manejar las api por variables de entorno
  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()

  useEffect (() => {
    axios.get(`${API_URL}`)
      .then((data) => {
        setCriptos(data.data.data)
    })
    .catch(() => {
      console.error("la peticion fallo")
    })
  }, [])

  //lowder condicion para informar al usuario
  if(!criptos)
    return        <span>Cargando...</span>

  //recomendacion siempre es bueno usar llaves (key)
  return(
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        { 
          criptos.map( ({id, name, priceUsd}) => (
            <li key={id}>
              Nombre: {name} <br />
              Precio: {priceUsd} <br />   
            </li>
          )) 
        }
      </ol>
    </>
  )
}

export default App
