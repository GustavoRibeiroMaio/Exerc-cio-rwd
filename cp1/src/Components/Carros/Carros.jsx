import React from "react";

export default function Carros(props){
  
    return(
       
        <div>
            <ol>
                <li>{props.ListaDeCarrosProps[0]}</li>
                <li>{props.ListaDeCarrosProps[1]}</li>
                <li>{props.ListaDeCarrosProps[2]}</li>
                <li>{props.ListaDeCarrosProps[3]}</li>
                <li>{props.ListaDeCarrosProps[4]}</li>
                <li>{props.ListaDeCarrosProps[5]}</li>
                <li>{props.ListaDeCarrosProps[6]}</li>
                <li>{props.ListaDeCarrosProps[7]}</li>
                <li>{props.ListaDeCarrosProps[8]}</li>
                <li>{props.ListaDeCarrosProps[9]}</li>
            </ol>
        </div>
    )
}