import Menu from './components/Menu';
import Banner from './components/Banner';
import Experiencia from './components/Experiencia';

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
      {/* <Experiencia
        key={1}
        nombre="Desarrollador de software"
        empresa="Fundación Suyusama"
        fecha={2023}
        funcion="Creación de plataforma. Desarrollo de una página web para gestionar
            proyectos, usuarios y resultados en sistemas agroalimentarios.
            Mantenimiento del Sitio. Garantizar el funcionamiento continuo de la
            página web y su disponibilidad. Gestión de Base de Datos: Diseño e
            implementación de una base de datos para almacenar información
            relevante."
      ></Experiencia> */}
      {experiencia.map(({ key, nombre, empresa, fecha, funcion }) => (
        <Experiencia
          key={key}
          nombre={nombre}
          empresa={empresa}
          fecha={fecha}
          funcion={funcion}
        ></Experiencia>
      ))}
    </section>
  );
}

export default App;
//
