import React from "react";
import Img1 from "../Carteirinha/img/PHOTO-2021-10-08-12-49-32.jpg"
import Img2 from "../Carteirinha/img/pexels-bruno-salvadori-2269872.jpg"
import Img3 from "../Carteirinha/img/pexels-ali-pazani-2681751.jpg"
import Img4 from "../Carteirinha/img/man-g30a4a22eb_1280.png"

export default function Carteirinha(){
  
    const BgCarteirinha={
        backgroundColor: '#a25',
        width: '35em',
        height: '18em',
        borderRadius: '1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'       
    }

    const BgCarteirinha2={
        backgroundColor: '#d199',
        width: '33em',
        height: '18em',
        borderRadius: '1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'       
    }

    const BgCarteirinha3={
        backgroundColor: '#e345',
        width: '33em',
        height: '18em',
        borderRadius: '1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'       
    }

    const BgCarteirinha4={
        backgroundColor: '#e34',
        width: '37em',
        height: '18em',
        borderRadius: '1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'       
    }

    const ImgStyle={
        height: '11em',
        borderRadius: '1em',
        width: '12em'
    }

    const alinhaWords={
        textAlign: 'center',
    }

    const FormCss={
        width: '5em'
    }

    return(
       
        <div>
           <section style={BgCarteirinha}> 
            
            <div>
                    <img src={Img1} alt="Foto de perfil Abner" style={ImgStyle}/>
                    <h3>Nome </h3>
                    <p>Gustavo Ribeiro Maio</p>
            </div>


            <div>
                    <h3>RM </h3>
                    <p>93211</p>
            </div>

            <div>
                    <h3>CURSO </h3>
                    <p style={alinhaWords}>ADS</p>
                    
            
            </div>
            <div>
                    <h3>TURMA </h3>
                    <p>1TDSR</p>
            
            </div>
           </section>
           
           <section style={BgCarteirinha2}>
           <div>
                    <img src={Img2} alt="Foto de perfil Cleiton" style={ImgStyle}/>
                    <h3>Nome </h3>
                    <p>Nickolas Kenji </p>
            </div>
            <div>
                    <h3>RM </h3>
                    <p>95281</p>
            </div>
            <div>
                    <h3>CURSO </h3>
                    <p>ADS</p>
            
            </div>
            <div>
                    <h3>TURMA </h3>
                    <p>1TDSR</p>
            
            </div>
           </section>

           <section style={BgCarteirinha3}>
           <div>
                    <img src={Img3} alt="Foto de perfil Marina" style={ImgStyle}/>
                    <h3>Nome </h3>
                    <p>Lucas Antunes</p>
            </div>
            <div>
                    <h3>RM </h3>
                    <p>95781</p>
            </div>
            <div>
                    <h3>CURSO </h3>
                    <p>ADS</p>
            
            </div>
            <div>
                    <h3>TURMA </h3>
                    <p>1tdsr</p>
            
            </div>
           </section>

           <section style={BgCarteirinha4}>
           <div>
                <img src={Img4} alt="Foto de perfil anônimo" style={ImgStyle}/>
                
                <h3>Nome </h3>

                <form action="./" method="get" onsubmit="true">
                    <input type="text" name='nome' id='nomeId'/>
                </form>
                
            </div>
            
            <div>
                    <h3>RM </h3>

                    <form action="./" method="get" onsubmit="true">
                        <input type="number" name='rm' id='rmId' style={FormCss}/>
                    </form>

            </div>
            
            <div>
                    <h3>CURSO </h3>

                    <form action="./" method="get" onsubmit="true">
                        <input type="text" name='curso' id='cursoId'/>
                    </form>
                    
            </div>
            
            <div>
                <h3>TURMA</h3>

                <form action="./" method="get" onsubmit="true">
                    <input type="text" name='turma' id='turmaId' style={FormCss}/>
                </form>

            </div>
           </section>
        </div>
    )
}
