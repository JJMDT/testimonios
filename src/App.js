
import './App.css';
import {Testimonio} from './componentes/testimonio';
// asi se importa un componente por nombre usando { }
//import {Testimonio} from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
        nombre="Emma Bostian"
        pais="Suecia"
        cargo="Ingeniero de software"
        empresa="Spotify"
        testimonio="Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify."
        imagen="emma"/>

        <Testimonio 
        nombre="Sara Wang"
        pais="Nigeria"
        cargo="Developer de software"
        empresa="Amanazon"
        testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida . "
        imagen="sara"/>

        <Testimonio 
        nombre="James Kent"
        pais="Francia"
        cargo="Ingeniero de software"
        empresa="Uala"
        testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida . '
        imagen="shaw"/>
      </div>
    </div>
  );
}

export default App;
