import '../css/experiencia/experiencia.css';

import MaletinIco from './Icons/MaletinIco';

type props = {
  key: number;
  nombre: string;
  empresa: string;
  fecha: number;
  funcion: string;
};

function Experiencia({ nombre, empresa, fecha, funcion }: props) {
  return (
    <section className="experiencia__cabezera">
      <div>
        <MaletinIco width="32px" height="32px"></MaletinIco>
        <h1>Experiencia profesional</h1>
      </div>
      <div>
        <div>
          <h1>{nombre}</h1>
          <p>{empresa}</p>
          <p>{fecha}</p>
        </div>
        <div>
          <p>{funcion}</p>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
