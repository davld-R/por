import Menu from './components/Menu';
import Banner from './components/Banner';
import Experiencia from './components/Experiencia';
import Proyectos from './components/Proyectos';
import Skills from './components/Skills';
import Html5Icon from './components/svg/Html5Icon';
import Css5Icon from './components/svg/Css5Icon';
import JavaScriptIcon from './components/svg/JavaScriptIcon';
import ReactIcon from './components/svg/ReactIcon';
import DjangoIcon from './components/svg/DjangoIcon';
import BootstrapIcon from './components/svg/BootstrapIcon';
import Hobbies from './components/Hobbies';
import MusicIcon from './components/svg/MusicIcon';
import FutIcon from './components/svg/FutIcon';
import TrotarIcon from './components/svg/TrotarIcon';
import SeriesIcon from './components/svg/SeriesIcon';
import LibroIcon from './components/svg/LibroIcon';
import CocinarIcon from './components/svg/CocinarIcon';
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
      <Skills key={1} nombre="HTML" Icon={Html5Icon}></Skills>
      <Skills key={2} nombre="CSS" Icon={Css5Icon}></Skills>
      <Skills key={3} nombre="Javascript" Icon={JavaScriptIcon}></Skills>
      <Skills key={4} nombre="React" Icon={ReactIcon}></Skills>
      <Skills key={5} nombre="Django" Icon={DjangoIcon}></Skills>
      <Skills key={6} nombre="Bootstrap" Icon={BootstrapIcon}></Skills>
      <h1 style={{ marginTop: '2rem' }}>Hobbies</h1>
      <Hobbies id={1} nombre="Música" Imagen={MusicIcon}></Hobbies>
      <Hobbies id={2} nombre="Fútbol" Imagen={FutIcon}></Hobbies>
      <Hobbies id={3} nombre="Trotar" Imagen={TrotarIcon}></Hobbies>
      <Hobbies id={4} nombre="Ver series" Imagen={SeriesIcon}></Hobbies>
      <Hobbies id={5} nombre="Leer" Imagen={LibroIcon}></Hobbies>
      <Hobbies id={6} nombre="Cocinar" Imagen={CocinarIcon}></Hobbies>
      <Formacion></Formacion>
      <SobreMi></SobreMi>
      <Footer></Footer>
    </section>
  );
}

export default App;
