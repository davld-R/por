import UsuarioIco from './Icons/UsuarioIco';

function SobreMi() {
  const isDarkMode =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <section>
      <div className="flex gap-6 pb-6 items-center">
        <UsuarioIco className={`${isDarkMode ? '#fff' : '#000'}`} />
        <p className="text-3xl font-semibold">Sobre mi</p>
      </div>
      <p className="pb-4">
        ¡Hola! Mi nombre es Juan David Rojas, y me considero un apasionado por
        el mundo de la tecnología y el desarrollo de software. Desde temprana
        edad, descubrí mi fascinación por explorar nuevas posibilidades y
        aprender constantemente. Me encanta enfrentar desafíos y buscar formas
        creativas de resolver problemas a través del código.
      </p>
      <p>
        Estoy motivado por adquirir experiencia y desarrollarme como un
        profesional en el campo del desarrollo web y sus disciplinas
        relacionadas, poseo un firme compromiso y dedicación para alcanzar mis
        metas.
      </p>
    </section>
  );
}

export default SobreMi;
