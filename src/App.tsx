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
import SobreMi from './components/SobreMi';
import Footer from './components/Footer';
import MaletinIco from './components/Icons/MaletinIco';
import CodeIcon from './components/Icons/CodeIcon';

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
  // const isDarkMode =
  //   localStorage.theme === 'dark' ||
  //   (!('theme' in localStorage) &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
      <div className="flex mb-6 items-center gap-4" id="experiencia">
        <MaletinIco width="32px" height="32px"></MaletinIco>
        <h1 className="text-3xl font-semibold">Experiencia profesional</h1>
      </div>
      {experiencia.map(({ key, nombre, empresa, fecha, funcion }) => (
        <Experiencia
          key={key}
          nombre={nombre}
          empresa={empresa}
          fecha={fecha}
          funcion={funcion}
        ></Experiencia>
      ))}
      <div className="mt-36 mb-6 flex gap-4 items-center">
        <CodeIcon width="32px" height="32px"></CodeIcon>
        <p className="dark:text-slate-50 text-3xl font-semibold">Proyectos</p>
      </div>
      <Proyectos></Proyectos>
      <h1
        id="skills"
        className="mt-36 mb-10 text-xl font-semibold text-center font-mono"
      >
        Skills
      </h1>
      <section className="flex flex-wrap justify-between">
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
      </section>
      <h1 className="mt-36 mb-10 text-xl font-semibold text-center font-mono">
        Hobbies
      </h1>
      <section className="flex flex-wrap justify-between mb-32">
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
      </section>
      <SobreMi></SobreMi>
      <Footer></Footer>
    </>
  );
}

export default App;
