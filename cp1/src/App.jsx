import React from "react"
import Semaforo from "./Components/Semaforo/Semaforo"
import Carros from "./Components/Carros/Carros"
import Carteirinha from "./Components/Carteirinha/Carteirinha"


export default function App() {

    const ListaDeCarros = ["Civic", "Versa", "Lamborghini Aventador", "Lamborghini Urus", "Ferrari Itália", " Ferrari California", " Ferrari F8", " Porshe 911", "Porshe Cayenne", " BMW X1"]
    
    const ImgStyle={
        height: '12em',
        borderRadius: '1em'
    }

    return(
        <>
            <h1>Gustavo Ribeiro Maio</h1>
            <h1>RM:93211</h1>
            <h1>1TDSR</h1>
            <h2 style={{textAlign:'center', fontSize: '3em'}}>Semáforo</h2>
             
            <Semaforo/>
            <Carros
            ListaDeCarrosProps={ListaDeCarros}
            />
           <Carteirinha/> 
        </>
    )
}

