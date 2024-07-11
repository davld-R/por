import UsuarioIco from './Icons/UsuarioIco';
import JuanRojas from '../assets/p4.webp';

function SobreMi() {
  return (
    <section id="sobre-mi">
      <div className="flex gap-6 pb-6 items-center">
        <UsuarioIco />
        <p className="text-3xl font-semibold">Sobre mi</p>
      </div>
      <div className="flex gap-11 max-md:flex-col-reverse max-md:items-center">
        <div className="font-mono dark:text-slate-50 text-gray-700">
          <p className="pb-4 ">
            ¡Hola! Mi nombre es Juan David Rojas, y me considero un apasionado
            por el mundo de la tecnología y el desarrollo de software.
            <span className="dark:text-yellow-200 text-yellow-500">
              {' '}
              Desde temprana edad, descubrí mi fascinación por explorar nuevas
              posibilidades y aprender constantemente.
            </span>{' '}
            Me encanta enfrentar desafíos y buscar formas creativas de resolver
            problemas a través del código.
          </p>
          <p>
            Estoy motivado por adquirir experiencia y desarrollarme como un
            profesional en el campo del desarrollo web y sus disciplinas
            relacionadas,{' '}
            <span className="dark:text-yellow-200 text-yellow-500">
              poseo un firme compromiso y dedicación para alcanzar mis metas.
            </span>
          </p>
        </div>
        <div className="">
          <img
            src={JuanRojas}
            alt="Imagen Juan Rojas"
            className="max-w-56 rounded-2xl border-4 dark:border-white border-slate-300 origin-center rotate-3"
          />
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
