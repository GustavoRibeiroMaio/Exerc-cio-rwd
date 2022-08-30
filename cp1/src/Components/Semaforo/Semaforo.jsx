import React from "react";


export default function Semaforo(){
  
    const RedColor = {
        backgroundColor: '#f00',
        textAlign: 'center',
        opacity: '100',
        borderRadius: '20em',
        width: '30em'
    }
    const YellowColor = {
        backgroundColor: '#ff0',
        textAlign: 'center',
        opacity: '0',
        borderRadius: '20em',
        width: '30em'
    }
    const GreenColor = {
        backgroundColor: '#0f0',
        textAlign: 'center',
        opacity: '0',
        borderRadius: '20em',
        width: '30em'
    }

    const TrocaSinal = ()=>{
        if(document.getElementById('StopSign').style.opacity == '100'){
            document.getElementById('GoSign').style.opacity = '100'       
            document.getElementById('StopSign').style.opacity = '0'       
        }
        else if (document.getElementById('PayAttSign').style.opacity == '100'){
            document.getElementById('StopSign').style.opacity = '100'       
            document.getElementById('PayAttSign').style.opacity = '0'  
        }
        else if (document.getElementById('GoSign').style.opacity == '100'){
            document.getElementById('PayAttSign').style.opacity = '100'       
            document.getElementById('GoSign').style.opacity = '0'  
        }
    }

    return(
       
        <div>
          <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <div id='StopSign' style={RedColor}>PARE</div>
                <div id='PayAttSign' style={YellowColor}>PRESTE ATENÇÃO</div>
                <div id='GoSign' style={GreenColor}>SIGA</div>
         </div>
            <button id="btnSinal" onClick={TrocaSinal}>Troca de Sinal</button>
        </div>
    )
}