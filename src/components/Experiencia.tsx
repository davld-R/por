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
    <section className="mb-10">
      <div className="flex pb-6 items-center gap-4">
        <MaletinIco width="32px" height="32px" color="#FACC15"></MaletinIco>
        <h1 className="text-3xl font-semibold">Experiencia profesional</h1>
      </div>
      <div className="pt-8">
        <div className="flex justify-between">
          <div className="">
            <p className="text-yellow-400 font-bold text-xl">{nombre}</p>
            <p className="text-xl font-semibold">{empresa}</p>
            <p className="dark:text-gray-300 text-gray-500 text-sm">{fecha}</p>
          </div>
          <div className="w-7/12">
            <p className="dark:text-gray-300 text-gray-500">{funcion}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
