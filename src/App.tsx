import Menu from './components/Menu';
import Banner from './components/Banner';
import Experiencia from './components/Experiencia';
import Proyectos from './components/Proyectos';
import Skills from './components/Skills';
import Html5Icon from './components/Icons/Html5Icon';
import Css5Icon from './components/Icons/Css5Icon';
import JavaScriptIcon from './components/Icons/JavaScriptIcon';
import ReactIcon from './components/Icons/ReactIcon';
import DjangoIcon from './components/Icons/DjangoIcon';
import BootstrapIcon from './components/Icons/TailwindIcon';
import Hobbies from './components/Hobbies';
import MusicIcon from './components/Icons/MusicIcon';
import FutIcon from './components/Icons/FutIcon';
import TrotarIcon from './components/Icons/TrotarIcon';
import SeriesIcon from './components/Icons/SeriesIcon';
import LibroIcon from './components/Icons/LibroIcon';
import CocinarIcon from './components/Icons/CocinarIcon';
import Formacion from './components/Formacion';
import SobreMi from './components/SobreMi';
import Footer from './components/Footer';

const experiencia = [
  {
    key: 1,
    nombre: 'Desarrollador de software',
    empresa: 'Fundación Suyusama',
    fecha: 2023,
    funcion:
      'Creación de plataforma. Desarrollo de una página web para gestionar proyectos, usuarios y resultados en sistemas agroalimentarios. Mantenimiento del Sitio. Garantizar el funcionamiento continuo de la página web y su disponibilidad. Gestión de Base de Datos: Diseño e implementación de una base de datos para almacenar información relevante.',
  },
  {
    key: 2,
    nombre: 'Ingeniero de sistemas',
    empresa: 'Maria goretti',
    fecha: 2022,
    funcion:
      'Atención de usuarios. Gestión de solicitudes de soporte técnico y asistencia. Administración Base de datos. Mantenimiento de registros. Desarrollo y Mejora de la Biblioteca: Programación y optimización de un módulo en sistemas de información.',
  },
];

function App() {
  return (
    <section className="contenedor">
      <Menu></Menu>
      <Banner></Banner>
      {experiencia.map(({ key, nombre, empresa, fecha, funcion }) => (
        <Experiencia
          key={key}
          nombre={nombre}
          empresa={empresa}
          fecha={fecha}
          funcion={funcion}
        ></Experiencia>
      ))}
      <Proyectos></Proyectos>
      <h1 style={{ marginTop: '2rem' }}>Skills</h1>
      <Skills nombre="HTML">
        <Html5Icon width="64px" height="64px"></Html5Icon>
      </Skills>
      <Skills nombre="CSS">
        <Css5Icon width="64px" height="64px"></Css5Icon>
      </Skills>
      <Skills nombre="JavaScript">
        <JavaScriptIcon></JavaScriptIcon>
      </Skills>
      <Skills nombre="React">
        <ReactIcon></ReactIcon>
      </Skills>
      <Skills nombre="Django">
        <DjangoIcon></DjangoIcon>
      </Skills>
      <Skills nombre="Tailwind CSS">
        <BootstrapIcon></BootstrapIcon>
      </Skills>
      <h1 style={{ marginTop: '2rem' }}>Hobbies</h1>
      <Hobbies nombre="Música">
        <MusicIcon></MusicIcon>
      </Hobbies>
      <Hobbies nombre="Fútbol">
        <FutIcon></FutIcon>
      </Hobbies>
      <Hobbies nombre="Trotar">
        <TrotarIcon></TrotarIcon>
      </Hobbies>
      <Hobbies nombre="Ver series">
        <SeriesIcon></SeriesIcon>
      </Hobbies>
      <Hobbies nombre="Leer">
        <LibroIcon></LibroIcon>
      </Hobbies>
      <Hobbies nombre="Cocinar">
        <CocinarIcon></CocinarIcon>
      </Hobbies>
      {/* 
      
      
      
      <Hobbies nombre="Cocinar" Imagen={CocinarIcon}></Hobbies> */}
      <Formacion></Formacion>
      <SobreMi></SobreMi>
      <Footer></Footer>
    </section>
  );
}

export default App;
