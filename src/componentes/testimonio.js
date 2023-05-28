import React from 'react';
import '../style-sheets/testimonio.css';

// esta es la forma de exportar un componente nombrado.
//export function Testimonio(){
export function Testimonio(props){
  const data = {
  nombre: props.nombre,
  pais: props.pais,
  cargo: props.cargo,
  empresa: props.empresa,
  testimonio: props.testimonio,
  imagen: props.imagen
};
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt={(`foto de ${props.nombre}`)}
      />
      <div className='texto-testimonio'>
        <p className='nombre-testimonio'><b> {props.nombre}</b> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='relato-testimonio'> "{props.testimonio}"</p>
      </div>
    </div>
  );
}

// esta es la forma por defecto de exportar un componente
//export default Testimonio;