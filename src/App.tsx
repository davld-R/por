import Menu from './components/Menu';
import Banner from './components/Banner';
import Experiencia from './components/Experiencia';
import Proyectos from './components/Proyectos';
import Cifrado from './components/Proyectos/Cifrado';
import Equipos from './components/Proyectos/Equipos';
import Validaciones from './components/Proyectos/Validaciones';
import Proyecto1Icon from './assets/p1.webp';
import Proyecto2Icon from './assets/p2.webp';
import Proyecto3Icon from './assets/p3.webp';
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
  return (
    <>
      {/* Componente de Menu */}
      <Menu></Menu>

      {/* Componente de Banner */}
      <Banner></Banner>
      <div className="flex mb-6 items-center gap-4" id="experiencia">
        <MaletinIco width="32px" height="32px"></MaletinIco>
        <h1 className="text-3xl font-semibold">Experiencia profesional</h1>
      </div>

      {/* Componente de Experiencia */}
      {experiencia.map(({ key, nombre, empresa, fecha, funcion }) => (
        <Experiencia
          key={key}
          nombre={nombre}
          empresa={empresa}
          fecha={fecha}
          funcion={funcion}
        ></Experiencia>
      ))}

      {/* Componente de proyectos */}
      <div className="mt-36 mb-6 flex gap-4 items-center" id="proyectos">
        <CodeIcon width="32px" height="32px"></CodeIcon>
        <p className="dark:text-slate-50 text-3xl font-semibold">Proyectos</p>
      </div>
      <Proyectos
        nombre="Cifrado y descifrado"
        contenido="Este proyecto fue creado como parte del desafío ofrecido por Alura Latam y Oracle en el programa ONE. Protege la privacidad de tus comunicaciones o simplemente para divertirte intercambiando mensajes cifrados."
        imagen={Proyecto1Icon}
        code="https://github.com/davld-R/Challenge-Oracle-ONE-Encriptador"
        link="https://davld-r.github.io/Challenge-Oracle-ONE-Encriptador/"
      >
        <Cifrado></Cifrado>
      </Proyectos>
      <Proyectos
        nombre="Equipos organizados"
        contenido="Este proyecto ofrece una herramienta interactiva para crear equipos de trabajo de manera creativa. Además, podría proporcionar sugerencias para fomentar la colaboración y la innovación dentro de los equipos."
        imagen={Proyecto2Icon}
        code="https://github.com/davld-R/org"
        link="https://org-or07x6gen-juanrojas043-gmailcom.vercel.app/"
      >
        <Equipos></Equipos>
      </Proyectos>
      <Proyectos
        nombre="Validaciones de formulario"
        contenido="Este proyecto ofrece validaciones de una tienda de mascotas Además, ofrece de manera interactiva los formularios diligenciados con los datos solicitados"
        imagen={Proyecto3Icon}
        code="https://github.com/davld-R/html-validaciones"
        link="https://davld-r.github.io/html-validaciones/"
      >
        <Validaciones></Validaciones>
      </Proyectos>

      {/* Componente de Skills */}
      <h1
        id="skills"
        className="mt-36 mb-10 text-xl font-semibold text-center font-mono"
      >
        Skills
      </h1>
      <section className="flex gap-11 flex-wrap justify-center">
        <Skills nombre="HTML">
          <Html5Icon width="64px" height="64px"></Html5Icon>
        </Skills>
        <Skills nombre="CSS">
          <Css5Icon width="64px" height="64px"></Css5Icon>
        </Skills>
        <Skills nombre="JavaScript">
          <JavaScriptIcon width="54px" height="54px"></JavaScriptIcon>
        </Skills>
        <Skills nombre="React">
          <ReactIcon width="64px" height="64px"></ReactIcon>
        </Skills>
        <Skills nombre="Django">
          <DjangoIcon></DjangoIcon>
        </Skills>
        <Skills nombre="Tailwind CSS">
          <BootstrapIcon></BootstrapIcon>
        </Skills>
      </section>

      {/* Componente de Hobbies */}
      <h1
        className="mt-36 mb-10 text-xl font-semibold text-center font-mono"
        id="hobbies"
      >
        Hobbies
      </h1>
      <section className="flex gap-11 flex-wrap justify-center mb-32">
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

      {/* Componente de SobreMi */}
      <SobreMi></SobreMi>

      {/* Componenete de Footer */}
      <Footer></Footer>
    </>
  );
}

export default App;
