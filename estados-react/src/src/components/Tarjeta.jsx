import React from 'react';
import { useState } from 'react';
import '../css/Tarjeta.css';





function Tarjeta(props) {
    
    const [titulo, setTitulo] = useState("");
    const [software, setSoftware] = useState("");
    const [cursos, setCursos] = useState("");

    const actuTitulo = () => {
        const changeTitulo = document.getElementById('text1').value;
        setTitulo(changeTitulo);
    }
    const actuSoftware = () => {
        const changeSoftware = document.getElementById('text2').value;
        setSoftware(changeSoftware);
    }
    const actuCursos = () => {
        const changeCursos = document.getElementById('text3').value;
        setCursos(changeCursos);
    }
    const actualizarimg1 = () => {
        const divConFondo = document.querySelector('.fondo');
        divConFondo.style.backgroundImage = "url('src/Imagenes/3d.jpg')";
      }
      const actualizarimg2 = () => {
        const divConFondo = document.querySelector('.fondo');
        divConFondo.style.backgroundImage = "url('src/Imagenes/car.jpg')";
      }
      const actualizarimg3 = () => {
        const divConFondo = document.querySelector('.fondo');
        divConFondo.style.backgroundImage = "url('src/Imagenes/code.jpg')";
      }
      const actualizarimg4 = () => {
        const divConFondo = document.querySelector('.fondo');
        divConFondo.style.backgroundImage = "url('src/Imagenes/K6Rz.gif')";
      }
    return (
        <div className='App'>
            <div className="row">
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start ps-5 fondo ">
                    <h1>{titulo}</h1>
                    <h4>{software}</h4>
                    <p>{cursos}</p>
                    <button type='button'className='mt-2 btn d-flex justify-content-start xd'>¡Inscribete!</button>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                    <div className='no d-flex flex-column  '>
                        <input id='text1' type="text" className='form-control' placeholder='Nombre De Curso' />
                        <button type='button' className='mt-2 btn d-flex justify-content-start' onClick={actuTitulo}>Actualizar</button>
                        <input className='mt-2 form-control' type="text" id='text2' placeholder='Nombre De Curso' />
                        <button type='button' className='mt-2 btn d-flex justify-content-start' onClick={actuSoftware}>Actualizar</button>
                        <textarea className='mt-2 form-control' name="descripcion" placeholder='Descripcion' id="text3" cols="40" rows="2"></textarea>
                        <button type='button' className='mt-2 btn d-flex justify-content-start' onClick={actuCursos}>Actualizar</button>

                        <br />


                        <div className=''>
                        <button onClick={actualizarimg1} type='button' className='btnimg'>
                            <img className='imgs' src="src/Imagenes/3d.jpg" alt="" width="100px" />
                        </button>
                        <button onClick={actualizarimg2} type='button' className='btnimg'>
                        <img className='imgs' src="src/Imagenes/car.jpg" alt="" width="100px" />
                        </button>
                        <button onClick={actualizarimg3} type='button' className='btnimg'>
                            <img className='imgs' src="src/Imagenes/code.jpg" alt="" width="100px" />
                        </button>
                        <button onClick={actualizarimg4} type='button' className='btnimg'>
                            <img className='imgs' src="src/Imagenes/K6Rz.gif" alt="" width="100px" />
                        </button>
                    </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Tarjeta